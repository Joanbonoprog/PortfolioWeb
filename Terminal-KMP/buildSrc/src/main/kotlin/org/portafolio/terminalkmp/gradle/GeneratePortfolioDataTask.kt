package org.portafolio.terminalkmp.gradle

import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.booleanOrNull
import kotlinx.serialization.json.int
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import org.gradle.api.DefaultTask
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.file.RegularFileProperty
import org.gradle.api.tasks.InputFile
import org.gradle.api.tasks.OutputDirectory
import org.gradle.api.tasks.PathSensitive
import org.gradle.api.tasks.PathSensitivity
import org.gradle.api.tasks.TaskAction
import java.io.File

abstract class GeneratePortfolioDataTask : DefaultTask() {

    @get:InputFile
    @get:PathSensitive(PathSensitivity.RELATIVE)
    abstract val esJson: RegularFileProperty

    @get:InputFile
    @get:PathSensitive(PathSensitivity.RELATIVE)
    abstract val enJson: RegularFileProperty

    @get:OutputDirectory
    abstract val outputDir: DirectoryProperty

    @TaskAction
    fun generate() {
        val es = parse(esJson.get().asFile)
        val en = parse(enJson.get().asFile)

        val code = buildString {
            appendLine("package org.portafolio.terminalkmp.data")
            appendLine()
            appendLine("object PortfolioGenerated {")
            appendLine("    val es: PortfolioData = ${renderData(es)}")
            appendLine()
            appendLine("    val en: PortfolioData = ${renderData(en)}")
            appendLine("}")
        }

        val pkgDir = File(outputDir.get().asFile, "org/portafolio/terminalkmp/data")
        pkgDir.mkdirs()
        File(pkgDir, "PortfolioGenerated.kt").writeText(code)
    }

    private fun parse(file: File): JsonObject {
        require(file.exists()) { "Portfolio i18n file not found: ${file.absolutePath}" }
        return Json.parseToJsonElement(file.readText()).jsonObject
    }

    private fun renderData(root: JsonObject): String {
        val hero = root.obj("hero")
        val meta = root.obj("meta")
        val about = root.obj("about")
        val contact = root.obj("contact")

        val identity = "Identity(" +
            "name = ${lit(hero.str("name"))}, " +
            "role = ${lit(meta.str("jobTitle"))}, " +
            "tagline = ${lit(hero.str("title"))}, " +
            "location = ${lit(contact.str("addressValue"))})"

        val aboutObj = "About(" +
            "profileTitle = ${lit(about.str("profileTitle"))}, " +
            "description = ${lit(about.str("description"))}, " +
            "status = ${lit(about.obj("status").str("value"))}, " +
            "driverLicense = ${lit(about.obj("driverLicense").str("value"))}, " +
            "continuousLearning = ${lit(about.obj("continuousLearning").str("description"))})"

        val education = root.obj("education").arr("items").joinToString(",\n") { el ->
            val o = el.jsonObject
            "        EducationItem(" +
                "title = ${lit(o.str("title"))}, " +
                "type = ${lit(o.str("type"))}, " +
                "institution = ${lit(o.str("institution"))}, " +
                "year = ${lit(o.str("year"))}, " +
                "details = ${lit(o.str("details"))})"
        }

        val projects = root.obj("projects").arr("items").joinToString(",\n") { el ->
            val o = el.jsonObject
            val tech = o.arr("tech").joinToString(", ") { lit(it.jsonPrimitive.content) }
            "        Project(" +
                "id = ${lit(o.str("id"))}, " +
                "name = ${lit(o.str("name"))}, " +
                "subtitle = ${lit(o.str("subtitle"))}, " +
                "description = ${lit(o.str("description"))}, " +
                "tech = listOf($tech), " +
                "github = ${litOrNull(o.strOrNull("github"))}, " +
                "website = ${litOrNull(o.strOrNull("website"))}, " +
                "current = ${o.boolOrFalse("current")})"
        }

        val experience = root.obj("experience").arr("items").joinToString(",\n") { el ->
            val o = el.jsonObject
            val desc = o.str("description").split("|").joinToString(", ") { lit(it.trim()) }
            "        ExperienceItem(" +
                "id = ${lit(o.str("id"))}, " +
                "role = ${lit(o.str("role"))}, " +
                "company = ${lit(o.str("company"))}, " +
                "period = ${lit(o.str("period"))}, " +
                "description = listOf($desc), " +
                "website = ${litOrNull(o.strOrNull("website"))})"
        }

        val skills = root.obj("skills").arr("items").joinToString(",\n") { el ->
            val o = el.jsonObject
            "        Skill(" +
                "name = ${lit(o.str("name"))}, " +
                "level = ${o.intValue("level")}, " +
                "levelName = ${lit(o.str("levelName"))})"
        }

        val languages = root.obj("languages").arr("items")
            .joinToString(", ") { lit(it.jsonPrimitive.content) }

        val contactObj = "Contact(" +
            "email = ${lit(contact.str("emailValue"))}, " +
            "phone = ${lit(contact.str("phoneValue"))}, " +
            "address = ${lit(contact.str("addressValue"))}, " +
            "linkedin = ${lit(contact.str("linkedinValue"))}, " +
            "github = ${lit(contact.str("githubValue"))})"

        return buildString {
            appendLine("PortfolioData(")
            appendLine("    identity = $identity,")
            appendLine("    about = $aboutObj,")
            appendLine("    education = listOf(")
            appendLine(education)
            appendLine("    ),")
            appendLine("    projects = listOf(")
            appendLine(projects)
            appendLine("    ),")
            appendLine("    experience = listOf(")
            appendLine(experience)
            appendLine("    ),")
            appendLine("    skills = listOf(")
            appendLine(skills)
            appendLine("    ),")
            appendLine("    contact = $contactObj,")
            appendLine("    languages = listOf($languages),")
            append("    )")
        }
    }

    private fun JsonObject.obj(key: String) = getValue(key).jsonObject
    private fun JsonObject.arr(key: String) = getValue(key).jsonArray
    private fun JsonObject.str(key: String) = getValue(key).jsonPrimitive.content
    private fun JsonObject.strOrNull(key: String) = this[key]?.jsonPrimitive?.content
    private fun JsonObject.intValue(key: String) = getValue(key).jsonPrimitive.int
    private fun JsonObject.boolOrFalse(key: String) = this[key]?.jsonPrimitive?.booleanOrNull ?: false

    private fun lit(s: String): String {
        val escaped = s
            .replace("\\", "\\\\")
            .replace("\"", "\\\"")
            .replace("\$", "\\\$")
            .replace("\n", "\\n")
            .replace("\r", "\\r")
            .replace("\t", "\\t")
        return "\"$escaped\""
    }

    private fun litOrNull(s: String?): String = if (s == null) "null" else lit(s)
}
