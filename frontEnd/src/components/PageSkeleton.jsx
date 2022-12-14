import React from 'react'
import { motion } from 'framer-motion'

const  PageSkeleton = () => {
    return (
        <motion.div className=' bg-none overlow-hidden animate-pulse' style={{height:'30vh',width:"100%"}} initial={{ width: 0 }} animate={{ width: '100%'  }} exit={{ width:0 }} >
           <div className=''>
                <main className="profile-page h-fit">
                    <section className="relative block" style={{ height: "500px" }}>
                        <div
                            className="w-full blur-sm h-full bg-center overflow-hidden bg-cover"

                        >
                            <img src="" alt="" />
                            <span
                                id="blackOverlay"
                                className=" h-full absolute  "
                            ></span>
                        </div>
                        <div
                            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                            style={{ height: "70px" }}
                        >
                            <svg
                                className="absolute bottom-0 overflow-hidden"
                                xmlns="http://www.w3.org/2000/svg"
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
                    <section className="relative py-2 bg-gray-300">
                        <div className="container mx-auto px-4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                                <div className="px-6">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                            <div className="relative">
                                                {/* <img
                        alt="..."
                        src=''
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      /> */}
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                            <div className="py-6 px-3 mt-32 sm:mt-0">
                                                <button
                                                    className="bg-slate-300 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                                                    type="button"
                                                    style={{ transition: "all .15s ease" }}
                                                >
                                                    Connect
                                                </button>
                                                <button
                                                    className="bg-slate-300 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                                                    type="button"
                                                    style={{ transition: "all .15s ease" }}
                                                >
                                                    Collaborate
                                                </button>
                                                <button
                                                    className="bg-slate-300 active:bg-pink-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                                                    type="button"
                                                    style={{ transition: "all .15s ease" }}
                                                >
                                                    Promote
                                                </button>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                                <div className="mr-4 p-3 text-center">
                                                    <span className="text-xl font-bold block animate-pulse uppercase tracking-wide text-gray-700">
                                                        Loading...
                                                    </span>
                                                    <span className="text-sm text-gray-500">Subscribers</span>
                                                </div>

                                                <div className="mr-4 p-3 text-center">
                                                    <span className="text-xl font-bold animate-pulse block uppercase tracking-wide text-gray-700">
                                                        Loading
                                                    </span>
                                                    <span className="text-sm text-gray-500">Videos</span>
                                                </div>
                                                <div className="lg:mr-4 p-3 text-center">
                                                    <span className="text-xl font-bold animate-pulse block uppercase tracking-wide text-gray-700">
                                                        Loading
                                                    </span>
                                                    <span className="text-sm text-gray-500">Total Comments</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' flex justify-center'>

                                        <img src="https://toppng.com/uploads/preview/avatar-png-11554021819gij72acuim.png" className='w-60 h-30 grayscale hover:scale-105 duration-700 rounded-full ' alt="" /> 
                                    </div>
                                    <div className=" mt-12">
                                        <h3 className="text-4xl animate-pulse font-semibold leading-normal mb-2 text-gray-800 mb-2">
                                            Loading..
                                        </h3>
                                   
                                    </div>
                                    <div className="mt-10 py-10 border-t border-gray-300 animate-pulse text-center">
                                        <div className="flex flex-wrap justify-center">
                                            <div className="w-full overflow-y-scroll lg:w-9/12 px-4">
                                                <p className="mb-4 text-lg animate-pulse leading-relaxed text-gray-800">
                                                    Loading..
                                                </p>
                                                <a
                                                    href="#pablo"
                                                    className="font-normal text-pink-500"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    {/* Show more */}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
           

        </motion.div>
    )
}

export default PageSkeleton