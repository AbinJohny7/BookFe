import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { updateProfile } from "../services/allApi";
const EditProfile = ({ userDetails }) => {
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
    bio: "",
    proPic: "",
  });
  useEffect(() => {
    setEditData(userDetails);
  }, [userDetails]);

  const [preview, setPreview] = useState(
    "https://img.freepik.com/premium-vector/profile-picture-placeholder-avatar-silhouette-gray-tones-icon-colored-shapes-gradient_1076610-40164.jpg"
  );
  const onImageChange = (e) => {
    //image is stored in e.target.files as an array and in its 0 the index we can acess file
    console.log(e.target.files[0]);
    //in this method js will store the file in a stroage mechansism and return the path to the file
    let url = URL.createObjectURL(e.target.files[0]);
    setEditData({ ...editData, proPic: e.target.files[0] });
    console.log(url);
    setPreview(url);
  };
  const onEditClick = async () => {
    try {
      if (
        editData.userName == "" ||
        editData.bio == "" ||
        editData.password == "" ||
        editData.proPic == "" ||
        editData.confirmPassword == ""
      ) {
        toast.error("Please fill the form");
      } else {
        if (editData.confirmPassword == editData.password) {
          //proceed with apicall
          let token = localStorage.getItem("token");
          let header = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          };
          let reqBody=new FormData()
          //editData is a object
          for (let key in editData) {
          reqBody.append(key,editData[key])
            
          }
          let apiResponse=await updateProfile(editData._id,reqBody,header)
          if(apiResponse.status==200){
            toast.success(apiResponse.data.message)
          }else{
            toast.error(apiResponse.response.data.message)
          }
          
        } else {
          toast.error("Password and Confirm Password should be same");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while updating");
    }
  };

  return (
    <div>
      <div
        className="flex justify-end
       "
      >
        <button
          onClick={() => setOpenModal(true)}
          className="text-blue-600 border border-blue-600 rounded p-3 hover:bg-blue-600 hover:text-white "
        >
          Edit
        </button>
      </div>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader className="mx-60 bg-gray-600">
          Terms of Service
        </ModalHeader>
        <ModalBody className="mx-60 bg-gray-600  ">
          <div className=" space-y-6 flex flex-col items-center ">
            <label htmlFor="inp">
              <input
                onChange={(e) => onImageChange(e)}
                className="hidden "
                type="file"
                name=""
                id="inp"
              />
              <img className="w-25 mx-20 rounded-4xl" src={preview} alt="" />
            </label>
            <input
              onChange={(e) =>
                setEditData({ ...editData, userName: e.target.value })
              }
              className="bg-white rounded w-75 p-2"
              type="name"
              placeholder="Username"
            />
            <input
              onChange={(e) =>
                setEditData({ ...editData, password: e.target.value })
              }
              className="bg-white rounded w-75 p-2"
              type="password"
              placeholder="password"
            />
            <input
              onChange={(e) =>
                setEditData({ ...editData, confirmPassword: e.target.value })
              }
              className="bg-white rounded w-75 p-2"
              type="password"
              placeholder="confirmpassword"
            />
            <input
              onChange={(e) =>
                setEditData({ ...editData, bio: e.target.value })
              }
              className="bg-white rounded w-75 p-2"
              type="text"
              placeholder="Bio"
            />
          </div>
        </ModalBody>
        <ModalFooter className="bg-gray-600 mx-60">
          <Button className="bg-green-500  p-2 me-5" onClick={onEditClick}>Edit</Button>
          <Button className="bg-black p-2" onClick={() => setOpenModal(false)}>
            close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditProfile;
