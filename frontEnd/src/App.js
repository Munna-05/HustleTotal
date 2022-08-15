
import './App.css';

import {BrowserRouter , Route,Routes} from 'react-router-dom'
import React from 'react';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/Home/LoginPage';
import Navbar from './components/Navbar';
import { SignupPage } from './Pages/Home/SignupPage';

function App() {
  const name = 'pewDePie'
  return (
    <div className='App' >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>} />

        </Routes>
      </BrowserRouter>
     

    </div>

  );
}

export default App;
