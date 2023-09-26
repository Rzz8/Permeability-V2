import React from "react";
import { useDashboardContext } from "../pages/DashboardLayout";
import Wrapper from "../assets/wrappers/LogoutContainer";

const LogoutContainer = () => {
  const { logoutUser } = useDashboardContext();

  return (
    <Wrapper>
      <div></div>
      <div className="showLogout">
        <button type="button" className="btn" onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};

export default LogoutContainer;
