package org.portafolio.terminalkmp.terminal.engine

import org.portafolio.terminalkmp.data.Lang
import org.portafolio.terminalkmp.data.PortfolioData
import org.portafolio.terminalkmp.i18n.SystemStrings

class CommandContext(
    val data: PortfolioData,
    val lang: Lang,
    val strings: SystemStrings,
    val registry: CommandRegistry,
    val services: PlatformServices,
)

data class CommandResult(
    val lines: List<Line> = emptyList(),
    val clear: Boolean = false,
    val newLang: Lang? = null,
)

interface Command {
    val name: String
    val aliases: List<String> get() = emptyList()
    fun execute(args: List<String>, ctx: CommandContext): CommandResult
}
