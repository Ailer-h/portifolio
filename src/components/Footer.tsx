import { useUserPreferences } from "../context/UserPreferencesContext"
import copy from "../lib/copy"
import ScrollToSection from "../lib/scroll"
import "../stylesheets/Footer.css"

const Footer = () => {

    const { t } = useUserPreferences()
    
    return <><footer>

        <div className="cols">
            <div>
                <h1>Henrique Ailer</h1>
                <p>{t('footer.tagline')}</p>
            </div>

            <div>
                <h1>{t('footer.quickLinks')}</h1>
                <ul>
                    <li role="button" onClick={() => ScrollToSection("mainContent")}>{t('nav.start')}</li>
                    <li role="button" onClick={() => ScrollToSection("projects")}>{t('nav.projects')}</li>
                    <li role="button" onClick={() => ScrollToSection("skills")}>{t('nav.skills')}</li>
                    <li role="button" onClick={() => ScrollToSection("certifications")}>{t('nav.certifications')}</li>
                    <li role="button" onClick={() => ScrollToSection("awards")}>{t('nav.awards')}</li>
                    <li role="button" onClick={() => ScrollToSection("contactInfo")}>{t('nav.contactInfo')}</li>
                </ul>
            </div>

            <div>
                <h1>{t('footer.contact')}</h1>
                <ul>
                    <a href="https://maps.app.goo.gl/RwrQJFzd9NMif8Zz5" target="_blank">
                        <li>{t('main.location')}</li>
                    </a>
                    <li onClick={(e) => copy((e.target as HTMLElement).innerText)}>+55 (19) 98151-6918</li>
                    <a href="mailto:ailerhenrique@gmail.com" target="_blank">
                        <li>ailerhenrique@gmail.com</li>
                    </a>
                </ul>

            </div>
        </div>

        <hr />

        <div className="credits">
            <p>&copy; 2026 Henrique Ailer - {t('footer.rights')}</p>
            <p>{t('footer.builtWith')}</p>
        </div>

    </footer></>

}

export default Footer