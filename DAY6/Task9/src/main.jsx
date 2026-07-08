import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import App2 from './app2.jsx'
import App3 from './Page.jsx'
import Page from './Page.jsx'
import Counter from './counter.jsx'
import App4 from './app4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <br /><br /><hr /><br />
    <App2 />
    <br /><br /><hr /><br />
    <Page />
    <br /><br /><hr /><br />
    <App3 />
    <br /><br /><hr /><br />
    <Counter />
    <br /><br /><hr /><br />
    <App4 />
  </StrictMode>,
)
