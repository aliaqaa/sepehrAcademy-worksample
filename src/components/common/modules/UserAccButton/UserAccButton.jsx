import React from 'react';

function UserAccButton() {
  const isToken = localStorage.getItem('authToken');
  
  return (
    isToken ? (
      <button className="bg-primaryCyan p-2 text-white rounded-3xl hoverscale">حساب کاربری</button>
    ) : (
      <button className="bg-primaryCyan p-2 text-white rounded-3xl hoverscale">پنل کاربری</button>
    )
  );
}

export default UserAccButton;