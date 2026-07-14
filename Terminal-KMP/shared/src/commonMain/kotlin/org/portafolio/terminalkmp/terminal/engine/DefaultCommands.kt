package org.portafolio.terminalkmp.terminal.engine

import org.portafolio.terminalkmp.data.Lang
import org.portafolio.terminalkmp.data.PortfolioData
import org.portafolio.terminalkmp.i18n.SystemStrings

fun defaultCommands(): List<Command> = listOf(
    HelpCommand(),
    AboutCommand(),
    EducationCommand(),
    ProjectsCommand(),
    ExperienceCommand(),
    SkillsCommand(),
    StackCommand(),
    ContactCommand(),
    LanguagesCommand(),
    WhoamiCommand(),
    CvCommand(),
    LsCommand(),
    CatCommand(),
    OpenCommand(),
    GalleryCommand(),
    LangchangeCommand(),
    ClearCommand(),
    EchoCommand(),
    BannerCommand(),
)

private data class AsciiArtVariant(
    val art: List<String>,
    val styles: List<SpanStyle>,
)

private val bannerVariants = listOf(
    // KMP - User's custom design
    AsciiArtVariant(
        art = listOf(
            "▓   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ",
            "▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   ",
            "▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    ",
            "▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓      ",
            "▓▓▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓        ",
            "▓▓▓▓▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓▓▓▓▓          ",
            "▓▓▓▓▓▓▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓            ",
            "▓▓▓▓▓▓▓▓▓▓▓▓▓▓   ▓▓▓▓              ",
            "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓               ",
            "                                   ",
            "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                   ",
            "▓▓▓▓▓▓▓▓▓▓▓▓▓▓   ▓▓▓▓              ",
            "▓▓▓▓▓▓▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓            ",
            "▓▓▓▓▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓▓▓▓▓          ",
            "▓▓▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓        ",
            "▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓      ",
            "▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓     ",
            "▓▓▓   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   ",
            "▓   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ "
        ),
        styles = listOf(
            SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1,
            SpanStyle.Kmp1, SpanStyle.Kmp1,
            SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2,
            SpanStyle.Kmp2,
            SpanStyle.Kmp3, SpanStyle.Kmp3, SpanStyle.Kmp3, SpanStyle.Kmp3, SpanStyle.Kmp3,
            SpanStyle.Kmp3,
        )
    ),
    // Astro - User's custom rocket flame
    AsciiArtVariant(
        art = listOf(
            "          ░░░░░░░░░░░░░░░          ",
            "         ░░░░░░░░░░░░░░░░░         ",
            "        ░░░░░░░░░░░░░░░░░░         ",
            "        ░░░░░░░░░░░░░░░░░░░        ",
            "       ░░░░░░░░░░░░░░░░░░░░░       ",
            "      ░░░░░░░░░░░░░░░░░░░░░░░      ",
            "      ░░░░░░░░░░░ ░░░░░░░░░░░      ",
            "     ░░░░░░░░░░░   ░░░░░░░░░░░     ",
            "    ░░░░░░░░░░░     ░░░░░░░░░░     ",
            "    ░░░░░░░░░░░     ░░░░░░░░░░░    ",
            "   ░░░░░░░░░░░       ░░░░░░░░░░░   ",
            "  ░░░░░░░░░░░░       ░░░░░░░░░░░   ",
            "  ░░░░░░░░░░░         ░░░░░░░░░░░  ",
            " ░░░░░░░░░░░░         ░░░░░░░░░░░░ ",
            "░░░░░░                       ░░░░░ ",
            "░                                 ░",
            "         ░░             ░░         ",
            "         ░░░░░░░░░░░░░░░░░         ",
            "         ░░░░░░░░░░░░░░░░░         ",
            "          ░░░ ░░░░░░░░░░░          ",
            "           ░   ░░░░░░░░            ",
            "                ░░░░               ",
            "                ░░░                ",
            "                 ░░                "
        ),
        styles = listOf(
            SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1,
            SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1,
            SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2,
            SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2,
            SpanStyle.Kmp3, SpanStyle.Kmp3, SpanStyle.Kmp3, SpanStyle.Kmp3, SpanStyle.Kmp3,
            SpanStyle.Kmp3, SpanStyle.Kmp3, SpanStyle.Kmp3,
        )
    ),
    // Compose - User's custom design
    AsciiArtVariant(
        art = listOf(
            "                  -                     ",
            "               =======                  ",
            "            =============               ",
            "        ++++++===============          ",
            "     ++++++++++++===============       ",
            "    +++++++++++++++===========+**      ",
            "    +++++++++++%@@@@@+=====******      ",
            "    +++++++++@@@@@@@@@@@*********      ",
            "    +++++++++@@@@@@@@@@@*********      ",
            "    +++++++++@@@@@@@@@@@*********      ",
            "    +++++++++@@@@@@@@@@@*********      ",
            "    +++++++++++%@@@@@************      ",
            "    +++++++++++++****************      ",
            "     +++++++++++++**************       ",
            "         ++++++++++***********         ",
            "            ++++++*******              ",
            "               +++****                 ",
        ),
        styles = listOf(
            SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1,
            SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1,
            SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2,
            SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2,
            SpanStyle.Kmp3, SpanStyle.Kmp3, SpanStyle.Kmp3, SpanStyle.Kmp3, SpanStyle.Kmp3,
            SpanStyle.Kmp3, SpanStyle.Kmp3, SpanStyle.Kmp3,
        )
    ),
    // Tailwind - User's custom wave shape
    AsciiArtVariant(
        art = listOf(
            "             #########             ",
            "           ##############          ",
            "         ##     ###########       #",
            "                  ################ ",
            "                    ############   ",
            "      #####                        ",
            "   ############                    ",
            " ################                  ",
            "#        ###########   ##          ",
            "           #############           ",
            "              #######              "
        ),
        styles = listOf(
            SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1,
            SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2,
            SpanStyle.Kmp3, SpanStyle.Kmp3, SpanStyle.Kmp3,
        )
    ),
    // Java - User's custom coffee cup
    AsciiArtVariant(
        art = listOf(
            "                     #              ",
            "                     *#             ",
            "                     #              ",
            "                   ##               ",
            "                 ###   ##           ",
            "               ###  ##              ",
            "             ###  ##                ",
            "             ##*  ###               ",
            "              ##   ###              ",
            "                #   ##              ",
            "           ##*      #     **##      ",
            "        ***##    *##*#**     #*     ",
            "            *               ###     ",
            "           *##**********  **        ",
            "                                    ",
            "            *#*********#            ",
            "      *#                    *#      ",
            "      ###**###############   **     ",
            "           ***************          "
        ),
        styles = listOf(
            SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1,
            SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1,
            SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2,
            SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2,
            SpanStyle.Kmp3, SpanStyle.Kmp3, SpanStyle.Kmp3,
        )
    ),
    // Android - User's custom robot
    AsciiArtVariant(
        art = listOf(
            "           -            -          ",
            "            - -------- -           ",
            "           --------------          ",
            "         ---  --------  ---        ",
            "        --------------------       ",
            "       ----------------------      ",
            "   -                            -  ",
            " ----- ---------------------- -----",
            " ----- ---------------------- -----",
            " ----- ---------------------- -----",
            " ----- ---------------------- -----",
            " ----- ---------------------- -----",
            " ----- ---------------------- -----",
            "  ---- ---------------------- ---- ",
            "       ----------------------      ",
            "        --------------------       ",
            "            ----    ----           ",
            "            ----    ----           ",
            "            ----    ----           ",
            "            ----    ----           "
        ),
        styles = listOf(
            SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1,
            SpanStyle.Kmp1, SpanStyle.Kmp1,
            SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2,
            SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2,
            SpanStyle.Kmp3, SpanStyle.Kmp3, SpanStyle.Kmp3, SpanStyle.Kmp3, SpanStyle.Kmp3,
            SpanStyle.Kmp3,
        )
    ),
    // GitHub - User's custom Octocat head
    AsciiArtVariant(
        art = listOf(
            "             +++++            ",
            "            ++++++++          ",
            "         ++   ++++++++        ",
            "       ++++++     ++++++      ",
            "     +++++++++    ++++++++    ",
            "   ++++++++++++     ++++++++  ",
            " ++++++++++++++  ++     ++++++",
            " ++++++++++++++  +++    ++++++",
            "   ++++++++++++  +++++++++++  ",
            "     +++++++++   +++++++++    ",
            "       ++++++     ++++++      ",
            "         +++++++++++++        ",
            "           +++++++++          ",
            "             +++++            "
        ),
        styles = listOf(
            SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1, SpanStyle.Kmp1,
            SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2, SpanStyle.Kmp2,
            SpanStyle.Kmp3, SpanStyle.Kmp3, SpanStyle.Kmp3, SpanStyle.Kmp3,
        )
    ),
)

