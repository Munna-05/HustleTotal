import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { Profile } from '../../components/Profile'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

export const ProfilePage = () => {
    const {id} = useParams()
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [subs, setSubs] = useState('')
    const [dp,setDp] = useState('')
    useEffect(()=>{
        console.log(id)
        axios.get(`http://localhost:5001/auth/profile/${id}`).then((response)=>{
            console.log(response)
            setName(response.data.channelTitle)
            setDesc(response.data.channelDescription)
            setSubs(response.data.subscriberCount)
            setDp(response.data.dp)
        })
    })
  return (

    <div className='h-screen'>
        <div className='fixed z-10 w-full'>< Navbar/></div>
        {/* <div className='h-10'></div> */}
        <div>
            <Profile title={name} description={desc} subscribers={subs} dp={dp}/>
        </div>



    </div>
  )
}

