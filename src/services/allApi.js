import axiosConfig from "./axiosConfig"
import { baseURL } from "./baseURL"

export const registerUser= async (reqBody) => {
    return await axiosConfig("post",baseURL + "/registerUser",reqBody)
}
export const loginUser=async (reqBody) => {
    return await axiosConfig("post",baseURL+"/loginUser",reqBody)
}
export const googleLoginAPI=async (reqBody) => {
    return await axiosConfig("post",baseURL+'/googleLogin',reqBody)
}
export const addBook=async (reqBody,reqHeader) => {
    return axiosConfig("post",baseURL+"/addBook",reqBody,reqHeader)
}
export const getLimitedBooks=async () => {
    return await axiosConfig("get",baseURL+"/limitedBooks","")
}
export const getAllBooks=async (reqHeader,searchKey) => {
    return await axiosConfig("get",`${baseURL}/getAllBooks/?search=${searchKey}`,"",reqHeader)
}
export const getsinglebook=async (id,reqHeader) => {
    return await axiosConfig("get",`${baseURL}/getSingleBook/${id}`,"",reqHeader)
}