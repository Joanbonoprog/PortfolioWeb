package org.portafolio.terminalkmp.data

data class PortfolioData(
    val identity: Identity,
    val about: About,
    val education: List<EducationItem>,
    val projects: List<Project>,
    val experience: List<ExperienceItem>,
    val skills: List<Skill>,
    val contact: Contact,
    val languages: List<String>,
)

data class Identity(
    val name: String,
    val role: String,
    val tagline: String,
    val location: String,
)

data class About(
    val profileTitle: String,
    val description: String,
    val status: String,
    val driverLicense: String,
    val continuousLearning: String,
)

data class EducationItem(
    val title: String,
    val type: String,
    val institution: String,
    val year: String,
    val details: String,
)

data class Project(
    val id: String,
    val name: String,
    val subtitle: String,
    val description: String,
    val tech: List<String>,
    val github: String?,
    val website: String?,
    val current: Boolean,
)

data class ExperienceItem(
    val id: String,
    val role: String,
    val company: String,
    val period: String,
    val description: List<String>,
    val website: String?,
)

data class Skill(
    val name: String,
    val level: Int,
    val levelName: String,
)

data class Contact(
    val email: String,
    val phone: String,
    val address: String,
    val linkedin: String,
    val github: String,
)
