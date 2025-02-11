import React, { forwardRef } from "react";
import { Plus } from "@/assets/svg";
import { ButtonProps } from "../button/index.types";

const ActionButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <button
        ref={ref}
        className="flex w-12 h-12 p-3 justify-center items-center rounded-[100px] bg-[#008273]"
        {...props}
      >
        <Plus />
      </button>
    );
  }
);

export default ActionButton;
