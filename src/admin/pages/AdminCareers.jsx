import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import { Card } from "flowbite-react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import { toast } from "react-toastify";
import { addJob, deleteJob, getAllJobs } from "../../services/allApi";

const AdminCareers = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showJobs, setShowJobs] = useState(true);
  const [showApplication, setShowApplication] = useState(false);
  const [jobData, setJobData] = useState([]);

  const [jobInputData, setJobInputData] = useState({
    jobId: "",
    jobRole: "",
    jobDesc: "",
    publishedDate: "",
    lastDate: "",
    salary: "",
    experience: "",
  });

  useEffect(() => {
    getJobData();
  }, []);

  const onAddJobClick = async () => {
    try {
      let token = localStorage.getItem("token");
      let header = {
        Authorization: `Bearer ${token}`,
      };
      let apiResponse = await addJob(jobInputData, header);
      if (apiResponse.status == 201) {
        toast.success("Successfully Added");
      } else {
        toast.error(apiResponse.response.data.message);
      }
      setOpenModal(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while adding job");
    }
  };

const onDeleteClick=async (id) => {
  try {
    let token=localStorage.getItem('token')
    let header={
      Authorization:`Bearer ${token}`
    }
    let apiResponse=await deleteJob(id,header)
    if(apiResponse.status==200){
      toast.success("Sucessfully Deleted")
      getJobData()

    }else{
      toast.error(apiResponse.response.data.message)
    }
  } catch (error) {
    console.log(error)
    toast.error("something went wrong while deleting job")
    
  }
  
}



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

  return (
    <>
      <AdminHeader />
      <div className="grid grid-cols-[3fr_9fr]">
        <AdminSidebar />
        <div>
          <h1 className="text-center">Admin Careers</h1>
          <div className="text-center mt-10">
            <button
              onClick={() => {
                setShowJobs(true);
                setShowApplication(false);
              }}
              className="bg-gray-600 border rounded p-1 text-white cursor-pointer"
            >
              View Jobs
            </button>
            <button
              onClick={() => {
                setShowJobs(false);
                setShowApplication(true);
              }}
              className="bg-gray-600 border rounded p-1 text-white cursor-pointer ms-2"
            >
              View Applications
            </button>
          </div>
          <div>
            {showJobs && (
              <div>
                <h1 className="text-center mt-7 text-2xl font-bold">
                  All Jobs
                </h1>
                <button
                  onClick={() => setOpenModal(true)}
                  className="bg-green-700 ms-2 border rounded-2xl p-2 text-white cursor-pointer"
                >
                  Add New Job
                </button>
                  {jobData?.length > 0 ? (
              <div>
                {jobData?.map((eachJob) => (
                  <Card  className="max-w-full bg-amber-400 mx-30 my-10">
                    <button onClick={onDeleteClick} className="bg-black text-amber-400 w-25 cursor-pointer">Delete</button>
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
              </div>
            )}
            {showApplication && <div>Show Application</div>}
          </div>
        </div>{" "}
        <Modal
          className="mx-70 "
          show={openModal}
          onClose={() => setOpenModal(false)}
        >
          <ModalHeader className="bg-gray-400">Add New Job</ModalHeader>
          <ModalBody className="bg-gray-500">
            <div className="space-y-6 flex justify-between">
              <div className="">
                <input
                  onChange={(e) =>
                    setJobInputData({ ...jobInputData, jobId: e.target.value })
                  }
                  type="text"
                  placeholder="Job ID"
                  className="bg-white w-75 rounded-3xl mt-10 p-2"
                  name=""
                  id=""
                />
                <input
                  onChange={(e) =>
                    setJobInputData({
                      ...jobInputData,
                      jobRole: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Job Role"
                  className="bg-white w-75 rounded-3xl mt-10 p-2"
                  name=""
                  id=""
                />
                <input
                  onChange={(e) =>
                    setJobInputData({
                      ...jobInputData,
                      jobDesc: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Job Description"
                  className="bg-white w-75 rounded-3xl mt-10 p-2"
                  name=""
                  id=""
                />
              </div>
              <div className="">
                <input
                  onChange={(e) =>
                    setJobInputData({
                      ...jobInputData,
                      publishedDate: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Published Date"
                  className="bg-white w-75 rounded-3xl mt-10 p-2"
                  name=""
                  id=""
                />
                <input
                  onChange={(e) =>
                    setJobInputData({
                      ...jobInputData,
                      lastDate: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Last Date"
                  className="bg-white w-75 rounded-3xl mt-10 p-2"
                  name=""
                  id=""
                />
                <input
                  onChange={(e) =>
                    setJobInputData({ ...jobInputData, salary: e.target.value })
                  }
                  type="text"
                  placeholder="Salary"
                  className="bg-white w-75 rounded-3xl mt-10 p-2"
                  name=""
                  id=""
                />
                <input
                  onChange={(e) =>
                    setJobInputData({
                      ...jobInputData,
                      experience: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Experience Required"
                  className="bg-white w-75 rounded-3xl mt-10 p-2"
                  name=""
                  id=""
                />
              </div>
            </div>
            
          </ModalBody>
          <ModalFooter className="bg-gray-400">
            <Button
              className="bg-black  me-10 p-2 rounded"
              onClick={() => setOpenModal(false)}
            >
              Close
            </Button>
            <Button
              className="bg-green-700  me-10 p-2 rounded text-white"
              onClick={onAddJobClick}
            >
              Add Job
                
            </Button>
         
          </ModalFooter>
         
        </Modal>
      </div>
    </>
  );
};

export default AdminCareers;
