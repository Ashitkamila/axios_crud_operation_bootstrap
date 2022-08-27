
import React from 'react';
import Create from './components/Create';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Read from './components/Read';
import Update from './components/Update';





const App = () => {
  return (
    
      <Router>
        <Routes>
        
          <Route path="/" element={<Create/>}/>
           <Route path="/read" element={<Read/>}/>
           <Route path="/update" element={<Update/>} />
          </Routes>
      </Router>

    



  )
}

export default App