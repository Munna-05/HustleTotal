import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import AdminUserTable from './AdminUserTable'
import AdminChannelDetails from './AdminChannelDetails'

import { Card } from './Card'
import { useState } from 'react'

const AdminDash = () => {
    const [user, setUser] = useState(true)
    const [channel, setChannel] = useState(false)
    const changeState = () => {
        console.log("user", user)
        console.log('channel', channel)
        setUser(!user)

    }
    useEffect(() => {
        axios.get('http://localhost:5001/auth/adminDash').then((response) => {
            console.log(response)
        })
    })
    return (
        <div className=''>
            <div className='h-20 '></div>

            <div className='justify-center flex'>
                {user ?
                    <button onClick={changeState} className='bg-slate-300 p-2 px-4 rounded-xl shadow shadow-slate-600 shadow-md hover:bg-blue-500 hover:text-white'>View Channels</button>
                    :

                    <button onClick={changeState} className='bg-slate-300 p-2 px-4 mx-3 rounded-xl shadow shadow-slate-600 shadow-md hover:bg-blue-500 hover:text-white'>View Users</button>
                }
            </div>
            <div className=' border-black bg-slate-300 mx-auto mt-9 rounded py-3 px-3 container'>
                {user ? <AdminUserTable/> :<AdminChannelDetails/>}

            </div>



        </div>
    )
}

export default AdminDash