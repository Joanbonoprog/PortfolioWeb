package org.portafolio.terminalkmp.data

object Portfolio {
    fun of(lang: Lang): PortfolioData = when (lang) {
        Lang.ES -> PortfolioGenerated.es
        Lang.EN -> PortfolioGenerated.en
    }
}
