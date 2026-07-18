package org.portafolio.terminalkmp.terminal

import org.portafolio.terminalkmp.terminal.engine.Clock
import org.portafolio.terminalkmp.terminal.engine.Clipboard
import org.portafolio.terminalkmp.terminal.engine.GalleryOpener
import org.portafolio.terminalkmp.terminal.engine.LanguageChanger
import org.portafolio.terminalkmp.terminal.engine.LinkOpener

expect fun createClock(): Clock

expect fun createLinkOpener(): LinkOpener

expect fun createClipboard(): Clipboard

expect fun createGalleryOpener(): GalleryOpener

expect fun createLanguageChanger(): LanguageChanger

expect fun detectLanguageTag(): String

expect fun initLanguageListener()

expect var onLanguageUpdate: ((String) -> Unit)?

expect fun isCompactScreen(): Boolean
