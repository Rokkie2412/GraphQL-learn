import React from 'react'
import CharactersList from './pages/CharactersList'
import { Routes, Route  } from 'react-router'
import Character from './pages/Character'
import './App.css'

const App = () => {

  return (
    <div className='App'>
      <Routes>
        <Route path='/:id' element={<Character />} />
        <Route path='/' element={<CharactersList />} />
      </Routes>
    </div>
  )
}

export default App