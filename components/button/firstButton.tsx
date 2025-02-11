import * as React from "react";
import { cn } from "@/utils/helper";
import { cva, type VariantProps } from "class-variance-authority";

import { Spinner } from "../spinner";
import { Typography } from "../typography";
import { TypographyColors } from "../typography/index.types";
 const buttonVariants = cva(
  "rounded transition-all ease-in-out duration-400 rounded-[5px]",
  {
    variants: {
      variant: {
        primary:
          " bg-lightGreenish hover:bg-chateau-green-200 focus:bg-chateau-green-500 text-c-m disabled:bg-fuscous-gray-400 disabled:text-black  disabled:cursor-not-allowed", // blue
        secondary:
          "bg-GB text-N0 hover:bg-GNH disabled:opacity-50 hover:disabled:bg-GLA disabled:cursor-not-allowed", // extra light
      },
      size: {
        default: " py-[8] px-[15px]",
        primary: "py-[7px] px-[48px]",
        secondary: "py-[14px] px-[14px]",
        tetiary:  "py-[16px] px-[32px]"
      },
      types: {
        outline: "",
        filled: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      types: "filled",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  Icon?: React.ReactNode;
  color?:TypographyColors;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      types = "filled",
      size,
      children,
      Icon,
      color="white",
      loading = false,
      ...props
    },
    ref,
  ) => {
    const Comp = "button";
    return (
      <Comp
        className={cn(
            buttonVariants({ variant, size, types, className }),
          "flex items-center justify-center gap-[10px]",
        )}
        ref={ref}
        {...props}
      >
        {!loading && (
           Icon
        )}
        {!loading && (
          <Typography variant={"div"} color={color} className="">
            {" "}
            <div>{children}</div>
          </Typography>
        )}
        
        {loading && <Spinner color={variant === "primary" ? "" : ""} />}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
