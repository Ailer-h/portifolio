import CardCarrousel from "../components/CardCarrousel"
import { useUserPreferences } from "../context/UserPreferencesContext"
import "../stylesheets/Skills.css"
import { skills } from "../content/skills"

const Skills = () => {

    const { language, t } = useUserPreferences()
    

    return <><section id="skills">
        <h1 className="section-title">{t('nav.skills')}</h1>

        <h2>Programming Languages <span>({skills.programmingLanguages.length})</span></h2>
        <CardCarrousel elements={skills.programmingLanguages}/>
        <h2>Technologies & Frameworks <span>({skills.techAndFrameworks.length})</span></h2>
        <CardCarrousel elements={skills.techAndFrameworks}/>
        <h2>DevOps & Tooling <span>({skills.devopsAndTooling.length})</span></h2>
        <CardCarrousel elements={skills.devopsAndTooling}/>
        <h2>Languages <span>({skills.languages.length})</span></h2>
        <CardCarrousel elements={skills.languages}/>

    </section></>

}

export default Skills