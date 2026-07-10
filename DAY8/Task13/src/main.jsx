import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import App2 from './App2.jsx'
// import App3 from './App3.jsx'
// import App4 from './App4.jsx'
import App5 from './App5.jsx'
import App6 from './App6.jsx'
import MyInput from './MyInput.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <br /><br /><hr /><br />
    {/* <App2 /> */}
    <br /><br /><hr /><br />
    {/* <App3 /> */}
    <br /><br /><hr /><br />
    {/* <App4 /> */}
    <br /><br /><hr /><br />
    <App5 />
    <br /><br /><hr /><br />
    <App6 />
    <br /><br /><hr /><br />
    <MyInput />
  </StrictMode>,
)
