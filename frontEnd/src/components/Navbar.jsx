import React from 'react'


const Navbar = () => {
    const login = ()=>{
      
        

    }
    return (
        <div>
           

            <nav class="bg-none dark:border-gray-600  container mx-auto"  >
                <div class="container bg-slate-300 bg-opacity-10 bg-clipping-padding flex fixed flex-wrap justify-between items-center px-3 "style={{backdropFilter:"blur(20px)"}}>
                    <a class="flex items-center">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"> */}
                        <span class="self-center border px-3 py-1 border-slate-900 border-2 text-sm font-semibold whitespace-nowrap uppercase dark:text-dark">H u s t l e r</span>
                    </a>
                    <div class="flex md:order-2">
                        <button onClick={login} type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-1 text-center ">
                            Log In
                            </button>
                 
                    </div>
                    <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul class="flex flex-col p-4 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-xs text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-xs text-slate-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-700 md:p-0 md:dark:hover:text-dark-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-xs text-slate-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-700 md:p-0 md:dark:hover:text-dark-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-xs text-slate-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-700 md:p-0 md:dark:hover:text-dark-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
           
        </div>
    )
}




export default Navbar