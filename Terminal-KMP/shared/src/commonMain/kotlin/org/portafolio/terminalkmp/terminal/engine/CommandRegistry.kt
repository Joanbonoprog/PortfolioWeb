package org.portafolio.terminalkmp.terminal.engine

class CommandRegistry(commands: List<Command>) {
    val all: List<Command> = commands

    private val byName: Map<String, Command> = buildMap {
        commands.forEach { command ->
            put(command.name, command)
            command.aliases.forEach { put(it, command) }
        }
    }

    fun resolve(name: String): Command? = byName[name.lowercase()]

    fun names(): List<String> = all.map { it.name }

    fun completions(prefix: String): List<String> {
        val normalized = prefix.lowercase()
        return all.map { it.name }
            .filter { it.startsWith(normalized) }
            .distinct()
            .sorted()
    }
}
