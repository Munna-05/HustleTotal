import React from 'react'
import UserProfileDetails from '../../components/UserProfileDetails'
import Navbar from '../../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import {motion} from 'framer-motion'

const UserProfile = () => {
    const { userid } = useParams()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')
    const { user } = useSelector((state) => ({ ...state.user }))


    useEffect(() => {
        if (userid!=="null") {

            axios.get(`http://localhost:5001/auth/userDetails/${userid}`).then((response) => {
                console.log("response details", response)
                setName(response.data.name)
                setEmail(response.data.email)
               


            })
        }else{

        }


    }, [])



    return (
        <motion.div >
            <div className='fixed z-10 '>< Navbar /></div>
            <UserProfileDetails name={name} email={email} id={userid} />
        </motion.div>
    )
}

export default UserProfile