import React from 'react'

const AdminChannelDetails = () => {
  return (
    <div>
         <div className=''>
                    <h1 className='bg-slate-600 mx-auto rounded text-white m-3 w-60'>Channel Details</h1>
                    <table class="table border border-black container">
                        <thead>
                            <tr className='border border-black'>
                                <th className='border border-black'>Channel Name</th>
                                <th className='border border-black'>Description</th>
                                <th className='border border-black'>Subscribers</th>
                                <th className='border border-black'>Logo</th>
                                <th className='border border-black'>Video Count</th>
                                {/* <th className='border border-black'></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-black'>The Sliding Mr.</td>
                                <td className='border border-black'>Malcolm Lockyer</td>
                                <td className='border border-black'>Malcolm Lockyer</td>
                                <td className='border border-black'>Malcolm Lockyer</td>
                                <td className='border border-black'>Malcolm Lockyer</td>
                                {/* <td className='border border-black'></td> */}
                            </tr>
                        </tbody>
                    </table>
                </div>
    </div>
  )
}

export default AdminChannelDetails