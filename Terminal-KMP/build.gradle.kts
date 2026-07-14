import org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsEnvSpec
import org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsRootPlugin
import org.jetbrains.kotlin.gradle.targets.wasm.nodejs.WasmNodeJsEnvSpec
import org.jetbrains.kotlin.gradle.targets.wasm.nodejs.WasmNodeJsRootPlugin

plugins {
    // this is necessary to avoid the plugins to be loaded multiple times
    // in each subproject's classloader
    alias(libs.plugins.composeMultiplatform) apply false
    alias(libs.plugins.composeCompiler) apply false
    alias(libs.plugins.kotlinMultiplatform) apply false
}

// Force Kotlin/JS and Kotlin/Wasm to use the Node.js 22.13.1 already provided
// by Nixpacks instead of downloading Node 25, whose binary requires libatomic.so.1
// and fails in the minimal Nixpacks image.
// The legacy root extensions are deprecation-error in Kotlin 2.4, so their
// properties are set via reflection.
fun Any.setLegacyNodeConfig(version: String, download: Boolean) {
    val setVersion = javaClass.getMethod("setNodeVersion", String::class.java)
    val setDownload = javaClass.getMethod("setDownload", Boolean::class.javaPrimitiveType!!)
    setVersion.invoke(this, version)
    setDownload.invoke(this, download)
}

rootProject.plugins.withType<NodeJsRootPlugin> {
    rootProject.extensions.configure<NodeJsEnvSpec>("kotlinNodeJsSpec") {
        version.set("22.13.1")
        download.set(false)
    }
    rootProject.extensions.findByName("kotlinNodeJs")?.setLegacyNodeConfig("22.13.1", false)
}

rootProject.plugins.withType<WasmNodeJsRootPlugin> {
    rootProject.extensions.configure<WasmNodeJsEnvSpec>("kotlinWasmNodeJsSpec") {
        version.set("22.13.1")
        download.set(false)
    }
    rootProject.extensions.findByName("kotlinWasmNodeJs")?.setLegacyNodeConfig("22.13.1", false)
}