import React, { useEffect } from 'react'
import { useState } from 'react'
import VideoTutorial from './VideoTutorial'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import {motion} from 'framer-motion'



const UserProfileDetails = (props) => {
    const [data, setData] = useState(false)
    const [editor, setEditor] = useState(false)
    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('')
    const [email, setEmail] = useState('')
    const [about, setAbout] = useState('')
    const [id, setId] = useState('')
    const [upi, setUpi] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [password, setPassword] = useState('')
    const [change, setChange] = useState(false)



    const alerts = () => {
        console.log('clicked')
        console.log(data)
        setData(!data)
    }
    useEffect(() => {
        axios.get(`http://localhost:5001/auth/userDetails/${props.id}`).then((response) => {
            console.log(response.data)
            setUsername(response.data.name)
            setEmail(response.data.email)
            setId(response.data._id)
            setUpi(response.data.upi)
            setPassword(response.data.password)
            setCountry(response.data.country)
            setState(response.data.state)
            setAbout(response.data.about)
            console.log(username, email, id, state, country, about)


        })

    }, [id])
    const editProfile = () => {
        setEditor(!editor)
        console.log('edit')
    }
    let updateUser = (e) => {
        e.preventDefault()
        console.log('update clicked')
        const data = {
            name: username,
            email: email,
            upi: upi,
            country: country,
            state: state,
            password: password,
            about: about,
        }
        axios.post(`http://localhost:5001/auth/userUpdate/${id}`, data).then((response) => {
            if (response) {
                console.log(response.data === 'user updated')
                toast.success('User Details Updated', { position: toast.POSITION.TOP_RIGHT })

            } else {
                toast.error('Update Failed', { position: toast.POSITION.TOP_RIGHT })

            }
        })


    }





    return (
        <motion.div initial={{ width: 0 }} animate={{ width: '100%'  }} exit={{ x: window.innerWidth ,opacity:1 }}
       >
            <ToastContainer
                autoClose={2000}
                hideProgressBar={false}

            />
            <main className="profile-page">
                <section className="relative block" style={{ height: "500px" }}>
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-0 bg-black"
                        ></span>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                        style={{ height: "70px" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"

                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-300 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </section>
                <section className="relative py-16 bg-gray-300">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">

                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div className="py-6 px-3 mt-32 sm:mt-0">
                                            <input type="text" placeholder='Enter channel Id ' className='bg-slate-200 mx-3 py-1 rounded border shadow-inner px-2 text-sm shadow-slate-500' name="" id="" />
                                            <button
                                                className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                                                type="button"
                                                style={{ transition: "all .15s ease" }}
                                            >
                                                verify your Channel
                                            </button>
                                            <button className='border border-black px-2 rounded-full' onClick={alerts}>?</button>

                                        </div>
                                    </div>

                                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                    22
                                                </span>
                                                <span className="text-sm text-gray-500">Friends</span>
                                            </div>
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                    10
                                                </span>
                                                <span className="text-sm text-gray-500">Photos</span>
                                            </div>
                                            <div className="lg:mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                    89
                                                </span>
                                                <span className="text-sm text-gray-500">Comments</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {data ? <div className='container w-full flex justify-center '>
                                    <VideoTutorial />
                                    <button className='mx-2 bg-red-500 text-white rounded-full px-2 h-fit' onClick={alerts}>Close</button>
                                </div>
                                    :
                                    null}

                                <div className='h-fit'><img className='mx-auto rounded-full h-60' src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=170667a&w=0&h=FXkT-N6vISLOCUefa9MyQg0pH-6loMX9zBZjgLK458c=" alt="" /></div>
                                <div className="text-center ">
                                    <h3 className="text-4xl capitalize font-semibold leading-normal mb-2 text-gray-800 mb-2">
                                        {props.name}
                                    </h3>
                                    <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold ">
                                        <i className="fas  fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                                        {props.email}
                                    </div>
                                    <div className="mb-2 text-gray-700 mt-10">
                                        <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                                       
                                    </div>
                                    <div className="mb-2 text-gray-700">
                                        <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                                        
                                    </div>
                                </div>
                                <div className="mt-10 h-90 py-10 border-t border-gray-300 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className="mb-4 text-lg leading-relaxed text-gray-800">
                                               {about}
                                            </p>
                                            <a
                                                href="#pablo"
                                                className="font-normal text-pink-500"
                                                onClick={editProfile}
                                            >
                                                Edit Profile
                                            </a>

                                            {
                                                editor ?
                                                    <div>

                                                        <div className='w-full bg-slate-300 h-fit py-3 duration-700 transition mt-5 pt-5  rounded px-3 grid grid-cols-2 '>
                                                            <div className=''>
                                                                <input className='w-full px-3 capitalize rounded-md h-10 mx-auto m-2 grid' type="text" placeholder={username} value={username}
                                                                    onChange={(e) => setUsername(e.target.value)} />
                                                                <input className='w-full px-3  rounded-md h-10 mx-auto m-2 grid' type="text" placeholder={email} value={email}
                                                                    onChange={(e) => { setEmail(e.target.value) }} />
                                                                {/* <input className='w-full px-3 capitalize rounded-md h-10 mx-auto m-2 grid' type="text" /> */}
                                                                <input className='w-full px-3 capitalize rounded-md h-10 mx-auto m-2 grid' placeholder={state} value={state} type="text"
                                                                    onChange={(e) => setState(e.target.value)} />
                                                            </div>
                                                            <div>
                                                                <input className='w-full mx-2 px-3 capitalize rounded-md h-10 mx-auto m-2 grid' type="text" placeholder={country} value={country}
                                                                    onChange={(e) => setCountry(e.target.value)} />
                                                                <input className='w-full mx-2 px-3 capitalize rounded-md h-10 mx-auto m-2 grid' type="text" placeholder={about} value={about} onChange={(e) => setAbout(e.target.value)} />
                                                                <input type="file" class=" w-full mx-2  text-sm  text-slate-500
                                                                file:mx-auto file:py-2 file:px-4
                                                                file:rounded-full file:border-0
                                                                file:text-sm file:font-semibold
                                                                file:bg-violet-50 file:text-violet-700
                                                                hover:file:bg-violet-100
                                                                "/>
                                                                <button className='text-blue-700 flex mx-2 mt-4 hover:underline' onClick={() => setChange(!change)}>Change Password</button>
                                                                {change ?
                                                                    <div className=''>
                                                                        <input type="text" className='w-60 duration-500 px-3 rounded-md h-10 mx-auto ' placeholder={password} value={password} onChange={(e) => setPassword(e.target.value)} />
                                                                    </div> : null
                                                                }
                                                            </div>
                                                        </div>
                                                        <button type='submit' onClick={updateUser} className='bg-blue-400 mt-5 rounded-lg h-10 hover:bg-green-600 hover:duration-200 duration-200 w-40 text-white'>Update</button>

                                                    </div>

                                                    : null
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </motion.div >
    )
}
export default UserProfileDetails