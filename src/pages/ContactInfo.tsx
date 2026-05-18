import { useUserPreferences } from "../context/UserPreferencesContext"

const Contact = () => {

    const { t } = useUserPreferences()

    return <>
        <section id="contactInfo" className="secondary">
            <h1 className="section-title">{t('nav.contactInfo')}</h1>
        </section>
    </>

}

export default Contact