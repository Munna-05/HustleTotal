import React from 'react'

const AdminUserTable = () => {
  return (
    <div>
         <div className=''>
                    <h1 className='bg-slate-600 mx-auto rounded text-white m-3 w-60'>User Management</h1>
                    <table class="table border border-black container">
                        <thead>
                            <tr className='border border-black'>
                                <th className='border border-black'>Name</th>
                                <th className='border border-black'>Email Address</th>
                                <th className='border border-black'>Profile Status</th>
                                <th className='border border-black'>Account Details</th>
                                <th className='border border-black'>Block/Unblock</th>
                                <th className='border border-black'></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-black'>The Sliding Mr.</td>
                                <td className='border border-black'>Malcolm Lockyer</td>
                                <td className='border border-black'>Malcolm Lockyer</td>
                                <td className='border border-black'>Malcolm Lockyer</td>
                                <td className='border border-black'>Malcolm Lockyer</td>
                                <td className='border border-black'><button className='bg-red-500 p-1 px-3 my-2 rounded-full text-red-100 hover:bg-red-600 duration-300'>Remove</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    </div>
  )
}

export default AdminUserTable