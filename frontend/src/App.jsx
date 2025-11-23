import { useState, useEffect } from 'react'
import './App.css'

import Header from './components/Header'
import Dashboard from './components/Dashboard'

import api from './api'

function App() {

  const [toggleDark, setToggleDark] = useState(false)
  const [toggleAdd, setToggleAdd] = useState(false)
  const [toggleUpdate, setToggleUpdate] = useState(false)

  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    if (toggleDark) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [toggleDark])

  async function loadExpenses() {
    const res = await api.get("/expense")
    setExpenses(res.data)
  }

  useEffect(() => {
    loadExpenses()
  }, [])

  return (
    <div className="app-container">

      <Header 
        toggleDark={toggleDark}
        setToggleDark={setToggleDark}
        toggleAdd={toggleAdd}
        setToggleAdd={setToggleAdd}
      />

      <Dashboard 
        toggleUpdate={toggleUpdate}
        setToggleUpdate={setToggleUpdate}
        expenses={expenses}
      />

    </div>
  )
}

export default App
