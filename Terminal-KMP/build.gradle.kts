import org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsRootExtension
import org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsRootPlugin

plugins {
    // this is necessary to avoid the plugins to be loaded multiple times
    // in each subproject's classloader
    alias(libs.plugins.composeMultiplatform) apply false
    alias(libs.plugins.composeCompiler) apply false
    alias(libs.plugins.kotlinMultiplatform) apply false
}

// Pin the Node.js version used by Kotlin/JS/Wasm to avoid downloading a
// newer build (e.g. Node 25) that requires libatomic.so.1 in the Nixpacks image.
plugins.withType<NodeJsRootPlugin> {
    val nodeJs = extensions.getByName("kotlinNodeJs") as NodeJsRootExtension
    nodeJs.version = "22.13.1"
}