fun welcomeLines(data: PortfolioData, strings: SystemStrings): List<Line> {
    val id = data.identity
    val labels = strings.labels
    val c = data.contact
    
    val variant = bannerVariants.random()
    val art = variant.art
    val artStyles = variant.styles

    val role = id.role.substringBefore("|").trim()
    val sep = "\u2500".repeat(id.name.length.coerceIn(6, 28))
    val info: List<List<Span>> = listOf(
        listOf(Span(id.name, SpanStyle.Title)),
        listOf(Span(sep, SpanStyle.Muted)),
        bannerRow(labels.role, role),
        bannerRow(labels.location, id.location),
        bannerRow(labels.status, data.about.status),
        bannerRow(labels.email, c.email),
        bannerRow(labels.phone, c.phone),
        bannerRow(labels.github, "https://${c.github}"),
        bannerRow(labels.linkedin, "https://${c.linkedin}"),
    )
    val artWidth = art.maxOf { it.length }
    val rows = maxOf(art.size, info.size)
    val lines = mutableListOf<Line>()
    for (r in 0 until rows) {
        val leftText = (art.getOrNull(r) ?: "").padEnd(artWidth)
        val style = artStyles.getOrNull(r) ?: SpanStyle.Accent
        val rightSpans = info.getOrNull(r) ?: emptyList()
        lines += Line(listOf(Span(leftText, style), Span("   ", SpanStyle.Normal)) + rightSpans)
    }
    lines += Line.Empty
    lines += Line(
        listOf(
            Span("\u00bb ", SpanStyle.Accent),
            Span(strings.helpHint, SpanStyle.Muted),
        ),
    )
    return lines
}

