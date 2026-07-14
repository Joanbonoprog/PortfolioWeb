import org.jetbrains.kotlin.gradle.ExperimentalWasmDsl

plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.composeMultiplatform)
    alias(libs.plugins.composeCompiler)
}

kotlin {
    js {
        browser()
        binaries.executable()
    }

    @OptIn(ExperimentalWasmDsl::class)
    wasmJs {
        browser()
        binaries.executable()
    }

    sourceSets {
        commonMain.dependencies {
            implementation(projects.shared)

            implementation(libs.compose.ui)
        }
    }
}

// Task to copy WASM output to Astro public directory
tasks.register<Copy>("copyWasmToAstro") {
    val wasmJsBrowserDistributionTask = tasks.named("wasmJsBrowserDistribution")
    dependsOn(wasmJsBrowserDistributionTask)
    
    val wasmOutputDir = layout.buildDirectory.dir("dist/wasmJs/productionExecutable")
    val astroPublicDir = file("../../Portafolio-Astro/public/wasm")
    
    from(wasmOutputDir)
    into(astroPublicDir)
    
    // Declare input dependency
    inputs.files(wasmJsBrowserDistributionTask.get().outputs)
    
    // Clean the destination directory first
    doFirst {
        astroPublicDir.deleteRecursively()
    }
    
    // Ensure the destination directory exists
    doLast {
        astroPublicDir.mkdirs()
    }
}

// Make copyWasmToAstro run after the actual webpack build
tasks.named("wasmJsBrowserProductionWebpack") {
    finalizedBy("copyWasmToAstro")
}

// Clean task to remove wasm from Astro public directory
tasks.register<Delete>("cleanAstroWasm") {
    delete(file("../Portafolio-Astro/public/wasm"))
}

// Make clean also clean Astro wasm directory
tasks.named("clean") {
    finalizedBy("cleanAstroWasm")
}