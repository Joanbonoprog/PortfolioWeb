package org.portafolio.terminalkmp.terminal.engine

class StubClock(private val fixed: String = "12:00") : Clock {
    override fun nowHourMinute(): String = fixed
}

class StubLinkOpener : LinkOpener {
    val opened = mutableListOf<String>()
    override fun open(url: String) { opened += url }
}

class StubClipboard : Clipboard {
    val copied = mutableListOf<String>()
    override fun copy(text: String) { copied += text }
}

class StubGalleryOpener : GalleryOpener {
    val opened = mutableListOf<String>()
    override fun open(projectName: String) { opened += projectName }
}

class StubLanguageChanger : LanguageChanger {
    val changes = mutableListOf<String>()
    override fun change(languageTag: String) { changes += languageTag }
}

fun stubPlatformServices(
    clock: Clock = StubClock(),
    linkOpener: LinkOpener = StubLinkOpener(),
    clipboard: Clipboard = StubClipboard(),
    galleryOpener: GalleryOpener = StubGalleryOpener(),
    languageChanger: LanguageChanger = StubLanguageChanger(),
): PlatformServices = PlatformServices(
    clock = clock,
    linkOpener = linkOpener,
    clipboard = clipboard,
    galleryOpener = galleryOpener,
    languageChanger = languageChanger,
)
