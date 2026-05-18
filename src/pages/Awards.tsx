import { useUserPreferences } from "../context/UserPreferencesContext"

const Awards = () => {

    const { t } = useUserPreferences()

    return <><section id="awards">
        <h1 className="section-title">{t('nav.awards')}</h1>
    </section></>

}

export default Awards