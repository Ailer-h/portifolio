import { useEffect, useRef, useState } from 'react'
import Sidebar from './components/Sidebar'
import { UserPreferencesProvider, isSupportedLanguage, type Language } from './context/UserPreferencesContext'

import ScrollToSection from './lib/scroll'

import Awards from './pages/Awards'
import Certifications from './pages/Certifications'
import Contact from './pages/ContactInfo'
import MainContent from './pages/MainContent'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Footer from './components/Footer'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const mainRef = useRef<HTMLElement>(null)

  const params = new URLSearchParams(window.location.search)
  const langParam = params.get('lang')
  const defaultLanguage: Language = isSupportedLanguage(langParam) ? langParam : 'en'

  useEffect(() => {
    const el = mainRef.current
    if (!el) return
    const handleScroll = () => setShowBackToTop(el.scrollTop >= 400)
    el.addEventListener('scroll', handleScroll)
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <UserPreferencesProvider defaultLanguage={defaultLanguage}>
      <div className="grid">
        <Sidebar mobileOpen={mobileSidebarOpen} onClose={() => setMobileSidebarOpen(false)} />

        <main ref={mainRef}>
          <div className="mobile-header">
            <button className="hamburger" onClick={() => setMobileSidebarOpen(true)}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            </button>
            <span>Henrique Ailer</span>
          </div>

          <MainContent/>
          <Projects/>
          <Skills/>
          <Certifications/>
          <Awards/>
          <Contact/>
          <Footer/>
        </main>
      </div>

      {mobileSidebarOpen && <div className="sidebar-backdrop" onClick={() => setMobileSidebarOpen(false)} />}

      {showBackToTop && <button id='backToTop' onClick={() => ScrollToSection("mainContent")}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m481-541.69-188 188L246.69-400 481-634.31 715.31-400 669-353.69l-188-188Z"/></svg>
      </button>}
    </UserPreferencesProvider>
  )
}

export default App
