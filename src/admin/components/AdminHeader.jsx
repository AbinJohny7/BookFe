import React from 'react'

const AdminHeader = () => {
  return (
   
    <div className='flex justify-between items-center'>
        <div className="flex items-center ">
            <img className='w-25' src="https://static.vecteezy.com/system/resources/previews/006/115/725/non_2x/black-and-white-open-book-logo-illustration-on-white-background-free-vector.jpg" alt="" />

        </div>
    <h1 className='text-3xl font-bold text-gray-600'>welcome admin</h1>
    <button className='bg-black text-white font-bold p-2  rounded border hover:bg-white hover:text-black me-3'>Logout</button>

    </div>
 
  )
}

export default AdminHeader