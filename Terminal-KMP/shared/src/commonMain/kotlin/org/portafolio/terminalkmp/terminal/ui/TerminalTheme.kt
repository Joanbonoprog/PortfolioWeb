package org.portafolio.terminalkmp.terminal.ui

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.sp
import org.portafolio.terminalkmp.terminal.engine.SpanStyle

object TerminalTheme {
    val Background = Color(0xFF0F172A) // slate-900
    val Foreground = Color(0xFFE2E8F0) // slate-200

    val UserBg = Color(0xFF4F46E5) // indigo-600
    val PathBg = Color(0xFF2563EB) // blue-600
    val GitBg = Color(0xFF334155) // slate-700
    val TimeBg = Color(0xFF1E293B) // slate-800
    val LangBg = Color(0xFF7C3AED) // violet-600
    val OnPill = Color(0xFFF8FAFC) // slate-50
    val PromptChar = Color(0xFF60A5FA) // blue-400
    val Cursor = Color(0xFF60A5FA) // blue-400

    val FontSize = 15.sp
    val LineHeight = 22.sp
    val SmallLineHeight = 12.sp

    fun colorFor(style: SpanStyle): Color = when (style) {
        SpanStyle.Normal -> Foreground
        SpanStyle.Title -> Color(0xFF60A5FA) // blue-400
        SpanStyle.Subtitle -> Color(0xFF818CF8) // indigo-400
        SpanStyle.Muted -> Color(0xFF64748B) // slate-500
        SpanStyle.Accent -> Color(0xFF38BDF8) // sky-400
        SpanStyle.Link -> Color(0xFF3B82F6) // blue-500
        SpanStyle.Error -> Color(0xFFEF4444) // red-500
        SpanStyle.Success -> Color(0xFF22C55E) // green-500
        SpanStyle.Prompt -> PromptChar
        SpanStyle.Kmp1 -> Color(0xFF7F52FF) // Kotlin purple
        SpanStyle.Kmp2 -> Color(0xFF6B57FF) // violet-blue
        SpanStyle.Kmp3 -> Color(0xFF0A84FF) // Kotlin blue
    }
}
