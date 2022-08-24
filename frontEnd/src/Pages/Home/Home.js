import React from 'react'
import '../../App.css'
import '../../components/Card.css'
import Navbar from '../../components/Navbar';
import { Card } from '../../components/Card';
import { MdCard } from '../../components/MdCard';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const youtubeApiKey = 'AIzaSyC87sI8sEK3S7YP9smCG1EhWihdUh4fJCs'
    const url = 'https://www.googleapis.com/youtube/v3'
    useEffect(() => {
       axios.get("http://localhost:5001/auth/youtube").then((response)=>{
        console.log(response)
       })

    //    let user = localStorage.getItem("token")
    //    if(!user){
    //     navigate('/login')
    //    }

    })


    return (
        <div className=''>
            <div className=''>
                <Navbar />
            </div>
            <div className='h-10'>

            </div>

            <div className=''>

                <Card name="Mr.Beast" subs="1,000,000" />
            </div>


            <div className='grid sm:grid-cols-1 transition duration-500  lg:grid-cols-2 sm-grid duration-500 transition-500 grid-cols-1 md:grid grid-cols-2 '>
                <Card name="Unbox Therapy" subs='1,289,000' />
                <Card name="Unbox Therapy" subs='1,289,000' />
            </div>
            <div className='grid duration-500 md:grid grid-cols-3 sm:grid duration-500 grid-cols-1 lg:grid-cols-3'>
                <MdCard name='Xtreme' subs='345,000' />
                <MdCard name='Xtreme' subs='345,000' />
                <MdCard name='Xtreme' subs='345,000' />
                <MdCard name='Xtreme' subs='345,000' />
                <MdCard name='Xtreme' subs='345,000' />
                <MdCard name='Xtreme' subs='345,000' />

                <MdCard name='Xtreme' subs='345,000' />
                <MdCard name='Xtreme' subs='345,000' />
                <MdCard name='Xtreme' subs='345,000' />
            </div>

        </div>
    )
}

export default Home