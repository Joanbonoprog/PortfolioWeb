package org.portafolio.terminalkmp.terminal.engine

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertTrue
import org.portafolio.terminalkmp.data.Lang

class CommandExecutionTest {

    private fun engine(lang: Lang = Lang.ES) = TerminalEngine(lang, stubPlatformServices())

    @Test
    fun `help lists all commands and hint`() {
        val result = engine().execute("help")
        val plain = result.lines.joinToString("\n") { it.plainText }
        assertTrue(plain.contains("Comandos disponibles") || plain.contains("Available commands"))
        assertTrue(plain.contains("help"))
        assertTrue(plain.contains("banner"))
    }

    @Test
    fun `about shows profile title and status`() {
        val result = engine().execute("about")
        val plain = result.lines.joinToString("\n") { it.plainText }
        assertTrue(plain.isNotBlank())
    }

    @Test
    fun `stack shows expected technologies`() {
        val result = engine().execute("stack")
        val plain = result.lines.joinToString("\n") { it.plainText }
        assertTrue(plain.contains("Kotlin Multiplatform"))
        assertTrue(plain.contains("Compose Multiplatform"))
    }

    @Test
    fun `whoami shows identity and location`() {
        val result = engine().execute("whoami")
        val plain = result.lines.joinToString("\n") { it.plainText }
        assertTrue(plain.isNotBlank())
    }

    @Test
    fun `clear sets clear flag`() {
        val result = engine().execute("clear")
        assertTrue(result.clear)
        assertTrue(result.lines.isEmpty())
    }

    @Test
    fun `echo prints arguments`() {
        val result = engine().execute("echo hello world")
        val plain = result.lines.joinToString("\n") { it.plainText }
        assertEquals("hello world", plain)
    }

    @Test
    fun `ls lists available sections`() {
        val result = engine().execute("ls")
        val plain = result.lines.joinToString("\n") { it.plainText }
        assertTrue(plain.contains("about"))
        assertTrue(plain.contains("education"))
        assertTrue(plain.contains("projects"))
    }

    @Test
    fun `cat about returns about content`() {
        val result = engine().execute("cat about")
        val plain = result.lines.joinToString("\n") { it.plainText }
        assertTrue(plain.isNotBlank())
    }

    @Test
    fun `cat with unknown section returns not found`() {
        val result = engine().execute("cat unknown")
        val plain = result.lines.joinToString("\n") { it.plainText }
        assertTrue(plain.contains("unknown"))
    }

    @Test
    fun `langchange switches language to english`() {
        val services = stubPlatformServices()
        val engine = TerminalEngine(Lang.ES, services)
        val result = engine.execute("langchange en")
        assertEquals(Lang.EN, engine.lang)
        assertTrue(services.languageChanger is StubLanguageChanger)
        assertTrue(services.languageChanger.changes.contains("en"))
        val plain = result.lines.joinToString("\n") { it.plainText }
        assertTrue(plain.contains("language changed to en") || plain.contains("idioma cambiado a en"))
    }

    @Test
    fun `open github triggers link opener`() {
        val services = stubPlatformServices()
        val engine = TerminalEngine(Lang.ES, services)
        engine.execute("open github")
        assertTrue(services.linkOpener is StubLinkOpener)
        assertTrue(services.linkOpener.opened.isNotEmpty())
    }

    @Test
    fun `gallery triggers gallery opener for a project`() {
        val services = stubPlatformServices()
        val engine = TerminalEngine(Lang.EN, services)
        engine.execute("gallery terminal")
        assertTrue(services.galleryOpener is StubGalleryOpener)
        assertTrue(services.galleryOpener.opened.isNotEmpty())
    }

    @Test
    fun `help is localized in english`() {
        val result = engine(Lang.EN).execute("help")
        val plain = result.lines.joinToString("\n") { it.plainText }
        assertTrue(plain.contains("Available commands") || plain.contains("Comandos disponibles"))
    }
}
