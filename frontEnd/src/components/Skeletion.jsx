import React from 'react'

const Skeletion = () => {
    return (
        <div>
                <div className=' flex justify-center'>
                <div class="max-w-xxl duration-500  bg-slate-400 animate-pulse hover:transition duration-700 ease-in-out m-4 rounded-xl overflow-hidden shadow-slate-900 shadow-lg ">
                   
                    <div class="px-6 py-4 h-40 flex">
                        <div className='rounded-full bg-slate-300 h-40 p-5 w-40'>
                            <img className='' 
                            alt="" src='' />
                        </div>

                        <div class="font-bold mx-3 text-xl  mb-2">
                            <div className='pt-3 mt-5 bg-slate-300 rounded w-80'> </div>
                            <div className='pt-3 mt-5 bg-slate-300 rounded w-60'> </div>
                        
                       <div className='my-3'>
                       <p class="text-gray-700 max-w-sm px-3 h-40 text-xs">
                         <br/>
                       <span className='capitalize text-lg'> </span>
                        <span className='px-3 h-10 py-0 text-xl  text-red-700'></span>
                        </p>
                       </div>
                        </div>
                    </div>
                    <div class="px-6 flex justify-end pt-4 pb-2">
                       
                        <span class="inline-block bg-gray-300 shadow shadow-slate-600 hover:bg-gray-500 span rounded-full px-2 py-1 text-sm font-semibold text-gray-900 hover:text-white  mr-2 mb-2"></span>
                        <span class="inline-block bg-gray-300 shadow shadow-slate-600 hover:bg-gray-500 span rounded-full px-5 py-1 text-sm font-semibold text-gray-900 hover:text-white  mr-2 mb-2"></span>
                        <span class="inline-block bg-gray-300 shadow shadow-slate-600 hover:bg-gray-500 span rounded-full px-5 py-1 text-sm font-semibold text-gray-900 hover:text-white  mr-2 mb-2"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skeletion