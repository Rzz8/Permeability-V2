import React from "react";
import NavLinks from "./NavLinks";
import Wrapper from "../assets/wrappers/Sidebar";

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <div className="content">
          <header></header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
