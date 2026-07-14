import org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsEnvSpec
import org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsPlugin

plugins {
    // this is necessary to avoid the plugins to be loaded multiple times
    // in each subproject's classloader
    alias(libs.plugins.composeMultiplatform) apply false
    alias(libs.plugins.composeCompiler) apply false
    alias(libs.plugins.kotlinMultiplatform) apply false
}

// Pin the Node.js version used by Kotlin/JS/Wasm to avoid downloading a
// newer build (e.g. Node 25) that requires libatomic.so.1 in the Nixpacks image.
allprojects {
    plugins.withType<NodeJsPlugin> {
        extensions.getByType<NodeJsEnvSpec>().version = "22.13.1"
    }
}