private fun bannerRow(label: String, value: String): List<Span> = listOf(
    Span(label.padEnd(10), SpanStyle.Muted),
    Span(value, SpanStyle.Normal),
)

private const val SECTION_PAD = 12

private fun padFor(label: String): Int = maxOf(SECTION_PAD, label.length + 2)

private fun field(label: String, value: String): Line = Line(
    listOf(
        Span(label.padEnd(padFor(label)), SpanStyle.Muted),
        Span(value, SpanStyle.Normal),
    ),
)

private fun link(label: String, url: String): Line = Line(
    listOf(
        Span(label.padEnd(padFor(label)), SpanStyle.Muted),
        Span(url, SpanStyle.Link, TerminalAction.OpenUrl(url)),
    ),
)

private fun linkBullet(label: String, url: String): Line = Line(
    listOf(
        Span("  \u2022 ", SpanStyle.Accent),
        Span(label, SpanStyle.Link, TerminalAction.OpenUrl(url)),
    ),
)

private fun copyableField(label: String, value: String, copyLabel: String): Line = Line(
    listOf(
        Span(label.padEnd(padFor(label)), SpanStyle.Muted),
        Span(value, SpanStyle.Link, TerminalAction.Copy(value)),
        Span("  [$copyLabel]", SpanStyle.Muted),
    ),
)

private fun bullet(text: String, style: SpanStyle = SpanStyle.Normal): Line = Line(
    listOf(
        Span("  \u2022 ", SpanStyle.Accent),
        Span(text, style),
    ),
)

private fun paragraphs(text: String): List<Line> =
    text.split("\n").map { it.trim() }.map { if (it.isEmpty()) Line.Empty else Line.of(it) }

private fun bulletPoints(text: String, separator: String = ". "): List<Line> =
    text.split(separator)
        .map { it.trim() }
        .filter { it.isNotEmpty() }
        .map { bullet(it) }

// Skill level bars removed: skills now display name and levelName only.

class HelpCommand : Command {
    override val name = "help"
    override val aliases = listOf("?", "h")
    override fun execute(args: List<String>, ctx: CommandContext): CommandResult {
        val lines = mutableListOf<Line>()
        lines += Line.of(ctx.strings.helpTitle, SpanStyle.Title)
        lines += Line.Empty
        ctx.registry.names().forEach { cmd ->
            lines += Line(
                listOf(
                    Span("  " + cmd.padEnd(SECTION_PAD), SpanStyle.Accent),
                    Span(ctx.strings.commandDescriptions[cmd].orEmpty(), SpanStyle.Muted),
                ),
            )
        }
        lines += Line.Empty
        lines += Line.of(ctx.strings.helpHint, SpanStyle.Muted)
        return CommandResult(lines)
    }
}

