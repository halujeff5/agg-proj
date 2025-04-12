import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './MainComponents/Welcome';
import './App.css';
import Subscribe from './MainComponents/Subscribe';
import { MyContextProvider } from './hooks/MyContext';


function App() {
  return (

      <MyContextProvider>
        <>
          <BrowserRouter>
            <Routes>
              <Route path='/' exact element={<Welcome />}></Route>
              <Route path = '/subscribe' exact element= {<Subscribe />}></Route>

            </Routes>
          </BrowserRouter>
        </>
      </MyContextProvider>

  );
}

export default App;
