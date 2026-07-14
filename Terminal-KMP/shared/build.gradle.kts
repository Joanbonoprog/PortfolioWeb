import org.jetbrains.kotlin.gradle.ExperimentalWasmDsl
import org.portafolio.terminalkmp.gradle.GeneratePortfolioDataTask

plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.composeMultiplatform)
    alias(libs.plugins.composeCompiler)
}

val generatePortfolioData = tasks.register<GeneratePortfolioDataTask>("generatePortfolioData") {
    val i18nDir = providers.gradleProperty("portfolioI18nDir")
        .getOrElse("../Portafolio-Astro/src/i18n")
    esJson.set(rootProject.layout.projectDirectory.file("$i18nDir/es.json"))
    enJson.set(rootProject.layout.projectDirectory.file("$i18nDir/en.json"))
    outputDir.set(layout.buildDirectory.dir("generated/portfolio/kotlin"))
}

kotlin {
    js {
        browser()
    }

    @OptIn(ExperimentalWasmDsl::class)
    wasmJs {
        browser()
    }
    
    
    sourceSets {
        commonMain {
            kotlin.srcDir(generatePortfolioData.flatMap { it.outputDir })
            dependencies {
                implementation(libs.compose.runtime)
                implementation(libs.compose.foundation)
                implementation(libs.compose.material3)
                implementation(libs.compose.ui)
                implementation(libs.compose.components.resources)
                implementation(libs.compose.uiToolingPreview)
                implementation(libs.androidx.lifecycle.viewmodelCompose)
                implementation(libs.androidx.lifecycle.runtimeCompose)
            }
        }
        commonTest.dependencies {
            implementation(libs.kotlin.test)
        }
        jsMain.dependencies {
            implementation(libs.wrappers.browser)
        }
    }
}