class AboutCommand : Command {
    override val name = "about"
    override fun execute(args: List<String>, ctx: CommandContext): CommandResult {
        val a = ctx.data.about
        val l = ctx.strings.labels
        val lines = mutableListOf<Line>()
        lines += Line.of(a.profileTitle, SpanStyle.Title)
        lines += Line.Empty
        lines += paragraphs(a.description)
        lines += Line.Empty
        lines += field(l.status, a.status)
        lines += field(l.driverLicense, a.driverLicense)
        lines += field(l.learning, a.continuousLearning)
        return CommandResult(lines)
    }
}

class EducationCommand : Command {
    override val name = "education"
    override val aliases = emptyList<String>()
    override fun execute(args: List<String>, ctx: CommandContext): CommandResult {
        val l = ctx.strings.labels
        val lines = mutableListOf<Line>()
        ctx.data.education.forEachIndexed { index, e ->
            if (index > 0) lines += Line.Empty
            lines += Line.of(e.title, SpanStyle.Title)
            lines += field(l.type, e.type)
            lines += field(l.institution, e.institution)
            lines += field(l.year, e.year)
            lines += Line.Empty
            lines += bulletPoints(e.details)
        }
        return CommandResult(lines)
    }
}

class ProjectsCommand : Command {
    override val name = "projects"
    override val aliases = emptyList<String>()
    override fun execute(args: List<String>, ctx: CommandContext): CommandResult {
        val l = ctx.strings.labels
        val filter = args.firstOrNull()?.lowercase()
        val items = if (filter == null) {
            ctx.data.projects
        } else {
            ctx.data.projects.filter {
                it.id.lowercase() == filter || it.name.lowercase().contains(filter)
            }
        }
        if (items.isEmpty()) {
            return CommandResult(listOf(Line.of("${l.notFound}: $filter", SpanStyle.Error)))
        }
        val lines = mutableListOf<Line>()
        items.forEachIndexed { index, p ->
            if (index > 0) lines += Line.Empty
            val header = mutableListOf(Span(p.name, SpanStyle.Title))
            if (p.current) header += Span("  [${l.current}]", SpanStyle.Success)
            lines += Line(header)
            lines += Line.of(p.subtitle, SpanStyle.Muted)
            lines += Line.Empty
            lines += paragraphs(p.description)
            lines += Line.Empty
            lines += field(l.tech, p.tech.joinToString(", "))
            p.github?.let { lines += link(l.github, it) }
            p.website?.let { lines += link(l.website, it) }
            lines += Line(
                listOf(
                    Span(l.gallery.padEnd(padFor(l.gallery)), SpanStyle.Muted),
                    Span(ctx.strings.viewImages, SpanStyle.Link, TerminalAction.OpenGallery(p.name)),
                ),
            )
        }
        return CommandResult(lines)
    }
}

class ExperienceCommand : Command {
    override val name = "experience"
    override val aliases = emptyList<String>()
    override fun execute(args: List<String>, ctx: CommandContext): CommandResult {
        val l = ctx.strings.labels
        val lines = mutableListOf<Line>()
        ctx.data.experience.forEachIndexed { index, e ->
            if (index > 0) lines += Line.Empty
            lines += Line(
                listOf(
                    Span(e.role, SpanStyle.Title),
                    Span("  @ ${e.company}", SpanStyle.Muted),
                ),
            )
            lines += Line.of(e.period, SpanStyle.Muted)
            lines += Line.Empty
            e.description.forEach { lines += bullet(it) }
            e.website?.let { lines += link(l.website, it) }
        }
        return CommandResult(lines)
    }
}

class SkillsCommand : Command {
    override val name = "skills"
    override val aliases = emptyList<String>()
    override fun execute(args: List<String>, ctx: CommandContext): CommandResult {
        return CommandResult(ctx.data.skills.flatMapIndexed { index, s ->
            val levelStyle = when (s.levelName.lowercase()) {
                "intermedio", "intermediate", "advanced" -> SpanStyle.Success
                "b\u00e1sico", "basico", "basic", "beginner" -> SpanStyle.Accent
                else -> SpanStyle.Muted
            }
            val skillLine = Line(
                listOf(
                    Span(s.name, SpanStyle.Normal),
                    Span("  \u2014  ", SpanStyle.Muted),
                    Span(s.levelName, levelStyle),
                ),
            )
            if (index == ctx.data.skills.lastIndex) listOf(skillLine) else listOf(skillLine, Line.Empty)
        })
    }
}

