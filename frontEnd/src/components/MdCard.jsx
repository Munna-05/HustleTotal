import React from 'react'

export const MdCard = (props) => {
    return (
        <div>
            <div className='row flex justify-center'>
                <div class="max-w-md border  hover:scale-105 bg-slate-300 hover:bg-slate-200 hover:transition duration-700 ease-in-out m-5 rounded-xl overflow-hidden shadow-slate-900 shadow-lg hover:shadow-md">

                    <div class="px-6 py-4 flex">
                        <div>
                            <img className='rounded-full mt-5 h-25 w-40' src="https://cdn.vox-cdn.com/thumbor/k__Q9jnlGB2VPZlDc8oE5g1kstw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22395263/18.jpg" alt="" />
                        </div>

                        <div class="font-bold mx-3 text-xl ">
                            <div className='pt-3'>

                                {props.name}
                            </div>

                            <div className='my-3'>
                                <p class="text-gray-700 max-w-sm px-3 h-30 text-xs">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                            <div className='flex'>
                                <span className='capitalize text-sm'>total subscribers</span><p className='text-sm text-red-700 mx-2'> {props.subs}</p>
                            </div>
                        </div>
                    </div>
                    <div class=" text-xs flex justify-end pt-2 ">
                        <span class="inline-block bg-gray-300 shadow shadow-slate-600 hover:bg-gray-500 span rounded-full text-xs px-2 py-1 font-semibold text-gray-900 hover:text-white  mr-2 mb-2">Profile</span>
                        <span class="inline-block bg-gray-300 shadow shadow-slate-600 hover:bg-gray-500 span rounded-full text-xs px-2 py-1 font-semibold text-gray-900 hover:text-white  mr-2 mb-2">Promotion</span>
                        <span class="inline-block bg-gray-300 shadow shadow-slate-600 hover:bg-gray-500 span rounded-full text-xs px-2 py-1 font-semibold text-gray-900 hover:text-white  mr-2 mb-2">Donate</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
