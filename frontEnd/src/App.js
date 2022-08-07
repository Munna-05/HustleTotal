import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Card } from './components/Card';
import { MdCard } from './components/MdCard';
import React from 'react';

function App() {
  const name = 'pewDePie'
  return (
    <div className='App ' >

      <div className=''>
        <Navbar />
      </div>
      <div className='h-10'>

      </div>

      <div className=''>

      <Card name="Mr.Beast" subs="1,000,000" />
      </div>


      <div className='grid grid-cols-2'>
        <Card name="Unbox Therapy" subs='1,289,000' />
        <Card name="Unbox Therapy" subs='1,289,000' />
      </div>
      <div className='grid grid-cols-3'>
        <MdCard name='Xtreme' subs='345,000' />
        <MdCard name='Xtreme' subs='345,000' />
        <MdCard name='Xtreme' subs='345,000' />
      </div>


    </div>

  );
}

export default App;
