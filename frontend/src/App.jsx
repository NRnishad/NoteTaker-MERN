import React from 'react'
import { Routes,Route } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'
import './App.css'
import toast  from 'react-hot-toast'

function App() {
  return (
    <div>
      
    <Routes data-theme='forest'>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/note/:id" element={<NoteDetailPage />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
      </div>
  )
}

export default App