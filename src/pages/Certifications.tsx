import CertificationList from "../components/CertificationList"
import { useUserPreferences } from "../context/UserPreferencesContext"
import "../stylesheets/Certifications.css"

import { certifications } from "../content/certifications"

const Certifications = () => {

    const { t } = useUserPreferences()

    return <><section id="certifications" className="secondary">
    
        <h1 className="section-title">{t('nav.certifications')}</h1>

        <div className="overview">
            <div>
                <span>{certifications.length}</span>
                <p>{t('certifications.count')}</p>
            </div>
            <div>
                <p>{t('certifications.lastCertification')}</p>
                <span>{Math.max(...certifications.map(c => c.issueDate.getFullYear()))}</span>
            </div>
        </div>

        <hr />

        <CertificationList elements={certifications}/>

    </section></>

}

export default Certifications