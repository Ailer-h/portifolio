interface ProjectCardProps {

    bannerSrc: string
    projectTitle: string
    techUsed: Array<String>

    headline: string

}

const ProjectCard = ({ bannerSrc, projectTitle, techUsed, headline }: ProjectCardProps) => {

    const excess = (techUsed.length - 4) > 0 ? techUsed.length - 4 : null

    return <><div className="grid-item">
        
            <div className="banner" style={{"backgroundImage": `url(${bannerSrc})`}}>
                <h1>{projectTitle}</h1>
            </div>

            <div className="content">
                <p>{headline}</p>

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
                <button>See more</button>
            </div>

        </div></>

}

export default ProjectCard