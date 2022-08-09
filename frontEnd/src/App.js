
import './App.css';

import {BrowserRouter , Route,Routes} from 'react-router-dom'
import React from 'react';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/Home/LoginPage';
import Navbar from './components/Navbar';

function App() {
  const name = 'pewDePie'
  return (
    <div className='App' >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<LoginPage/>}/>

        </Routes>
      </BrowserRouter>
     

    </div>

  );
}

export default App;
