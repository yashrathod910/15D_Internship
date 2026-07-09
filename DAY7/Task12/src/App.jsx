import Navbar from './Navbar.jsx'
import createBrowserRouter from 'react-router-dom'
import React from 'react'
import Home from './Home.jsx'
import login from './login.jsx'

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Element: <Home />
    },
    {
      path: "/",
      Element: <login />
    },
  ])
  return (
    <Navbar />
  )
}


