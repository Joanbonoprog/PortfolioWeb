package org.portafolio.terminalkmp.terminal.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.FlowRow
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.input.key.Key
import androidx.compose.ui.input.key.KeyEventType
import androidx.compose.ui.input.key.key
import androidx.compose.ui.input.key.onPreviewKeyEvent
import androidx.compose.ui.input.key.type
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.TextRange
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.coroutines.delay
import org.jetbrains.compose.resources.Font
import org.portafolio.terminalkmp.data.Lang
import org.portafolio.terminalkmp.terminal.createClipboard
import org.portafolio.terminalkmp.terminal.createClock
import org.portafolio.terminalkmp.terminal.createGalleryOpener
import org.portafolio.terminalkmp.terminal.createLanguageChanger
import org.portafolio.terminalkmp.terminal.createLinkOpener
import org.portafolio.terminalkmp.terminal.detectLanguageTag
import org.portafolio.terminalkmp.terminal.initLanguageListener
import org.portafolio.terminalkmp.terminal.onLanguageUpdate
import org.portafolio.terminalkmp.terminal.engine.Line
import org.portafolio.terminalkmp.terminal.engine.PlatformServices
import org.portafolio.terminalkmp.terminal.engine.Span
import org.portafolio.terminalkmp.terminal.engine.TerminalAction
import org.portafolio.terminalkmp.terminal.engine.TerminalEngine
import org.portafolio.terminalkmp.terminal.engine.SpanStyle as TermStyle
import org.portafolio.terminalkmp.terminal.engine.welcomeLines
import terminal_kmp.shared.generated.resources.Res
import terminal_kmp.shared.generated.resources.firamono_nerd_bold
import terminal_kmp.shared.generated.resources.firamono_nerd_regular

private val Mono = FontFamily.Monospace

private val LocalMono = staticCompositionLocalOf<FontFamily> { Mono }
private val LocalServices = staticCompositionLocalOf<PlatformServices> { error("PlatformServices not provided") }
private val LocalFocusRequester = staticCompositionLocalOf<FocusRequester?> { null }
private val LocalCopyFeedback = staticCompositionLocalOf<(String) -> Unit> { { } }

@Composable
private fun Bubble(text: String, background: Color, foreground: Color = TerminalTheme.OnPill, onClick: (() -> Unit)? = null) {
    val shape = Modifier.clip(RoundedCornerShape(50))
    val pillModifier = if (onClick != null) shape.clickable(onClick = onClick) else shape
    Box(
        modifier = pillModifier
            .background(background)
            .padding(horizontal = 10.dp, vertical = 2.dp),
    ) {
        androidx.compose.material3.Text(
            text = text,
            color = foreground,
            fontFamily = LocalMono.current,
            fontSize = TerminalTheme.FontSize,
        )
    }
}

@Composable
private fun BlinkingCursor() {
    var on by remember { mutableStateOf(true) }
    LaunchedEffect(Unit) {
        while (true) {
            delay(530)
            on = !on
        }
    }
    Box(
        modifier = Modifier
            .padding(start = 1.dp)
            .width(9.dp)
            .height(18.dp)
            .background(if (on) TerminalTheme.Cursor else Color.Transparent),
    )
}

