import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Card } from "flowbite-react";
import { applyJobData, getAllJobs } from "../services/allApi";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import { toast } from "react-toastify";

const Carrers = () => {
  const [jobData, setJobData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [applyJob, setApplyJob] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    jobId: "",
    jobRole: "",
    resume:""
  });

  useEffect(() => {
    getJobData();
  },[]);

  const getJobData = async () => {
    try {
      let apiResponse = await getAllJobs();
      console.log(apiResponse);
      if (apiResponse.status == 200) {
        setJobData(apiResponse.data);
      } else {
        toast.error(apiResponse.response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrrong while getting jobs");
    }
  };

const onApplyClick=async () => {
  try {
    let headers={
     "Content-Type":"multipart/form-data"
    }
    let reqBody=new FormData()
    for (let key in applyJob) {
    reqBody.append(key,applyJob[key])
    }
    let apiResponse=await applyJobData(reqBody,headers)
    if(apiResponse.status==201){
      toast.success("Applied")

    }else{
      toast.error(apiResponse.response.data.message)
    }
    
  } catch (error) {
    console.log(error)
    toast.error("Something went wrong while applying job")
  }
  
}



  return (
    <>
      <Header />
      {jobData?.length > 0 ? (
        <div>
          {jobData?.map((eachJob) => (
            <Card className="max-w-full bg-amber-400 mx-30 my-10">
              <button
                onClick={() => {
                  setApplyJob({
                    ...applyJob,
                    jobId:eachJob.jobId,
                    jobRole:eachJob.jobRole
                  })
                  
                  setOpenModal(true)}}
                className="bg-black text-white w-25"
              > 
                Apply Now
              </button>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                JobID: {eachJob.jobId}
              </h5>
              <p className="font-normal text-white-200 dark:text-white-200">
                JobRole:{eachJob.jobRole}
              </p>
              <p className="font-normal text-white-200 dark:text-white-200">
                JobDesc:{eachJob.jobDesc}
              </p>
              <p className="font-normal text-white-200 dark:text-white-200">
                PublishedDate:{eachJob.publishedDate}
              </p>
            </Card>
          ))}
        </div>
      ) : (
        <h1>No Jobs Added</h1>
      )}
      <Modal
        className="mx-65"
        show={openModal}
        onClose={() => setOpenModal(true)}
      >
        <ModalHeader className="bg-gray-400">Apply Job</ModalHeader>
        <ModalBody className="bg-gray-700">
          <div className="space-y-6  flex items-center gap-6 ">
          <div className="flex  flex-col gap-3 mx-10">
              <input onChange={(e)=>setApplyJob({...applyJob,fullName:e.target.value})}
              value={applyJob.fullName}
              className="bg-white rounded p-2 w-75 "
              type="text"
              placeholder="fullName"
            />
            <input
            onChange={(e)=>setApplyJob({...applyJob,phoneNumber:e.target.value})}
            value={applyJob.phoneNumber}
              className="bg-white rounded p-2 w-75"
              type="number"
              placeholder="phoneNumber"
            />
            <input
            onChange={(e)=>setApplyJob({...applyJob,email:e.target.value})}
            value={applyJob.email}
              className="bg-white rounded p-2 w-75"
              type="email"
              placeholder="Email"
            />

          </div>
           <div>
               <label className="text-white" htmlFor="resume">
              Resume:
              <input className="text-white" onChange={(e)=>setApplyJob({...applyJob,resume:e.target.files[0]})} type="file" name="resume" id="resume" />
            </label>
          </div>
         
          </div>
         
        </ModalBody>
        <ModalFooter className="bg-gray-800 gap-4">
          <Button
            className="bg-amber-700 rounded"
           onClick={onApplyClick}
            
          >
            Apply
          </Button>
          <Button
            className="bg-green-600 rounded"
            onClick={() => setOpenModal(false)}
          >
            close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Carrers;
