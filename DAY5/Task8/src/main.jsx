import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import List from './App.jsx'
import List2 from './app2.jsx'
import RecipeList from './racipe.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <List />
    <br />
    <hr />
    <br />
    <List2/>
    <br />
    <hr />
    <br />
    <RecipeList/>
  </StrictMode>,
)
