import * as React from "react";
import { FaCode, FaFire, FaPlus } from "react-icons/fa";
import "./index.css";
import SidebarButton from "./SidebarButton";

const Divider = () => (
  <div className="w-12 h-[2px] rounded-sm bg-gray-500"></div>
);

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarButton
        Icon={FaPlus}
        size={24}
        id={Math.floor(Math.random() * 1e7)}
        tooltip="New snippet"
      />
      <Divider />
      <SidebarButton
        Icon={FaFire}
        size={24}
        id={Math.floor(Math.random() * 1e7)}
        tooltip="Trending"
      />
      <SidebarButton
        Icon={FaCode}
        size={24}
        id={Math.floor(Math.random() * 1e7)}
        tooltip="My snippets"
      />
    </div>
  );
};

export default Sidebar;
