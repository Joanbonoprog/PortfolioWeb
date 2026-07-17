package org.portafolio.terminalkmp.terminal.engine

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertTrue
import org.portafolio.terminalkmp.data.Lang
import org.portafolio.terminalkmp.data.Portfolio
import org.portafolio.terminalkmp.i18n.SystemStrings

class WelcomeLinesTest {

    private val data = Portfolio.of(Lang.ES)
    private val strings = SystemStrings.of(Lang.ES)

    @Test
    fun `compact banner renders art lines then info lines`() {
        val lines = welcomeLines(data, strings, compact = true)

        val name = data.identity.name
        assertTrue(lines.isNotEmpty())
        assertTrue(lines.any { it.plainText.contains(name) })

        // The first non-empty lines are the ASCII art and they are marked as nowrap.
        val firstContent = lines.first { it.spans.isNotEmpty() }
        assertTrue(firstContent.nowrap, "Art lines should be nowrap to avoid breaking the image")

        // Info rows appear later (after at least one empty separator).
        val infoStart = lines.indexOfFirst { it.plainText.contains(strings.labels.role) }
        assertTrue(infoStart > 1, "Info rows should appear below the art")
    }

    @Test
    fun `non-compact banner mixes art and info side by side`() {
        val lines = welcomeLines(data, strings, compact = false)
        val name = data.identity.name

        assertTrue(lines.isNotEmpty())
        val mixedLine = lines.first { it.plainText.contains(name) }
        assertTrue(mixedLine.spans.size > 1, "Desktop banner should combine art spans with info spans")
    }

    @Test
    fun `banner contains expected contact fields`() {
        val lines = welcomeLines(data, strings, compact = true)
        val plain = lines.joinToString("\n") { it.plainText }

        assertContains(plain, data.identity.name)
        assertContains(plain, strings.labels.email)
        assertContains(plain, strings.labels.github)
        assertContains(plain, strings.labels.linkedin)
    }

    @Test
    fun `banner ends with a hint`() {
        val lines = welcomeLines(data, strings, compact = true)
        val last = lines.last()
        assertTrue(last.plainText.contains(strings.helpHint), "Last line should contain the help hint")
    }
}
