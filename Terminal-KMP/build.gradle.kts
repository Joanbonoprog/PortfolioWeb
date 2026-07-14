import org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsRootExtension
import org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsRootPlugin

plugins {
    // this is necessary to avoid the plugins to be loaded multiple times
    // in each subproject's classloader
    alias(libs.plugins.composeMultiplatform) apply false
    alias(libs.plugins.composeCompiler) apply false
    alias(libs.plugins.kotlinMultiplatform) apply false
}

// Use the Node.js already installed by Nixpacks instead of downloading one.
// Downloaded Node 25 binaries require libatomic.so.1, which is missing in the
// minimal Nixpacks image; the system Node 22 from nixPkgs works without it.
plugins.withType<NodeJsRootPlugin> {
    val nodeJs = extensions.getByName("kotlinNodeJs") as NodeJsRootExtension
    nodeJs.download = false
}