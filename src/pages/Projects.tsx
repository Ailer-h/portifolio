import ProjectCard from "../components/ProjectCard"
import "../stylesheets/Projects.css"

import drachma from "../assets/banners/drachma.png"
import pastelaria from "../assets/banners/pastelaria.jpg"
import erp from "../assets/banners/erp_simulator.png"


const Projects = () => {

    return <>
        <section id="projects" className="secondary">
            <h1>Projects</h1>

            <div className="project-grid">
                <ProjectCard bannerSrc={drachma} projectTitle="Drachma"/>
                <ProjectCard bannerSrc={pastelaria} projectTitle="Gerenciamento de Pastelaria"/>
                <ProjectCard bannerSrc={erp} projectTitle="Simulador de ERP"/>
            </div>

        </section>
    </>

}

export default Projects