import React, { useState } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register"
function Auth() {
  const [auth, setAuth] = useState("register");

  return (
    <div className="container flex justify-center gap-2 items-center">
      <div className="flex flex-col font-extrabold gap-4 ">
        <button onClick={() => setAuth("register")}>ثبت نام</button>
        <button onClick={() => setAuth("login")}>ورود</button>
      </div>
      <div className=" linear-gradient w-2/3 h-2/3 rounded-3xl p-2">
      {auth === "login" ? <Login /> : <Register />}
      
      </div>
    </div>
  );
}

export default Auth;
