import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Form from './App.jsx'
import Form2 from './Form2.jsx'
import Accordion from './Accordian.jsx'
import Messenger from './Messanger.jsx'
import TaskApp from './TaskApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <br /><hr />
    <Form />
    <br /><hr />
    <Form2 />
    <br /><hr />
    <Accordion />
    <br /><hr />
    <Messenger />
    <br /><hr />
    <TaskApp />
  </StrictMode>,
)
