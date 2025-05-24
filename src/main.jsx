import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SubmissionProvider } from './Context/SubmissionContext.jsx'

createRoot(document.getElementById('root')).render(
  <SubmissionProvider>

  <StrictMode>
    <App />
  </StrictMode>,

  </SubmissionProvider>
)
