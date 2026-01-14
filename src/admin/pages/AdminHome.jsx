import React, { useContext, useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { Card } from "flowbite-react";
import { getAllApplications, getAllBooks, getAllJobs, getAllUsers } from '../../services/allApi';
import { toast } from 'react-toastify'
import { authContext } from '../../context/authContext';






const AdminHome = () => {
const [bookData,setBookData]=useState([])
const[userData,setUserData]=useState([])
const[jobData,setjobData]=useState([])
const[appData,setAppData]=useState([])

useEffect(()=>{
  getBooks()
  getUsers()
  getJobs()
  getApp()
  
  
},[])


const getBooks=async () => {
  try {
    let token = localStorage.getItem("token");
   
      let header = {
        Authorization: `Bearer ${token}`,
      };
    let apiResponse=await getAllBooks(header,"")
    if(apiResponse.status==200){
      console.log(apiResponse)
      setBookData(apiResponse.data.bookData)
    }else{
      toast.error(apiResponse.response.data.message)
    }
    
  } catch (error) {
    console.log(error)
    toast.error("something went wrong while acessing data")
    
  }
}

const getUsers=async () => {
  try {
      let token = localStorage.getItem("token");
   
      let header = {
        Authorization: `Bearer ${token}`,
      };
    let apiResponse=await getAllUsers(header)
    console.log(apiResponse)
    setUserData(apiResponse.data)
    
  } catch (error) {
    console.log(error)
      toast.error("something went wrong while acessing data")
  }
}
const getJobs=async () => {
   try {
      let token = localStorage.getItem("token");
   
      let header = {
        Authorization: `Bearer ${token}`,
      };
    let apiResponse=await getAllJobs(header)
    console.log(apiResponse)
    setjobData(apiResponse.data)
    
  } catch (error) {
    console.log(error)
      toast.error("something went wrong while acessing data")
  }
  
}
const getApp=async () => {
   try {
      let token = localStorage.getItem("token");
   
      let header = {
        Authorization: `Bearer ${token}`,
      };
    let apiResponse=await getAllApplications(header)
    console.log(apiResponse)
    setAppData(apiResponse.data)
    
  } catch (error) {
    console.log(error)
      toast.error("something went wrong while acessing data")
  }
}
  return (
    <>
    <AdminHeader/>
    <div className='grid grid-cols-[3fr_9fr] '>
       <AdminSidebar/>
       <div className='grid grid-cols-3 gap-6 p-5' >  
         <Card href="#" className="max-w-sm ms-5">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Total Books
      </h5>
      <p className="text-8xl text-white">
        {bookData.length}
      </p>
    </Card>
        <Card href="#" className="max-w-sm ms-5">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Total Users
      </h5>
      <p className="text-8xl text-white">
       {userData.length}
      </p>
    </Card>
     <Card href="#" className="max-w-sm ms-5">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Total Job openings
      </h5>
      <p className="text-8xl text-white">
        {jobData.length}
      </p>
    </Card>
     <Card href="#" className="max-w-sm ms-5">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Total applications
      </h5>
      <p className="text-8xl text-white">
       {appData.length}
      </p>
    </Card>

       </div>
       

    </div>
    </>
  )
}

export default AdminHome