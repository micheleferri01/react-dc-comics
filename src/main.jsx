import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap'

// import local assets
import './assets/css/index.css'

// import root components
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
