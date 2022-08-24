import React from 'react'
import { Login } from '../../components/Login'
import Navbar from '../../components/Navbar'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate=useNavigate()
  useEffect(() => {
    

    let token = localStorage.getItem("token")
    if(token){
     navigate('/')
    }

 })
  return (
    <div className='height'>
        <Navbar />
        <div className='h-20'>

        </div>
        <Login />
    </div>

  )
}

export default LoginPage