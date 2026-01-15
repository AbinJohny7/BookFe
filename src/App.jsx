import {Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Contact from "./pages/Contact";
import PNF from "./pages/PNF";
import { useState } from "react";
import Loader from "./components/Loader";
import { ToastContainer } from "react-toastify";
import Profile from "./pages/Profile";
import SingleBook from "./pages/SingleBook";
import AdminHome from "./admin/pages/AdminHome";
import AdminBooks from "./admin/pages/AdminBooks";
import AdminCareers from "./admin/pages/AdminCareers";
import AdminSetting from "./admin/pages/AdminSetting";
import Carrers from "./pages/Carrers";
import PaymentSuccess from "./components/PaymentSuccess";
import PaymentFail from "./components/PaymentFail";
import Books from "./pages/Books";



function App() {
  const [showHome, setShowHome] = useState(false);
  setTimeout(() => {
    setShowHome(true);
  }, 2000);

  return (
    <>
      <Routes>
        <Route path="/" element={showHome ? <Home/> : <Loader/>} />
        <Route path="/books" element={<Books/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/carrers" element={<Carrers/>} />
        <Route path="/login" element={<Auth/>} />

        <Route path="/register" element={<Auth insideRegister={true} />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/view/:id/book" element={<SingleBook/>} />
        <Route path="/admin-home" element={<AdminHome/>} />
        <Route path="/admin-books" element={<AdminBooks/>} />
        <Route path="/admin-careers" element={<AdminCareers/>} />
        <Route path="/admin-settings" element={<AdminSetting/>} />
        <Route path="/payment-success" element={<PaymentSuccess/>} />
        <Route path="/payment-failure" element={<PaymentFail/>} />
        <Route path="/*" element={<PNF />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
