import { useEffect, useRef, useState } from 'react'
import Sidebar from './components/Sidebar'
import { UserPreferencesProvider } from './context/UserPreferencesContext'

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
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = mainRef.current
    if (!el) return
    const handleScroll = () => setShowBackToTop(el.scrollTop >= 400)
    el.addEventListener('scroll', handleScroll)
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <UserPreferencesProvider>
      <div className="grid">
        <Sidebar/>

        <main ref={mainRef}>
          <MainContent/>
          <Projects/>
          <Skills/>
          <Certifications/>
          <Awards/>
          <Contact/>
          <Footer/>

        </main>
      </div>
      {showBackToTop && <button id='backToTop' onClick={() => ScrollToSection("mainContent")}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m481-541.69-188 188L246.69-400 481-634.31 715.31-400 669-353.69l-188-188Z"/></svg>
      </button>}
    </UserPreferencesProvider>
  )
}

export default App
