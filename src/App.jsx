import React from 'react'
import FetchApi from './FetchApi'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './path/Home';
import Login from './path/Login';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App