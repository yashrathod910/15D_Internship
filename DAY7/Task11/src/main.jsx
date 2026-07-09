import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import App2 from './App2.jsx'
import App3 from './App3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <br /><br /><hr /><br />
    <App2 />
    <br /><br /><hr /><br />
    <App3 />
  </StrictMode>,
)
