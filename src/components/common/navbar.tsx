"use client";

import React, { use } from "react";
import DropDown from "./dropdown";
import TopBar from "./topbar";

const Navbar: React.FC = () => {
  return (
    <div className="w-[290px] h-full bg-thistle fixed top-0 left-0 ">
      <DropDown />
      <TopBar />
    </div>
  );
};

export default Navbar;