@Composable
private fun TerminalPrompt(
    currentSection: String,
    time: String,
    language: String,
    input: String,
    onInputChange: (String) -> Unit,
    onSubmit: () -> Unit,
    onNavigateHistory: (Int) -> Unit,
    onAutocomplete: () -> Unit,
    focusRequester: FocusRequester,
    onSectionClick: () -> Unit,
) {
    Column(modifier = Modifier.fillMaxWidth().padding(top = 12.dp)) {
        FlowRow(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(6.dp),
            verticalArrangement = Arrangement.spacedBy(4.dp, Alignment.CenterVertically),
        ) {
            Bubble("\uF007 joan", TerminalTheme.UserBg)
            Bubble("\uF07B ~/portfolio", TerminalTheme.PathBg)
            Bubble("\uE0A0 $currentSection", TerminalTheme.GitBg, onClick = onSectionClick)
            Bubble("\uF0AC $language", TerminalTheme.LangBg)
            Bubble("\uF017 $time", TerminalTheme.TimeBg)
        }
        Row(
            verticalAlignment = Alignment.CenterVertically,
            modifier = Modifier.fillMaxWidth().padding(top = 4.dp),
        ) {
            androidx.compose.material3.Text(
                text = "\u276F ",
                color = TerminalTheme.PromptChar,
                fontFamily = LocalMono.current,
                fontSize = TerminalTheme.FontSize,
            )
            Box {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    androidx.compose.material3.Text(
                        text = input,
                        color = TerminalTheme.Foreground,
                        fontFamily = LocalMono.current,
                        fontSize = TerminalTheme.FontSize,
                        softWrap = false,
                        maxLines = 1,
                    )
                    BlinkingCursor()
                }
                val textFieldValue = remember { mutableStateOf(TextFieldValue(input, TextRange(input.length))) }
                LaunchedEffect(input) {
                    if (textFieldValue.value.text != input) {
                        textFieldValue.value = TextFieldValue(input, TextRange(input.length))
                    }
                }
                BasicTextField(
                    value = textFieldValue.value,
                    onValueChange = {
                        textFieldValue.value = it
                        onInputChange(it.text)
                    },
                    singleLine = true,
                    textStyle = TextStyle(color = Color.Transparent, fontFamily = LocalMono.current, fontSize = TerminalTheme.FontSize),
                    cursorBrush = SolidColor(Color.Transparent),
                    modifier = Modifier
                        .matchParentSize()
                        .focusRequester(focusRequester)
                        .onPreviewKeyEvent { event ->
                            if (event.type != KeyEventType.KeyDown) return@onPreviewKeyEvent false
                            when (event.key) {
                                Key.Enter -> {
                                    onSubmit(); true
                                }
                                Key.DirectionUp -> {
                                    onNavigateHistory(-1); true
                                }
                                Key.DirectionDown -> {
                                    onNavigateHistory(1); true
                                }
                                Key.Tab -> {
                                    onAutocomplete(); true
                                }
                                else -> false
                            }
                        },
                )
            }
        }
    }
}

@Composable
fun TerminalApp() {
    val services = remember {
        PlatformServices(
            clock = createClock(),
            linkOpener = createLinkOpener(),
            clipboard = createClipboard(),
            galleryOpener = createGalleryOpener(),
            languageChanger = createLanguageChanger(),
        )
    }
    val initialLang = remember { Lang.from(detectLanguageTag()) }
    val currentLang = remember { mutableStateOf(initialLang) }
    val engine = remember { TerminalEngine(currentLang.value, services) }
    val listState = rememberLazyListState()
    val focusRequester = remember { FocusRequester() }
    val state = remember { TerminalState(engine, services, focusRequester, listState) }

    // Initialize language listener and set callback
    LaunchedEffect(Unit) {
        initLanguageListener()
        onLanguageUpdate = { langCode ->
            val newLang = Lang.from(langCode)
            currentLang.value = newLang
            engine.setLanguage(newLang)
        }
        state.init()
    }

    LaunchedEffect(state.output.size, state.showBanner) {
        val promptIndex = state.output.size + if (state.showBanner) 2 else 0
        listState.scrollToItem(promptIndex)
        focusRequester.requestFocus()
    }

    LaunchedEffect(state.input) {
        focusRequester.requestFocus()
    }

    LaunchedEffect(Unit) {
        while (true) {
            state.updateTime()
            delay(1000)
        }
    }

    val interactionSource = remember { MutableInteractionSource() }
    val monoRegular = Font(Res.font.firamono_nerd_regular)
    val monoBold = Font(Res.font.firamono_nerd_bold, FontWeight.Bold)
    val mono = remember(monoRegular, monoBold) { FontFamily(monoRegular, monoBold) }

    CompositionLocalProvider(
        LocalMono provides mono,
        LocalServices provides services,
        LocalFocusRequester provides focusRequester,
        LocalCopyFeedback provides { value -> state.addCopyFeedback(value) },
    ) {
        BoxWithConstraints(Modifier.fillMaxSize()) {
            val compact = maxWidth < 500.dp
            val horizontalPadding = if (compact) 8.dp else 20.dp
            LazyColumn(
                state = listState,
                modifier = Modifier
                    .fillMaxSize()
                    .background(TerminalTheme.Background)
                    .clickable(interactionSource = interactionSource, indication = null) {
                        focusRequester.requestFocus()
                    }
                    .padding(horizontal = horizontalPadding, vertical = 16.dp),
            ) {
            if (state.showBanner) {
                item { BannerView(state) }
                item { LineView(Line.Empty) }
            }
            items(state.output) { line -> LineView(line) }
            item {
                TerminalPrompt(
                    currentSection = state.currentSection,
                    time = state.time,
                    language = state.language,
                    input = state.input,
                    onInputChange = {
                        state.input = it
                        state.historyIndex = -1
                    },
                    onSubmit = { state.submit() },
                    onNavigateHistory = { state.navigateHistory(it) },
                    onAutocomplete = { state.autocomplete() },
                    focusRequester = focusRequester,
                    onSectionClick = { state.run(if (state.currentSection == "main") "help" else state.currentSection) },
                )
            }
            }
        }
    }
}

