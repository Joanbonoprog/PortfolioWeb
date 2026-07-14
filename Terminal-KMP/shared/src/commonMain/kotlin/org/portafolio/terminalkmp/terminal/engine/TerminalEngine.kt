package org.portafolio.terminalkmp.terminal.engine

import org.portafolio.terminalkmp.data.Lang
import org.portafolio.terminalkmp.data.Portfolio
import org.portafolio.terminalkmp.data.PortfolioData
import org.portafolio.terminalkmp.i18n.SystemStrings

data class ExecResult(
    val lines: List<Line>,
    val clear: Boolean = false,
)

class TerminalEngine(
    initialLang: Lang,
    private val services: PlatformServices,
    val registry: CommandRegistry = CommandRegistry(defaultCommands()),
) {
    var lang: Lang = initialLang
        private set
    
    fun setLanguage(newLang: Lang) {
        lang = newLang
    }

    private val _history = mutableListOf<String>()
    val history: List<String> get() = _history

    fun strings(): SystemStrings = SystemStrings.of(lang)

    fun data(): PortfolioData = Portfolio.of(lang)

    fun welcome(): List<Line> = welcomeLines(data(), strings())

    fun completions(prefix: String): List<String> = registry.completions(prefix)

    fun execute(rawInput: String): ExecResult {
        val input = rawInput.trim()
        if (input.isNotEmpty()) _history.add(input)
        if (input.isEmpty()) return ExecResult(emptyList())

        val tokens = tokenize(input)
        val name = tokens.first()
        val args = tokens.drop(1)

        val command = registry.resolve(name) ?: return ExecResult(unknownLines(name))
        val ctx = CommandContext(data(), lang, strings(), registry, services)
        val result = command.execute(args, ctx)
        result.newLang?.let { lang = it }
        return ExecResult(result.lines, clear = result.clear)
    }

    private fun unknownLines(name: String): List<Line> {
        val s = strings()
        val lines = mutableListOf<Line>()
        lines += Line.of(s.unknownCommand.replace("{cmd}", name), SpanStyle.Error)
        val target = name.lowercase()
        val suggestion = registry.names().minByOrNull { levenshtein(it, target) }
        if (suggestion != null && levenshtein(suggestion, target) <= 3) {
            lines += Line.of(s.didYouMean.replace("{suggestion}", suggestion), SpanStyle.Muted)
        }
        return lines
    }

    private fun tokenize(input: String): List<String> =
        input.split(" ", "\t").filter { it.isNotBlank() }
}

private fun levenshtein(a: String, b: String): Int {
    if (a == b) return 0
    if (a.isEmpty()) return b.length
    if (b.isEmpty()) return a.length
    var previous = IntArray(b.length + 1) { it }
    var current = IntArray(b.length + 1)
    for (i in 1..a.length) {
        current[0] = i
        for (j in 1..b.length) {
            val cost = if (a[i - 1] == b[j - 1]) 0 else 1
            current[j] = minOf(
                current[j - 1] + 1,
                previous[j] + 1,
                previous[j - 1] + cost,
            )
        }
        val tmp = previous
        previous = current
        current = tmp
    }
    return previous[b.length]
}
