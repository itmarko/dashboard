import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//import public router
import PublicRouter from './Widget/Router/PublicRouter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PublicRouter />
  </StrictMode>,
)
