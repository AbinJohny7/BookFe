import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import { addBook } from "../services/allApi";
const Profile = () => {
  const [sellBookFlag, setSellBookFlag] = useState(true);
  const [bookStatusFlag, setBookStatusFlag] = useState(false);
  const [purchaseHistory, setpurchaseHistory] = useState(false);
  const [preview, setPreview] = useState(
    "https://repository-images.githubusercontent.com/327048300/32932e00-5a97-11eb-9948-15fed461c725"
  );
  const [previewArray, setPreviewArray] = useState([]);

  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    noOfPages: 0,
    imgURL: "",
    price: 0,
    discountPrice: 0,
    abstract: "",
    publisher: "",
    language: "",
    ISBN: "",
    category: "",
    uploadedImages: [],
  });

  const onImageClick = (e) => {
    console.log(e.target.files[0]);

    setBookData({
      ...bookData,
      uploadedImages: [...bookData.uploadedImages, e.target.files[0]],
    });

    let imgURL = URL.createObjectURL(e.target.files[0]);
    console.log(imgURL);
    setPreview(imgURL);
    setPreviewArray([...previewArray, imgURL]);
  };
  const onAddClick = async () => {
    try {
      let token = localStorage.getItem("token");
      let headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };

      let reqBody = new FormData();
      for (let key in bookData) {
        if (key != "uploadedImages") {
          reqBody.append(key,bookData[key]);
        } else {
          bookData.uploadedImages.forEach((eachFiles) => {
            reqBody.append("uploadedImages", eachFiles);
          });
        }
      }
      let apiResponse= await addBook(reqBody,headers)
    
      console.log(apiResponse)

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
   

  };

  return (
    <>
      <Header />
   
      <div className="bg-gray-900 mt-0.5" style={{ height: "200px" }}></div>
      <div
        className="bg-white p-3  "
        style={{
          width: "230px",
          height: "230px",
          borderRadius: "50%",
          marginLeft: "70px",
          marginTop: "-130px",
        }}
      >
        <img src="./149071.png" alt="" />
      </div>
      <div className="flex justify-between px-20 mt-5">
        <p className="flex justify-center items-center">
          <span className="text-3xl ">Abin</span>
        </p>
        <div className="flex justify-end">
          <button className="text-blue-600 border border-blue-600 rounded p-3 hover:bg-blue-600 hover:text-white ">
            Edit
          </button>
        </div>
      </div>
      <p className="md:px-20 px-5 my-5 text-justify">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
        dignissimos nam voluptas, architecto totam voluptatem qui consequatur
        explicabo asperiores illum dolorem non sequi ipsam vero! Dolore cum
        aliquid amet recusandae? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Esse culpa ratione a voluptates natus magni eius
        consequuntur velit sint commodi ipsum fuga nulla, dignissimos officiis
        aut cum quos dolore alias.
      </p>
      <div className="flex justify-center">
        <button
          onClick={() => {
            setSellBookFlag(true);
            setBookStatusFlag(false);
            setpurchaseHistory(false);
          }}
          className="border p-2 m-1 rounded-2xl cursor-pointer hover:bg-blue-600 hover:text-white"
        >
          SellBook
        </button>
        <button
          onClick={() => {
            setSellBookFlag(false);
            setBookStatusFlag(true);
            setpurchaseHistory(false);
          }}
          className="border p-2 m-1 rounded-2xl cursor-pointer  hover:bg-blue-600 hover:text-white"
        >
          BookStatus
        </button>
        <button
          onClick={() => {
            setSellBookFlag(false);
            setBookStatusFlag(false);
            setpurchaseHistory(true);
          }}
          className="border p-2 m-1 rounded-2xl cursor-pointer  hover:bg-blue-600 hover:text-white"
        >
          Purchase History
        </button>
      </div>
      <div>
        {sellBookFlag && (
          <div className="mx-25 bg-gray-300">
            <h1 className=" text-center text-3xl">Book Details</h1>
            <div className="md:grid grid-cols-2 mt-10 w-full">
              <div className="px-3">
                <div className="mb-3">
                  <input
                    onChange={(e) =>
                      setBookData({ ...bookData, title: e.target.value })
                    }
                    className="p-2 bg-white rounded placeholder-gray-300 w-full"
                    type="text"
                    placeholder="Title"
                  />
                </div>
                <div className="mb-3">
                  <input
                    onChange={(e) =>
                      setBookData({ ...bookData, author: e.target.value })
                    }
                    className="p-2 bg-white rounded placeholder-gray-300 w-full"
                    type="text"
                    placeholder="Author"
                  />
                </div>
                <div className="mb-3">
                  <input
                    onChange={(e) =>
                      setBookData({ ...bookData, noOfPages: e.target.value })
                    }
                    className="p-2 bg-white rounded placeholder-gray-300 w-full"
                    type="text"
                    placeholder="No of Pages"
                  />
                </div>
                <div className="mb-3">
                  <input
                    onChange={(e) =>
                      setBookData({ ...bookData, imgURL: e.target.value })
                    }
                    className="p-2 bg-white rounded placeholder-gray-300 w-full"
                    type="text"
                    placeholder="Image Url"
                  />
                </div>
                <div className="mb-3">
                  <input
                    onChange={(e) =>
                      setBookData({ ...bookData, price: e.target.value })
                    }
                    className="p-2 bg-white rounded placeholder-gray-300 w-full"
                    type="text"
                    placeholder="Price"
                  />
                </div>
                <div className="mb-3">
                  <input
                    onChange={(e) =>
                      setBookData({
                        ...bookData,
                        discountPrice: e.target.value,
                      })
                    }
                    className="p-2 bg-white rounded placeholder-gray-300 w-full"
                    type="text"
                    placeholder="discount Price"
                  />
                </div>
                <div className="mb-3">
                  <input
                    onChange={(e) =>
                      setBookData({ ...bookData, abstract: e.target.value })
                    }
                    className="p-2 bg-white rounded placeholder-gray-300 w-full"
                    type="text"
                    placeholder="Abstract"
                  />
                </div>
              </div>
              <div className="px-3">
                <div className="mb-3">
                  <input
                    onChange={(e) =>
                      setBookData({ ...bookData, publisher: e.target.value })
                    }
                    className="p-2 bg-white rounded placeholder-gray-300 w-full"
                    type="text"
                    placeholder="Publisher"
                  />
                </div>
                <div className="mb-3">
                  <input
                    onChange={(e) =>
                      setBookData({ ...bookData, language: e.target.value })
                    }
                    className="p-2 bg-white rounded placeholder-gray-300 w-full"
                    type="text"
                    placeholder="language"
                  />
                </div>
                <div className="mb-3">
                  <input
                    onChange={(e) =>
                      setBookData({ ...bookData, ISBN: e.target.value })
                    }
                    className="p-2 bg-white rounded placeholder-gray-300 w-full"
                    type="text"
                    placeholder="ISBN"
                  />
                </div>
                <div className="mb-3">
                  <input
                    onChange={(e) =>
                      setBookData({ ...bookData, category: e.target.value })
                    }
                    className="p-2 bg-white rounded placeholder-gray-300 w-full"
                    type="text"
                    placeholder="Category"
                  />
                </div>
                <label htmlFor="imgUpload">
                  <input
                    onChange={(e) => onImageClick(e)}
                    className="hidden"
                    type="file"
                    name=""
                    id="imgUpload"
                  />
                  <img className="w-75 " src={preview} alt="" />
                </label>
                {previewArray.length > 0 && (
                  <div className="flex gap-5">
                    {previewArray.map((eachPreview) => (
                      <img className="w-25" src={eachPreview} alt="" />
                    ))}
                    {previewArray.length < 3 && (
                      <label htmlFor="plus">
                        <input
                          onChange={(e) => onImageClick(e)}
                          className="hidden"
                          type="file"
                          name=""
                          id="plus"
                        />
                        <img
                          className="w-15"
                          src="https://cdn-icons-png.flaticon.com/512/11527/11527831.png"
                          alt=""
                        />
                      </label>
                    )}
                  </div>
                
                )}
                <button className="border rounded-2xl p-3 hover:bg-green-500 hover:text-black ms-45" onClick={onAddClick}>Submit</button>
              </div>
            </div>
          </div>
        )}
        {bookStatusFlag && <div></div>}
        {purchaseHistory && <div></div>}
      </div>

      <Footer />
    </>
  );
};

export default Profile;
