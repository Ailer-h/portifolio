import { type Skill } from "../content/skills"
import { useUserPreferences } from "../context/UserPreferencesContext"
import "../stylesheets/SkillCarrousel.css"

interface SkillCarrouselProps {
    elements: Skill[]
}

const SkillCarrousel = ({ elements }: SkillCarrouselProps) => {

    const { t } = useUserPreferences()

    return <><div className="carrousel">

        {
            elements.map((element) => {
                const skillName = element.translationKey
                    ? t(`skills.languageNames.${element.translationKey}`)
                    : element.skill

                return <>
                    <div className="skill">
                        <h3>{skillName}</h3>
                        <hr />
                        <p>
                            <b>{t('skills.level')}:</b> {t(`skills.levels.${element.level.label}`)}
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

export default SkillCarrousel