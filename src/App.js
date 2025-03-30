import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './MainComponents/Welcome';
import './App.css';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = '/' exact element= {<Welcome />}></Route> 
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
