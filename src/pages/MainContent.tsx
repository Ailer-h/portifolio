import "../stylesheets/MainContent.css"
import pfp from "../assets/pfp.webp"
import { useUserPreferences } from "../context/UserPreferencesContext"
import ScrollToSection from "../lib/scroll"

const MainContent = () => {

    const { language, t } = useUserPreferences()

    return <>
        <section id="mainContent">
            <div className="hero">
                <img src={pfp} alt="" />
                <div>
                    <h2>{t('main.greeting')}</h2>
                    <h1>Henrique Ailer</h1>
                    <p id="role">{t('main.role')}</p>
                    <p id="location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
                        {t('main.location')}
                    </p>
                    <p id="description">
                        {t('main.description')}
                    </p>
                    <hr />
                    <div id="buttons">
                        <button className="primary" onClick={() => ScrollToSection("contactInfo")}>{t('main.contact')}</button>
                        <a href={"../../public/" + (language == "en" ? "cv_henrique_ailer.pdf" : "curriculo_henrique_ailer.pdf")} download={language == "en" ? "CV Henrique Ailer.pdf" : "Currículo Henrique Ailer.pdf"}>
                            <button className="secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M479-330.92 297.46-512.46l47.31-45.77L446-457v-335h66v335l101.23-101.23 47.31 45.77L479-330.92ZM258.62-168q-38.35 0-64.48-26.14Q168-220.27 168-258.62v-96.92h66v96.92q0 9.24 7.69 16.93 7.69 7.69 16.93 7.69h442.76q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93v-96.92h66v96.92Q792-220 765.86-194q-26.13 26-64.48 26H258.62Z"/></svg>
                                {t('main.downloadCV')}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>

}

export default MainContent