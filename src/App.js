import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './MainComponents/Welcome';
import './App.css';
import { MyContextProvider } from './hooks/MyContext';
import Vault from './MainComponents/Vault'
import Modal from './MainComponents/Modal'
import Youtube from './MainComponents/Youtube'
import Podcast from './MainComponents/Podcast'
import Subscribe from './MainComponents/Subscribe';
import Login from './MainComponents/Login';
import Goodbye from './MainComponents/Goodbye';


function App() {
  return (

      <MyContextProvider>
        <>
          <BrowserRouter>
            <Routes>
              <Route path = '/' exact element={<Welcome />}></Route>
              <Route path = '/modal' exact element= {<Modal />}></Route>
              <Route path = '/vault' exact element= {<Vault />}></Route>
              <Route path = '/youtube' exact element= {<Youtube />}></Route>
              <Route path = '/podcasts' exact element= {<Podcast />}></Route>
              <Route path = '/login' exact element = {<Login />}></Route>
              <Route path = '/subscribe' exact element = {<Subscribe />}></Route>
              <Route path = '/goodbye' exact element = {<Goodbye />}></Route>
            </Routes>
          </BrowserRouter>
        </>
      </MyContextProvider>

  );
}

export default App;
