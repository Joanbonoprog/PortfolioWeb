package org.portafolio.terminalkmp.terminal.engine

interface Clock {
    fun nowHourMinute(): String
}

interface LinkOpener {
    fun open(url: String)
}

interface Clipboard {
    fun copy(text: String)
}

interface GalleryOpener {
    fun open(projectName: String)
}

interface LanguageChanger {
    fun change(languageTag: String)
}

/** Servicios de plataforma agrupados para inyección en comandos y UI. */
data class PlatformServices(
    val clock: Clock,
    val linkOpener: LinkOpener,
    val clipboard: Clipboard,
    val galleryOpener: GalleryOpener,
    val languageChanger: LanguageChanger,
)
