"use client";

import React from "react";
import { Typography } from "../typography";
import { sidebarModuleMenus } from "@/constants/data";
import SideBarInnerComp from "./sideBarInnerComp";
export default function SideBar() {
  return (
    <div className="flex flex-col items-start gap-8 w-[280px] p-4 border-r border-[#D3DBDA] bg-[#FBFFFF] h-screen">
      <div className="px-2">
        <Typography color="green2"  customClassName=" font-sf-pro text-[28px] font-semibold leading-none tracking-[-0.56px]">Paircular Holmes</Typography>
      </div>
      <div className="flex flex-col items-center gap-3 self-stretch px-2 py-2.5 pl-2 w-full">
        {sidebarModuleMenus.map((el, index) => (
          <SideBarInnerComp {...el} key={index} />
        ))}
      </div>
    </div>
  );
}
