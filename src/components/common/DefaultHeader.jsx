import React, { useState } from "react";
import logo from "/public/images/icons/logo (1).png";
import UserAccButton from "./modules/UserAccButton/UserAccButton";
import defaultNavbarItems from "../../mock/defaultNavbarItems";
import { Link, NavLink } from "react-router";

function DefaultHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        <div className="hidden md:flex justify-around items-center font-extrabold">
          {defaultNavbarItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.href}
              className="nav-link mx-3 text-black hoverscale"
            >
              {item.title}
            </NavLink>
          ))}
        </div>

        <Link to="/auth" className="hidden md:block">
          <UserAccButton />
        </Link>

        {isMenuOpen && (
          <div className="md:hidden  m-auto absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
            <div className="flex flex-col items-center font-extrabold p-5">
              {defaultNavbarItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.href}
                  className="nav-link my-2 text-black hoverscale"
                  onClick={toggleMenu}
                >
                  {item.title}
                </NavLink>
              ))}
              <Link to="/auth" className="my-2" onClick={toggleMenu}>
                <UserAccButton />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DefaultHeader;