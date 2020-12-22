import React from 'react'
import NavbarLarge from './components/organisms/NavbarLarge'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <NavbarLarge />
      </Router>
    </>
  )
}

export default App

