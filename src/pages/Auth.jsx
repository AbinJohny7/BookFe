import { faUser } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
//returns a function that lets you navigate programmatically in the browser in
// response to user interactions or effect

import { Link, useNavigate } from "react-router-dom";
import { googleLoginAPI, loginUser, registerUser } from "../services/allApi";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Auth = ({ insideRegister }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
    email: "",
  });
  const onRegisterClick = async () => {
    try {
      if (
        userData.userName == "" ||
        userData.password == "" ||
        userData.email == ""
      ) { 
        toast.error("Please fill the form");
      } else {
        let apiResponse = await registerUser(userData);
        if (apiResponse.status == 201) {
          toast.success("Sucessfully Registered");
          navigate("/login");
        } else {
          toast.error(apiResponse.response.data.message);
        }
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const onLoginClick = async () => {
    try {
      let reqBody = {
        email: userData.email,
        password: userData.password,
      };
      let apiResponse = await loginUser(reqBody);
      console.log(apiResponse);
      if (apiResponse.status == 200) {
        toast.success("Login Sucessfully");
        localStorage.setItem("token", apiResponse.data.token);
        if(apiResponse.data.existingUser.userType=="admin"){
          navigate("/admin-home")
        }else{
             navigate("/");
        }

     
      } else {
        toast.error(apiResponse.response.data.message);
      }
    } catch (error) {
      toast.error("Something wemt Wrong");
      console.log(error);
    }
  };
  //for decoding

  const  decodeFn= async(credentials)=>{
    console.log(credentials)
    let decodedData=jwtDecode(credentials.credential)
    console.log(decodedData)
    let payload={
      userName:decodedData.name,
      email:decodedData.email,
      proPic:decodedData.picture
    }
    let apiResponse=await googleLoginAPI(payload)
    console.log(apiResponse)
   if (apiResponse.status==200 || apiResponse.status==201){
      toast.success(apiResponse.data.message)
      localStorage.setItem('token',apiResponse.data.token)
      navigate('/')
    }else{
      toast.error(apiResponse.response.data.message)
    }
  }

  return (
    <div id="login">
      <div className="flex justify-center items-center flex-col p-5">
        <h1 className="text-3xl mb-5 font-bold mt-5">BOOK STORE</h1>
        <form className="w-120 bg-gray-900 p-10 flex justify-center items-center flex-col">
          <div
            className="border border-white flex justify-center items-center"
            style={{ width: "70px", height: "70px", "border-radius": "50%" }}
          >
            <FontAwesomeIcon icon={faUser} className="text-white fa-2x" />
          </div>
          <h1 className="text-white mt-5 text-3xl mb-8">
            {insideRegister ? "Register" : "Login"}
          </h1>
          <div className="mb-5 w-full">
            {insideRegister && (
              <input
                onChange={(e) =>
                  setUserData({ ...userData, userName: e.target.value })
                }
                placeholder="UserName"
                className="p-2 rounded placeholder-gray-600 bg-white w-full"
                type="text"
              />
            )}
          </div>
          <div className="mb-5 w-full">
            <input
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              placeholder="Email Id"
              className="p-2 rounded placeholder-gray-600 bg-white w-full"
              type="text"
            />
          </div>
          <div className="mb-2 w-full">
            <input
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              placeholder="Password"
              className="p-2 rounded placeholder-gray-600 bg-white w-full"
              type="password"
            />
          </div>
          <div className="mb-5 w-full flex justify-between">
            <p className="text-amber-300 text-xs">
              *Never share your password with others{" "}
            </p>
            <p className="text-white underline text-2xs">Forget Password</p>
          </div>
          <div className="mb-2 w-full">
            {insideRegister ? (
              <button
                onClick={onRegisterClick}
                type="button"
                className="bg-green-800 text-white w-full p-3 rounded"
              >
                Register
              </button>
            ) : (
              <button
                onClick={onLoginClick}
                type="button"
                className="bg-green-800 text-white w-full p-3 rounded"
              >
                Login
              </button>
            )}
          </div>
          <p class="text-white">------------------ or ---------------</p>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              decodeFn(credentialResponse)
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          ;
          <div className="mb-5 mt-3w-full">
               <p className="text-white text-center">
            "Are you a New user ?"
            <button>
              {" "}
              <Link to={"/register"}>Register</Link>{" "}
            </button>
          </p>
            </div>
         
        </form>
      </div>
    </div>
  );
};

export default Auth;
