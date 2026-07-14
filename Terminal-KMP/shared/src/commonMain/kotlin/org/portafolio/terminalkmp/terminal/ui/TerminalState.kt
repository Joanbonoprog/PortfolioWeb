package org.portafolio.terminalkmp.terminal.ui

import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.ui.focus.FocusRequester
import org.portafolio.terminalkmp.terminal.engine.Line
import org.portafolio.terminalkmp.terminal.engine.PlatformServices
import org.portafolio.terminalkmp.terminal.engine.Span
import org.portafolio.terminalkmp.terminal.engine.SpanStyle
import org.portafolio.terminalkmp.terminal.engine.TerminalEngine

private val SectionCommands = setOf(
    "about", "education", "projects", "experience",
    "skills", "stack", "contact", "languages", "whoami",
)

class TerminalState(
    val engine: TerminalEngine,
    val services: PlatformServices,
    val focusRequester: FocusRequester,
    val listState: LazyListState,
) {
    val output = mutableStateListOf<Line>()
    var input by mutableStateOf("")
    var historyIndex by mutableStateOf(-1)
    var time by mutableStateOf(services.clock.nowHourMinute())
    var currentSection by mutableStateOf("main")
    var language by mutableStateOf(engine.lang.tag.uppercase())
    var lastCopyFeedback by mutableStateOf<Line?>(null)
    var showBanner by mutableStateOf(true)

    fun init() {
        focusRequester.requestFocus()
    }

    fun submit() {
        run(input)
        input = ""
        historyIndex = -1
        focusRequester.requestFocus()
    }

    fun run(command: String) {
        output.add(Line(listOf(Span("\u276F ", SpanStyle.Prompt), Span(command, SpanStyle.Normal))))
        val result = engine.execute(command)
        val name = command.trim().split(" ", "\t").firstOrNull()?.lowercase().orEmpty()
        if (result.clear) {
            output.clear()
            currentSection = "main"
            lastCopyFeedback = null
            showBanner = false
        } else {
            if (result.lines.isNotEmpty()) output.add(Line.Small)
            output.addAll(result.lines)
            if (name in SectionCommands) currentSection = name
        }
        time = services.clock.nowHourMinute()
        language = engine.lang.tag.uppercase()
    }

    fun navigateHistory(direction: Int) {
        val history = engine.history
        if (history.isEmpty()) return
        var index = if (historyIndex == -1) history.size else historyIndex
        index = (index + direction).coerceIn(0, history.size)
        historyIndex = if (index >= history.size) -1 else index
        input = if (index >= history.size) "" else history[index]
    }

    fun autocomplete() {
        if (input.isEmpty() || input.contains(" ")) return
        val matches = engine.completions(input)
        when {
            matches.isEmpty() -> Unit
            matches.size == 1 -> input = matches.first() + " "
            else -> {
                val common = matches.reduce { acc, value -> acc.commonPrefixWith(value) }
                if (common.length > input.length) {
                    input = common
                } else {
                    output.add(Line(matches.map { Span(it.padEnd(14), SpanStyle.Accent) }))
                }
            }
        }
    }

    fun addCopyFeedback(value: String) {
        lastCopyFeedback?.let { output.remove(it) }
        val line = Line.of(engine.strings().copiedToClipboard.replace("{value}", value), SpanStyle.Success)
        output.add(line)
        lastCopyFeedback = line
    }

    fun updateTime() {
        time = services.clock.nowHourMinute()
    }
}
