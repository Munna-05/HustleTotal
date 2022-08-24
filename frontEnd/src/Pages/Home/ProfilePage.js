import React from 'react'
import Navbar from '../../components/Navbar'
import { Profile } from '../../components/Profile'

export const ProfilePage = () => {
  return (

    <div className='h-screen'>
        <div className='fixed z-10 w-full'>< Navbar/></div>
        {/* <div className='h-10'></div> */}
        <div>
            <Profile/>
        </div>



    </div>
  )
}

