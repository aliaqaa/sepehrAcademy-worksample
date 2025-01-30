import React from 'react';
import Cookies from "js-cookie";
import { FaUser } from 'react-icons/fa';
function UserAccButton() {
  const isJwt = Cookies.get('jwt');

  return (
    isJwt ? (
      <button className="bg-primaryCyan p-4 text-white rounded-3xl hoverscale" ><FaUser/></button>
    ) : (
      <button className="bg-primaryCyan p-2 text-white rounded-3xl hoverscale">حساب کاربری</button>
    )
  );
}

export default UserAccButton;