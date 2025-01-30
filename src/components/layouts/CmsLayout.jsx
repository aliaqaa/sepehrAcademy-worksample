import React from "react";
import { Outlet } from "react-router";
import AuthHeader from "../common/AuthHeader";

function CmsLayout() {
  return (
    <>
      <div>
        <AuthHeader />
        <main>
          {" "}
          <Outlet />
        </main>

        
      </div>
    </>
  );
}

export default CmsLayout;
