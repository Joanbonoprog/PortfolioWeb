package org.portafolio.terminalkmp.terminal.engine

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue
import org.portafolio.terminalkmp.data.Lang

class TerminalEngineTest {

    private val services = stubPlatformServices()
    private fun engine(lang: Lang = Lang.ES) = TerminalEngine(lang, services)

    @Test
    fun `empty input returns empty result and is not recorded`() {
        val engine = engine()
        val result = engine.execute("")
        assertTrue(result.lines.isEmpty())
        assertFalse(result.clear)
        assertTrue(engine.history.isEmpty())
    }

    @Test
    fun `whitespace input returns empty result and is not recorded`() {
        val engine = engine()
        val result = engine.execute("   \t  ")
        assertTrue(result.lines.isEmpty())
        assertTrue(engine.history.isEmpty())
    }

    @Test
    fun `known command returns output`() {
        val engine = engine()
        val result = engine.execute("help")
        assertTrue(result.lines.isNotEmpty())
        assertTrue(result.lines.any { it.plainText.contains("help") })
    }

    @Test
    fun `unknown command returns error with did-you-mean suggestion`() {
        val engine = engine()
        val result = engine.execute("hep")
        val plain = result.lines.joinToString("\n") { it.plainText }
        assertTrue(plain.contains("hep"), "Expected error to mention the unknown command")
        assertTrue(plain.contains("help"), "Expected suggestion 'help' for 'hep'")
    }

    @Test
    fun `commands are recorded in history`() {
        val engine = engine()
        engine.execute("help")
        engine.execute("about")
        engine.execute("banner")
        assertEquals(listOf("help", "about", "banner"), engine.history)
    }

    @Test
    fun `setLanguage updates current language`() {
        val engine = engine(Lang.ES)
        assertEquals(Lang.ES, engine.lang)
        engine.setLanguage(Lang.EN)
        assertEquals(Lang.EN, engine.lang)
        val strings = engine.strings()
        assertTrue(strings.helpTitle.isNotBlank())
    }

    @Test
    fun `language command changes current language`() {
        val engine = engine(Lang.ES)
        val result = engine.execute("lang en")
        assertEquals(Lang.EN, engine.lang)
        assertTrue(result.lines.any { it.plainText.contains("English") })
    }

    @Test
    fun `completions returns matching commands`() {
        val engine = engine()
        val completions = engine.completions("he")
        assertContains(completions, "help")
        assertFalse(completions.contains("about"))
    }

    @Test
    fun `completions is case insensitive`() {
        val engine = engine()
        val completions = engine.completions("AB")
        assertContains(completions, "about")
    }

    @Test
    fun `welcome returns banner-like lines`() {
        val engine = engine()
        val lines = engine.welcome()
        assertTrue(lines.isNotEmpty())
    }
}
