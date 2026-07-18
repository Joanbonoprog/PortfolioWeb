package org.portafolio.terminalkmp.terminal.engine

enum class SpanStyle { Normal, Title, Subtitle, Muted, Accent, Link, Error, Success, Prompt, Kmp1, Kmp2, Kmp3 }

sealed class TerminalAction {
    data class OpenUrl(val url: String) : TerminalAction()
    data class Copy(val text: String) : TerminalAction()
    data class OpenGallery(val projectName: String) : TerminalAction()
}

data class Span(
    val text: String,
    val style: SpanStyle = SpanStyle.Normal,
    val action: TerminalAction? = null,
)

data class Line(
    val spans: List<Span>,
    val small: Boolean = false,
    // If true, the line is rendered on a single line and clipped at the edges
    // instead of being wrapped. Useful for ASCII art that must not break.
    val nowrap: Boolean = false,
) {
    val plainText: String get() = spans.joinToString("") { it.text }

    companion object {
        val Empty: Line = Line(emptyList())
        val Small: Line = Line(emptyList(), small = true)
        fun of(text: String, style: SpanStyle = SpanStyle.Normal): Line =
            Line(listOf(Span(text, style)))
    }
}
