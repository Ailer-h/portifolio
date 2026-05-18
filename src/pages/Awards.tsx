import { useUserPreferences } from "../context/UserPreferencesContext"
import { awards } from "../content/awards"
import CertificationList from "../components/CardList"

const Awards = () => {

    const { t } = useUserPreferences()

    return <><section id="awards">
        <h1 className="section-title">{t('nav.awards')}</h1>

        <CertificationList elements={awards}/>
    </section></>

}

export default Awards