import React from "react";
import { Outlet } from "react-router";
import AuthFooter from "../common/AuthFooter";
import AuthHeader from "../common/AuthHeader";

function AuthLayout({ children }) {
  return (
    <>
      <div>
        <AuthHeader />
        <main>
          {" "}
          <Outlet />
        </main>

        <AuthFooter />
      </div>
    </>
  );
}

export default AuthLayout;
