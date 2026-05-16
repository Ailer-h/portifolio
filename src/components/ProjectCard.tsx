interface ProjectCardProps {

    bannerSrc: string
    projectTitle: string

}

const ProjectCard = ({ bannerSrc, projectTitle }: ProjectCardProps) => {

    return <><div className="grid-item">
        
            <div className="banner" style={{"backgroundImage": `url(${bannerSrc})`}}>
                <h1>{projectTitle}</h1>
            </div>

            <div className="content">

            </div>

            <div className="options">
                <button>See more</button>
            </div>

        </div></>

}

export default ProjectCard