import { useUserPreferences } from "../context/UserPreferencesContext"

const Certifications = () => {

    const { t } = useUserPreferences()
    

    return <><section id="certifications" className="secondary">
    
        <h1 className="section-title">{t('nav.certifications')}</h1>


    </section></>

}

export default Certifications