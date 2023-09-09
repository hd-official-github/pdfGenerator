import { useState } from 'react'
// import Header from '../component/Header';
import { Routes, Route } from 'react-router-dom';
import Pdfgenerator from '../pages/Pdfgenerator';
import Home from '../pages/Home';
function App() {
 
  return (

    <div>
      
      <Routes>
        <Route path="/">
          <Route exact path="/" element={<Home />} />
          <Route path="/generate/:clientId" element={<Pdfgenerator />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
