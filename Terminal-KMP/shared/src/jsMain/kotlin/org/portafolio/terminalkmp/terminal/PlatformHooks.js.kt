package org.portafolio.terminalkmp.terminal

import org.portafolio.terminalkmp.terminal.engine.Clock
import org.portafolio.terminalkmp.terminal.engine.Clipboard
import org.portafolio.terminalkmp.terminal.engine.GalleryOpener
import org.portafolio.terminalkmp.terminal.engine.LanguageChanger
import org.portafolio.terminalkmp.terminal.engine.LinkOpener

private fun jsHourMinute(): String =
    js("(function(){var d=new Date();function p(n){return (n<10?'0':'')+n;}return p(d.getHours())+':'+p(d.getMinutes());})()")

private fun jsOpen(url: String) {
    js("window.open(url, '_blank')")
}

private fun jsCopyToClipboard(text: String) {
    js("navigator.clipboard.writeText(text).catch(function(){})")
}

private fun jsOpenProjectGallery(projectName: String) {
    js("window.parent.postMessage({type: 'openGallery', projectName: projectName}, '*')")
}

private fun jsChangeLanguage(languageTag: String) {
    js("window.parent.postMessage({type: 'changeLanguage', language: languageTag}, '*')")
}

actual fun createClock(): Clock = object : Clock {
    override fun nowHourMinute(): String = jsHourMinute()
}

actual fun createLinkOpener(): LinkOpener = object : LinkOpener {
    override fun open(url: String) {
        jsOpen(url)
    }
}

actual fun createClipboard(): Clipboard = object : Clipboard {
    override fun copy(text: String) {
        jsCopyToClipboard(text)
    }
}

actual fun createGalleryOpener(): GalleryOpener = object : GalleryOpener {
    override fun open(projectName: String) {
        jsOpenProjectGallery(projectName)
    }
}

actual fun createLanguageChanger(): LanguageChanger = object : LanguageChanger {
    override fun change(languageTag: String) {
        jsChangeLanguage(languageTag)
    }
}

actual fun detectLanguageTag(): String =
    js("(function(){const p=new URLSearchParams(window.location.search).get('lang');if(p==='es'||p==='en')return p;const l=(navigator.language||'es').substring(0,2);return (l==='es'||l==='en')?l:'es';})()")

// Global callback for language updates
private var languageCallback: ((String) -> Unit)? = null

actual var onLanguageUpdate: ((String) -> Unit)?
    get() = languageCallback
    set(value) { languageCallback = value }

actual fun initLanguageListener() {
    js("""
        window.addEventListener('message', function(event) {
            if (event.data.type === 'setLanguage') {
                console.log('Terminal: Received language update:', event.data.language);
                if (typeof languageCallback !== 'undefined' && languageCallback !== null) {
                    languageCallback(event.data.language);
                }
            }
        });
    """)
}
