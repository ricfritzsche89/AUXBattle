import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Lobby from './pages/Lobby'
import Drafting from './pages/Drafting'
import Battle from './pages/Battle'
import './index.css'

console.log('AUX Battle: Starting full app...');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <div className="flex-1 flex flex-col min-h-screen bg-dark text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lobby/:id" element={<Lobby />} />
          <Route path="/drafting/:id" element={<Drafting />} />
          <Route path="/battle/:id" element={<Battle />} />
        </Routes>
      </div>
    </HashRouter>
  </React.StrictMode>,
)
