import { useState } from "react"
import ProjectCard from "../components/ProjectCard"
import Modal from "../components/Modal"
import "../stylesheets/Projects.css"

import { projects } from "../content/projects"
import { useUserPreferences } from "../context/UserPreferencesContext"

const Projects = () => {

    const { language, t } = useUserPreferences()
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

    const closeModal = () => setSelectedProject(null)

    const githubIcon = <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    const lockIcon = <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>

    const formatDate = (date: Date | string) => {
        if (!(date instanceof Date)) return null
        const locale = language === "pt" ? "pt-BR" : "en-US"
        return date.toLocaleDateString(locale, { month: "long", year: "numeric" })
    }

    return <>
        <section id="projects" className="secondary">
            <h1 className="section-title">{t('nav.projects')}</h1>

            <div className="project-grid">
                {
                    [...projects].sort((a, b) => {
                        if (a.inDevelopment && !b.inDevelopment) return -1
                        if (!a.inDevelopment && b.inDevelopment) return 1
                        if (a.projectEnd instanceof Date && b.projectEnd instanceof Date)
                            return b.projectEnd.getTime() - a.projectEnd.getTime()
                        if (a.projectEnd instanceof Date) return -1
                        if (b.projectEnd instanceof Date) return 1
                        return 0
                    }).map((project, index) => {
                        const content = project.content[language]
                        const status = project.inDevelopment
                            ? "In Development"
                            : project.projectEnd instanceof Date
                                ? `Finished ${formatDate(project.projectEnd)}`
                                : ""
                        return <ProjectCard key={index} bannerSrc={project.banner} projectTitle={content.name} techUsed={project.techUsed} headline={content.headline} status={status} inDevelopment={project.inDevelopment} onSeeMore={() => setSelectedProject(project)} />
                    })
                }
            </div>

            <Modal
                title={selectedProject?.content[language].name ?? ""}
                bannerSrc={selectedProject?.banner}
                confirmIcon={selectedProject?.codeIsPrivate ? lockIcon : githubIcon}
                confirmLabel={selectedProject?.codeIsPrivate ? "Private Code" : "Github"}
                cancelLabel="See demo"
                cancelHidden={!selectedProject?.demo}
                visible={!!selectedProject}
                onClose={closeModal}
                onConfirm={() => { if (selectedProject?.github) window.open(selectedProject.github, "_blank") }}
                onCancel={() => { if (selectedProject?.demo) window.open(selectedProject.demo, "_blank") }}
                confirmDisabled={!!selectedProject?.codeIsPrivate}
                height={35}
                width={50}
            >
                {selectedProject && <>
                    <p className="modal-description">{selectedProject.content[language].description || selectedProject.content[language].headline}</p>
                    {(selectedProject.projectStart instanceof Date || selectedProject.inDevelopment) && (
                        <p className="modal-dates">
                            {formatDate(selectedProject.projectStart)}
                            {selectedProject.projectStart instanceof Date && " → "}
                            {selectedProject.inDevelopment ? "In Development" : formatDate(selectedProject.projectEnd)}
                        </p>
                    )}
                    <div className="modal-tags">
                        {selectedProject.techUsed.map((tech, i) => <div key={i}>{tech}</div>)}
                    </div>
                </>}
            </Modal>

        </section>
    </>

}

export default Projects