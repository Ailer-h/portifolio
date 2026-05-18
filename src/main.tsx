import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import './stylesheets/index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'var(--bg)',
            color: 'var(--font-default)',
            border: '1px solid var(--bg)',
            borderRight: '5px solid var(--accent)'
          },
        }}
      />
    </BrowserRouter>
  </StrictMode>,
)
