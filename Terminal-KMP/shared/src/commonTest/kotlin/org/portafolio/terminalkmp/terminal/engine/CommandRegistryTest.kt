package org.portafolio.terminalkmp.terminal.engine

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertTrue

class CommandRegistryTest {

    private val registry = CommandRegistry(defaultCommands())

    @Test
    fun `resolves by exact name`() {
        assertNotNull(registry.resolve("help"))
    }

    @Test
    fun `resolves by alias`() {
        assertNotNull(registry.resolve("?"))
        assertNotNull(registry.resolve("h"))
    }

    @Test
    fun `resolve is case insensitive`() {
        assertNotNull(registry.resolve("HELP"))
    }

    @Test
    fun `returns null for unknown command`() {
        assertNull(registry.resolve("unknown"))
    }

    @Test
    fun `completions filters by prefix`() {
        val result = registry.completions("a")
        assertTrue(result.isNotEmpty())
        assertTrue(result.all { it.startsWith("a") })
    }

    @Test
    fun `completions returns distinct sorted names`() {
        val result = registry.completions("")
        assertEquals(result.sorted().distinct(), result)
    }
}
