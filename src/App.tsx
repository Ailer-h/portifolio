import Sidebar from './components/Sidebar'
import { UserPreferencesProvider } from './context/UserPreferencesContext'
import Awards from './pages/Awards'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'
import MainContent from './pages/MainContent'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

function App() {

  return (
    <UserPreferencesProvider>
      <div className="grid">
        <Sidebar/>

        <main>
          <MainContent/>
          <hr/>
          <Projects/>
          <hr/>
          <Skills/>
          <hr/>
          <Certifications/>
          <hr/>
          <Awards/>
          <hr/>
          <Contact/>

        </main>
      </div>
    </UserPreferencesProvider>
  )
}

export default App
