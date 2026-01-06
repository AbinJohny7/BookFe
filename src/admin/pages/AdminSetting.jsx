import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import { toast } from "react-toastify";
import { getUserDetails, updateProfile } from "../../services/allApi";

const AdminSetting = () => {
  const [preview,setPreview]=useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NIXc73ZgxZfbifJP3Bsv35sekQyklo-9JA&s")

  useEffect(()=>{
    getUserData()
  },[])

  const [userData,setUserData]=useState({
    userName:"",
    password:"",
    confirmPassword:"",
    proPic:""
  })

  const getUserData=async () => {
    try {
      let token=localStorage.getItem('token')
      let header={
        Authorization:`Bearer ${token}`

      }
      let apiResponse=await getUserDetails(header)
      console.log(apiResponse)
      setUserData(apiResponse.data)
      
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong fetching user Details")
      
    }
    
  }
  const onImageChange=(e)=>{
    //for previewing image
    //create url for display image in the profile tab
    setPreview(URL.createObjectURL(e.target.files[0]))
    setUserData({...userData,proPic:e.target.files[0]})
   
  }
  const onResetClick=()=>{
    setUserData({
    userName:"",
    password:"",
    confirmPassword:"",
    proPic:""
    })
    setPreview('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NIXc73ZgxZfbifJP3Bsv35sekQyklo-9JA&s')
  }



  const onSubmitClick=async () => {
    try {
      if(userData.userName==""|| userData.password==""|| userData.confirmPassword==""||
        userData.proPic==""
      ){
        toast.error("Please fill the form")
      }else{
        //proceed with api calling
        if(userData.password==userData.confirmPassword){
          //proceed...
          let reqBody=new FormData()
          for(let key in userData){
              reqBody.append(key,userData[key])
          }
          let token=localStorage.getItem('token')
          let header={
            Authorization:`Bearer ${token}`,
            'Content-Type':'multipart/form-data'
          }
          let apiResponse=await updateProfile(userData._id,reqBody,header)
          console.log(apiResponse)
          if(apiResponse.status==200){
            toast.success('Successfully Updated Profile')
          }else{
            toast.error(apiResponse.response.data.message )
          }

        }else{
          toast.error("Password and confirm must will be same")
        }

      }
      
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong while updating profile")
      
    }
  }

  return (
    <>
      <AdminHeader />
      <div className="grid grid-cols-[3fr_9fr]">
        <AdminSidebar />
       <div >
        <h1 className="text-center text-2xl mt-5">Settings</h1>
         <div className="grid grid-cols-2 mt-10 gap-4 mx-10">
         
          <div className="text-xl text-center">
          <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quo
            voluptas provident obcaecati harum totam dignissimos, magnam quis
            vitae ad sequi quas? Aperiam minus laboriosam veritatis. Sit ullam
            fuga magnam.</p>

             <p className="mt-3">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quo
            voluptas provident obcaecati harum totam dignissimos, magnam quis
            vitae ad sequi quas? Aperiam minus laboriosam veritatis. Sit ullam
            fuga magnam.</p>
          </div>
          <div className="bg-gray-900 rounded-2xl border">
            <label htmlFor="pic">
              <img className="w-25 ms-50 mt-10 rounded-full" src={preview} alt="" />
              <input onChange={(e)=>onImageChange(e)} className="hidden" type="file" name="pic" id="pic" />

            </label>
           <div className="mt-4 text-center">
             <input value={userData?.userName} onChange={(e)=>setUserData({...userData,userName:e.target.value})} className="bg-white text-black rounded-2xl p-2 w-100" type="text" placeholder="UserName"/>
           </div>
           <div className="mt-4 text-center">
             <input value={userData?.password} onChange={(e)=>setUserData({...userData,password:e.target.value})} className="bg-white text-black rounded-2xl p-2 w-100" type="text" placeholder="Password"/>
           </div>
           <div className="mt-4 text-center">
             <input value={userData?.confirmPassword} onChange={(e)=>setUserData({...userData,confirmPassword:e.target.value})} className="bg-white text-black rounded-2xl p-2 w-100" type="text" placeholder="Confirm Password"/>

           </div>
           <div className="mt-4 text-center">
            <button onClick={onResetClick} className="border w-29 p-1 bg-amber-700 rounded-2xl text-white">Reset</button>
             <button onClick={onSubmitClick} className="border w-29 p-1 bg-green-700 rounded-2xl ms-4 my-8 text-white" >Submit</button>

           </div>

          </div>
        </div>
       </div>
      </div>
    </>
  );
};

export default AdminSetting;
