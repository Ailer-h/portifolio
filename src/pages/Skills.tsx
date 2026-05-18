import SkillCarrousel from "../components/SkillCarrousel"
import { useUserPreferences } from "../context/UserPreferencesContext"
import "../stylesheets/Skills.css"
import { skills } from "../content/skills"

const Skills = () => {

    const { t } = useUserPreferences()
    

    return <><section id="skills">
        <h1 className="section-title">{t('nav.skills')}</h1>

        <h2>{t('skills.programmingLanguages')} <span>({skills.programmingLanguages.length})</span></h2>
        <SkillCarrousel elements={skills.programmingLanguages}/>
        <h2>{t('skills.techAndFrameworks')} <span>({skills.techAndFrameworks.length})</span></h2>
        <SkillCarrousel elements={skills.techAndFrameworks}/>
        <h2>{t('skills.devopsAndTooling')} <span>({skills.devopsAndTooling.length})</span></h2>
        <SkillCarrousel elements={skills.devopsAndTooling}/>
        <h2>{t('skills.languages')} <span>({skills.languages.length})</span></h2>
        <SkillCarrousel elements={skills.languages}/>

    </section></>

}

export default Skills