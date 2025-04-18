import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './MainComponents/Welcome';
import './App.css';
import { MyContextProvider } from './hooks/MyContext';
import Vault from './MainComponents/Vault'
import Modal from './MainComponents/Modal'
import Youtube from './MainComponents/Youtube'
import Podcast from './MainComponents/Podcast'


function App() {
  return (

      <MyContextProvider>
        <>
          <BrowserRouter>
            <Routes>
              <Route path='/' exact element={<Welcome />}></Route>
              <Route path = '/modal' exact element= {<Modal />}></Route>
              <Route path = '/vault' exact element= {<Vault />}></Route>
              <Route path = '/youtube' exact element= {<Youtube />}></Route>
              <Route path = '/podcasts' exact element= {<Podcast />}></Route>
            </Routes>
          </BrowserRouter>
        </>
      </MyContextProvider>

  );
}

export default App;
