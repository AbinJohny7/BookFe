import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, DropdownItem } from "flowbite-react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  //use navigate use in functions for navigate

  const onLogoutClick = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <img
          className="w-25"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXpuQU_VSCwtvRoBYAotTfMCqJhKtLXTAsg&s"
          alt=""
        />
        <h1 className="text-3xl font-bold">Book Store</h1>
        <div className="flex items-center">
          <span>
            <FontAwesomeIcon icon={faInstagram} />
          </span>
          <span>
            <FontAwesomeIcon icon={faXTwitter} />
          </span>
          <span>
            <FontAwesomeIcon icon={faFacebook} />
          </span>
          {isLoggedIn ? (
            <span>
              {" "}
              <Dropdown
                className="text-black "
                label={
                  <div>
                    <img
                      className="w-10"
                      src="https://media.istockphoto.com/id/2151669184/vector/vector-flat-illustration-in-grayscale-avatar-user-profile-person-icon-gender-neutral.jpg?s=612x612&w=0&k=20&c=UEa7oHoOL30ynvmJzSCIPrwwopJdfqzBs0q69ezQoM8="
                      alt=""
                    />
                  </div>
                }
                dismissOnClick={false}
              >
                <div className="text-black">
                  {" "}
                  <Link to={"/profile"}>Profile</Link>
                </div>
                <div className="cursor-pointer text-black" onClick={onLogoutClick}>
                  {" "}
                  <button>Logout</button>
                </div>
              </Dropdown>
            </span>
          ) : (
            <Link to={"/login"}>
              {" "}
              <button className="border rounded-3xl font-bold  m-2 p-3 hover:bg-black hover:text-white">
                {" "}
                <span>
                  <FontAwesomeIcon icon={faUser} />{" "}
                </span>{" "}
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
      <nav className="p-3 w-full bg-gray-900 text-white flex justify-center items-center">
        <div className="flex justify-between items-center px-3">
          <ul className="flex justify-center">
            <a href="/">
              <li className="mx-4 mt-3 ">Home</li>
            </a>
            <a href="/books">
              <li className="mx-4 mt-3 ">Books</li>
            </a>
            <a href="/carrers">
              <li className="mx-4 mt-3 ">Carrers</li>
            </a>
            <a href="/contact">
              <li className="mx-4 mt-3 ">Contact</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
