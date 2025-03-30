import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './MainComponents/Welcome';
import './App.css';
import NewsFeed from './MainComponents/NewsFeed';



function App() {
  return (
  
    <>
    <BrowserRouter>
    <Routes>
      <Route path = '/' exact element= {<Welcome />}></Route>
      <Route path = '/feed' exact element= {<NewsFeed />}></Route>
    
    </Routes>
    </BrowserRouter>
    </>
  
  );
}

export default App;