@Composable
private fun BannerView(state: TerminalState) {
    val data = state.engine.data()
    val strings = state.engine.strings()
    BoxWithConstraints(Modifier.fillMaxWidth()) {
        val compact = maxWidth < 600.dp
        val lines = remember(data, strings, compact) { welcomeLines(data, strings, compact) }
        Column(Modifier.fillMaxWidth()) {
            lines.forEach { line -> LineView(line) }
        }
    }
}

@Composable
private fun LineView(line: Line) {
    if (line.spans.isEmpty()) {
        androidx.compose.material3.Text(
            text = " ",
            fontFamily = LocalMono.current,
            fontSize = TerminalTheme.FontSize,
            lineHeight = if (line.small) TerminalTheme.SmallLineHeight else TerminalTheme.LineHeight,
            color = TerminalTheme.Foreground,
        )
        return
    }
    LineSpans(line.spans, line.nowrap)
}

@Composable
private fun LineSpans(spans: List<Span>, nowrap: Boolean = false) {
    val annotated = buildAnnotatedString {
        spans.forEach { span ->
            withStyle(
                SpanStyle(
                    color = TerminalTheme.colorFor(span.style),
                    textDecoration = if (span.style == TermStyle.Link) TextDecoration.Underline else null,
                ),
            ) {
                append(span.text)
            }
        }
    }
    val action = spans.firstNotNullOfOrNull { it.action }
    val services = LocalServices.current
    val focusRequester = LocalFocusRequester.current
    val copyFeedback = LocalCopyFeedback.current
    val modifier = when (action) {
        is TerminalAction.OpenUrl -> Modifier.clickable {
            services.linkOpener.open(action.url)
            focusRequester?.requestFocus()
        }
        is TerminalAction.Copy -> Modifier.clickable {
            services.clipboard.copy(action.text)
            copyFeedback(action.text)
            focusRequester?.requestFocus()
        }
        is TerminalAction.OpenGallery -> Modifier.clickable {
            services.galleryOpener.open(action.projectName)
            focusRequester?.requestFocus()
        }
        null -> Modifier
    }.fillMaxWidth()
    androidx.compose.material3.Text(
        text = annotated,
        fontFamily = LocalMono.current,
        fontSize = TerminalTheme.FontSize,
        lineHeight = TerminalTheme.LineHeight,
        softWrap = !nowrap,
        maxLines = if (nowrap) 1 else Int.MAX_VALUE,
        overflow = androidx.compose.ui.text.style.TextOverflow.Clip,
        modifier = modifier,
    )
}
