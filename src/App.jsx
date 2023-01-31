import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import Joke from './Components/Joke'

import './App.css'

function App() {


  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className='container mx-auto'>
       <Joke/>
      </div>
    </div>
    </Router>
  )
}

export default App
