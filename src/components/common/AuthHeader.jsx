import React from "react";
import { Link } from "react-router";
import UserAccButton from "./modules/UserAccButton/UserAccButton";
import logo from "/public/images/icons/logo (1).png";

function AuthHeader() {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="container m-auto flex justify-between p-5 items-center">
        <Link to="/" className="hoverscale">
          <img src={logo} alt="logo" />
        </Link>

        <div className="md:hidden cursor-pointer " onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>

        <Link to="/auth" className="hidden md:block">
          <UserAccButton />
        </Link>
      </div>
    </>
  );
}

export default AuthHeader;
