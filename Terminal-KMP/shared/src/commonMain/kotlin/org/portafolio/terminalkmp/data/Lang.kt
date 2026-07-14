package org.portafolio.terminalkmp.data

enum class Lang(val tag: String) {
    ES("es"),
    EN("en");

    companion object {
        fun from(tag: String): Lang =
            if (tag.trim().lowercase().startsWith("en")) EN else ES
    }
}
