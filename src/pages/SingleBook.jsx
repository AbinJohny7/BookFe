import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { getsinglebook } from "../services/allApi";

import { baseURL } from "../services/baseURL";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";

const SingleBook = () => {
  let { id } = useParams();
  console.log(id);
  const [bookData, setBookData] = useState({});
   const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let token = localStorage.getItem("token");
      let header = {
        Authorization: `Bearer ${token}`,
      };
      let apiResponse = await getsinglebook(id,header);
      if (apiResponse.status == 200) {
        console.log(apiResponse.data);
        setBookData(apiResponse.data.singleBook);
      }
    } catch (error) {
      console.log("Error ocuured while acessing single Book");
    }
  };

  return (
    <>
      <Header />
      <div className="mx-30 border p-6 mt-10 flex justify-around">
        <div>
          <img style={{'height':'450px','width':'300px'}} src={bookData?.imgURL} alt="Image" />
        </div>
        <div>
          <h1 className="text-center text-3xl font-bold">{bookData?.title}</h1>
          <div className="flex gap-3 mt-3 ">
            <h3>
              <span className="font-bold">Author:</span>
              {bookData.author}
            </h3>
            <h3>
              <span className="font-bold">Publisher:</span>
              {bookData.publisher}
            </h3>
          </div>
          <div className="flex gap-3 mt-3">
            <h3>
              <span className="font-bold">Price:</span>
              {bookData.price}
            </h3>
            <h3>
              <span className="font-bold">DiscountPrice:</span>
              {bookData.discountPrice}
            </h3>
          </div>
          <div className="flex gap-3 mt-3">
            <h3>
              <span className="font-bold">No of Pages:</span>
              {bookData.noOfPages}
            </h3>
            <h3>
              <span className="font-bold">ISBN:</span>
              {bookData.ISBN}
            </h3>
          </div>
          <div className="flex gap-3 mt-3">
            <h3>
              <span className="font-bold">Languages:</span>
              {bookData.language}
            </h3>
            <h3>
              <span className="font-bold">Category:</span>
              {bookData.category}
            </h3>
          </div>
        </div>
        <div>
          <button onClick={()=>setOpenModal(true)} className="bg-green-500 text-black rounded border p-3">
            {" "}
            More Images
          </button>
          <p className="mt-7">
            <span className="font-bold ">Abstract:</span>
            {bookData.abstract}
          </p>
          <div className="mt-10 flex gap-5">
            <Link className="bg-blue-500 text-white p-3" to={'/books'}>Go Back</Link>
            <button className="bg-green-700 text-white p-3">Buy Now</button>
          </div>
        </div>
        <Modal className="mx-60 " show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader className="bg-gray-600">Terms of Service</ModalHeader>
        <ModalBody className="bg-gray-600">
          <div className="space-y-6 flex justify-evenly">
            {
              bookData?.uploadedImages?.map((eachImages)=>(
                <img src={`${baseURL}/uploads/${eachImages}`} alt=""></img>
              ))
            }
          </div>
        </ModalBody>
        <ModalFooter className="bg-gray-600">
          
          <Button className="text-xl bg-gray-800 p-2 rounded border" onClick={() => setOpenModal(false)}>
            close
          </Button>
        </ModalFooter>
      </Modal>
      </div>
    </>
  );
};

export default SingleBook;
