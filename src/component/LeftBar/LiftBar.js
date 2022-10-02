import React from "react";
import { AsideLeftBar, BottomAsideBar } from "../Molekul";

const LeftBar = () => {
  return (
    <aside className="w-full h-[100%] overflow-y-scroll" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
        <AsideLeftBar/>
        <BottomAsideBar/>
      </div>
    </aside>
  );
};

export default LeftBar;
