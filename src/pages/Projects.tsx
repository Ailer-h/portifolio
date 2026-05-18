import ProjectCard from "../components/ProjectCard"
import "../stylesheets/Projects.css"

import { projects } from "../content/projects"
import { useUserPreferences } from "../context/UserPreferencesContext"

const Projects = () => {

    const { language, t } = useUserPreferences()

    return <>
        <section id="projects" className="secondary">
            <h1 className="section-title">{t('nav.projects')}</h1>

            <div className="project-grid">
                {
                    projects.map((project, index) => {
                        const content = project.content[language]
                        return <ProjectCard key={index} bannerSrc={project.banner} projectTitle={content.name} techUsed={project.techUsed} headline={content.headline} />
                    })
                }
            </div>

        </section>
    </>

}

export default Projects