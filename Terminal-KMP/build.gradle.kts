import org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsEnvSpec
import org.jetbrains.kotlin.gradle.targets.wasm.nodejs.WasmNodeJsEnvSpec

plugins {
    // this is necessary to avoid the plugins to be loaded multiple times
    // in each subproject's classloader
    alias(libs.plugins.composeMultiplatform) apply false
    alias(libs.plugins.composeCompiler) apply false
    alias(libs.plugins.kotlinMultiplatform) apply false
}

// Use the Node.js 22.13.1 already provided by Nixpacks instead of letting
// Kotlin/JS or Kotlin/Wasm download their own Node binary (Node 25 requires
// libatomic.so.1 and fails in the minimal Nixpacks image).
// This must run after the Kotlin plugins create the root Node specs.
gradle.projectsEvaluated {
    rootProject.extensions.findByType<NodeJsEnvSpec>()?.apply {
        version.set("22.13.1")
        download.set(false)
    }
    rootProject.extensions.findByType<WasmNodeJsEnvSpec>()?.apply {
        version.set("22.13.1")
        download.set(false)
    }
}