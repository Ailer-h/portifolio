import { useUserPreferences } from "../context/UserPreferencesContext"
import "../stylesheets/Certifications.css"

const Certifications = () => {

    const { t } = useUserPreferences()

    return <><section id="certifications" className="secondary">
    
        <h1 className="section-title">{t('nav.certifications')}</h1>

        <div className="overview">
            <div>
                <span>0</span>
                <p>Certifications</p>
            </div>
            <div>
                <p>Last Certification</p>
                <span>2024</span>
            </div>
        </div>

        <hr />

    </section></>

}

export default Certifications