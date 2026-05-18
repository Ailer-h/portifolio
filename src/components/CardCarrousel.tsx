import { skills, type Skill } from "../content/skills"
import "../stylesheets/CardCarrousel.css"

interface CardCarrouselProps {
    elements: Skill[]
}

const CardCarrousel = ({ elements }: CardCarrouselProps) => {

    return <><div className="carrousel">

        {
            elements.map((element, index) => {
                
                return <>
                    <div className="card">
                        <h3>{element.skill}</h3>
                        <hr />
                        <p>
                            <b>Level:</b> {element.level.label}
                            {element.level.cefr && <span>{element.level.cefr}</span>}
                        </p>
                        <div className="barholder">
                            <div className="bar" style={{"width": (element.level.number / 5) * 100 + "%"}}></div>
                        </div>
                    </div>
                </>
            })
        }

    </div></>

}

export default CardCarrousel