class StackCommand : Command {
    override val name = "stack"
    override val aliases = listOf("tech", "technologies")
    override fun execute(args: List<String>, ctx: CommandContext): CommandResult {
        return CommandResult(
            listOf(
                Line.of(ctx.strings.stackTitle, SpanStyle.Title),
                Line.Empty,
                bullet("Kotlin Multiplatform (KMP)"),
                bullet("Compose Multiplatform"),
                bullet("Compose for Web (wasmJs)"),
                bullet(ctx.strings.gradleBuildSrc),
                bullet("JetBrains Mono Nerd Font"),
                bullet("kotlinx.serialization"),
                bullet("Material3 Components"),
            ),
        )
    }
}

class ContactCommand : Command {
    override val name = "contact"
    override val aliases = listOf("email")
    override fun execute(args: List<String>, ctx: CommandContext): CommandResult {
        val c = ctx.data.contact
        val l = ctx.strings.labels
        val s = ctx.strings
        val lines = listOf(
            copyableField(l.email, c.email, s.copyLabel),
            copyableField(l.phone, c.phone, s.copyLabel),
            field(l.address, c.address),
            link(l.linkedin, "https://${c.linkedin}"),
            link(l.github, "https://${c.github}"),
        )
        return CommandResult(lines)
    }
}

class LanguagesCommand : Command {
    override val name = "languages"
    override val aliases = emptyList<String>()
    override fun execute(args: List<String>, ctx: CommandContext): CommandResult =
        CommandResult(ctx.data.languages.map { bullet(it) })
}

class WhoamiCommand : Command {
    override val name = "whoami"
    override val aliases = listOf("me")
    override fun execute(args: List<String>, ctx: CommandContext): CommandResult {
        val id = ctx.data.about
        val identity = ctx.data.identity
        val l = ctx.strings.labels
        return CommandResult(
            listOf(
                Line.of(identity.name, SpanStyle.Title),
                Line.of(identity.role, SpanStyle.Accent),
                Line.Empty,
                field(l.location, identity.location),
                field(l.status, id.status),
            ),
        )
    }
}

class CvCommand : Command {
    override val name = "cv"
    override val aliases = listOf("resume")
    override fun execute(args: List<String>, ctx: CommandContext): CommandResult {
        val s = ctx.strings
        return CommandResult(
            listOf(
                Line.of(s.cvPrompt, SpanStyle.Normal),
                Line.Empty,
                Line.of(s.languageEs, SpanStyle.Subtitle),
                linkBullet("Harvard", "/CV/CV%20Harvard%20Espa%C3%B1ol%20(Joan%20Bono).pdf"),
                linkBullet(s.cvDetailed, "/CV/CV%20Detallado%20Espa%C3%B1ol%20%20(Joan%20Bono).pdf"),
                Line.Empty,
                Line.of(s.languageEn, SpanStyle.Subtitle),
                linkBullet("Harvard", "/CV/CV%20Harvard%20English%20(Joan%20Bono).pdf"),
                linkBullet(s.cvDetailed, "/CV/CV%20Detailed%20English%20(Joan%20Bono).pdf"),
            ),
        )
    }
}

class LsCommand : Command {
    override val name = "ls"
    override val aliases = listOf("dir")
    override fun execute(args: List<String>, ctx: CommandContext): CommandResult {
        val sections = listOf(
            "about", "education", "projects", "experience",
            "skills", "stack", "contact", "languages",
        )
        return CommandResult(
            listOf(
                Line.of(ctx.strings.sectionsTitle, SpanStyle.Subtitle),
                Line(listOf(Span(sections.joinToString("   "), SpanStyle.Accent))),
            ),
        )
    }
}

class CatCommand : Command {
    override val name = "cat"
    private val sections = setOf(
        "about", "education", "projects", "experience",
        "skills", "stack", "contact", "languages",
    )

