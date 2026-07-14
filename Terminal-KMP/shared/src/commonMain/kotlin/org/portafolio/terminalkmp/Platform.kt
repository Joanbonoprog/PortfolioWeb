package org.portafolio.terminalkmp

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform