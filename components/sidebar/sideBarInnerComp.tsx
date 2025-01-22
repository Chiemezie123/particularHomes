"use client"
import React from "react";
import { SideBarInnerProps } from "./index.types";
import { cn } from "@/utils/helper";
import { Typography } from "../typography";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBarInnerComp(props: SideBarInnerProps) {
  const {icon, title, isActive, path } = props;

const pathName = usePathname();

  return (
        <Link href={path} className="w-full">
        <div
      className={cn(
        `flex items-center gap-3 self-stretch px-2 py-1 pr-4 rounded-lg w-full ${
          pathName === path ? "bg-[var(--Paircular-Variant-2,#008273)]" : ""
        }`
      )}
    >
      <div
        className={cn(
          `flex items-center justify-center w-12 h-12 p-3 ${
            pathName === path ? "bg-[#005C52] rounded-lg" : "rounded-lg bg-[#E5F2F2]"
          }`
        )}
      >
        {icon}
      </div>
      <div className={cn(``)}>
        <Typography font="Inter" fontWeight="medium" color={`${pathName === path ?"white":"sideBarColor"}`} customClassName={cn(` leading-none`)}>{title}</Typography>
      </div>
    </div>
        </Link>
  );
}