    override fun execute(args: List<String>, ctx: CommandContext): CommandResult {
        val target = args.firstOrNull()?.lowercase()
            ?: return CommandResult(
                listOf(Line.of("${ctx.strings.usagePrefix} cat <${sections.joinToString("|")}>", SpanStyle.Muted)),
            )
        if (target !in sections) {
            return CommandResult(listOf(Line.of("${target}: ${ctx.strings.labels.notFound}", SpanStyle.Error)))
        }
        val command = ctx.registry.resolve(target) ?: return CommandResult()
        return command.execute(emptyList(), ctx)
    }
}

class OpenCommand : Command {
    override val name = "open"
    override fun execute(args: List<String>, ctx: CommandContext): CommandResult {
        val c = ctx.data.contact
        val target = args.joinToString(" ").trim().lowercase()
        val url = when (target) {
            "linkedin", "in" -> "https://${c.linkedin}"
            "github", "gh" -> "https://${c.github}"
            "email", "mail" -> "mailto:${c.email}"
            else -> {
                ctx.data.projects.firstOrNull {
                    it.id.lowercase() == target || it.name.lowercase().contains(target) || target.contains(it.name.lowercase())
                }?.let { it.github ?: it.website }
            }
        }
        if (url == null) {
            val projects = ctx.data.projects.joinToString(", ") { it.name }
            return CommandResult(
                listOf(
                    Line.of(
                        "${ctx.strings.usagePrefix} open <linkedin|github|email|project>  [projects: $projects]",
                        SpanStyle.Muted,
                    ),
                ),
            )
        }
        ctx.services.linkOpener.open(url)
        return CommandResult(listOf(Line.of(ctx.strings.openingLink.replace("{url}", url), SpanStyle.Success)))
    }
}

class GalleryCommand : Command {
    override val name = "gallery"
    override val aliases = listOf("images", "galeria")
    override fun execute(args: List<String>, ctx: CommandContext): CommandResult {
        val target = args.joinToString(" ").trim().lowercase()
        if (target.isEmpty()) {
            val projects = ctx.data.projects.joinToString(", ") { it.name }
            return CommandResult(
                listOf(
                    Line.of(
                        "${ctx.strings.usagePrefix} gallery <project>  [projects: $projects]",
                        SpanStyle.Muted,
                    ),
                ),
            )
        }
        val project = ctx.data.projects.firstOrNull {
            it.id.lowercase() == target || it.name.lowercase().contains(target) || target.contains(it.name.lowercase())
        }
        if (project == null) {
            return CommandResult(listOf(Line.of("${ctx.strings.labels.notFound}: $target", SpanStyle.Error)))
        }
        ctx.services.galleryOpener.open(project.name)
        return CommandResult(listOf(Line.of(ctx.strings.openingGallery.replace("{project}", project.name), SpanStyle.Success)))
    }
}

class LangchangeCommand : Command {
    override val name = "langchange"
    override val aliases = emptyList<String>()
    override fun execute(args: List<String>, ctx: CommandContext): CommandResult {
        val arg = args.firstOrNull()?.lowercase()
            ?: return CommandResult(listOf(Line.of("${ctx.strings.terminalLanguage}: ${ctx.lang.tag}", SpanStyle.Normal)))
        val newLang = when (arg) {
            "es", "spanish", "espanol" -> Lang.ES
            "en", "english", "ingles" -> Lang.EN
            else -> return CommandResult(
                listOf(Line.of("${ctx.strings.usagePrefix} langchange es|en", SpanStyle.Muted)),
            )
        }
        val strings = SystemStrings.of(newLang)

        // Notify parent page of language change
        ctx.services.languageChanger.change(newLang.tag)

        return CommandResult(
            lines = listOf(Line.of(strings.langChanged.replace("{lang}", newLang.tag), SpanStyle.Success)),
            newLang = newLang,
        )
    }
}

class ClearCommand : Command {
    override val name = "clear"
    override val aliases = listOf("cls")
    override fun execute(args: List<String>, ctx: CommandContext): CommandResult =
        CommandResult(clear = true)
}

class EchoCommand : Command {
    override val name = "echo"
    override fun execute(args: List<String>, ctx: CommandContext): CommandResult =
        CommandResult(listOf(Line.of(args.joinToString(" "))))
}

class BannerCommand : Command {
    override val name = "banner"
    override fun execute(args: List<String>, ctx: CommandContext): CommandResult =
        CommandResult(welcomeLines(ctx.data, ctx.strings))
}
