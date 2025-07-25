import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import QuizApp from './QuizApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuizApp />
  </StrictMode>,
)
