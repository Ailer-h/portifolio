import { useUserPreferences } from "../context/UserPreferencesContext"

interface ProjectCardProps {

    bannerSrc: string
    projectTitle: string
    techUsed: Array<String>

    headline: string
    status: string
    inDevelopment: boolean

    onSeeMore: () => void

}

const ProjectCard = ({ bannerSrc, projectTitle, techUsed, headline, status, inDevelopment, onSeeMore }: ProjectCardProps) => {

    const { t } = useUserPreferences()
    const excess = (techUsed.length - 4) > 0 ? techUsed.length - 4 : null

    return <><div className="grid-item">
        
            <div className="banner" style={{"backgroundImage": `url(${bannerSrc})`}}>
                <h1>{projectTitle}</h1>
            </div>

            <div className="content">
                <p>{headline}</p>
                <span className={`status ${inDevelopment ? "active" : ""}`}>{status}</span>
            </div>

            <div className="options">
                <div className="tags">
                    {
                        techUsed.slice(0, 4).map((tech) => {
                            return <div>{tech}</div>
                        })
                    }
                    { excess && <div>+{excess}</div> }
                </div>
                <button onClick={onSeeMore}>{t("projects.seeMore")}</button>
            </div>

        </div></>

}

export default ProjectCard