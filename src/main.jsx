import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CreateGlobalStyles from './styles/globalStyles.js'
import Router from './routes/routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreateGlobalStyles />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>
)
