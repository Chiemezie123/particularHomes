import React, { FC } from "react";
import { ErrorIndicator, SuccessIndicator } from "@/assets/svgs";

import { Typography } from "../typography";
import { IValidationTextProps } from "./index.types";

const ValidationText: FC<IValidationTextProps> = (props) => {
  const { message, status } = props;

  return (
    <div className="my-[8px] flex items-center justify-start gap-[4px]">
      {status === "success" ? <SuccessIndicator /> : <ErrorIndicator />}
      <Typography
        variant="p-s"
        fontWeight="medium"
        color={status === "success" ? "GLA" : "R400"}
      >
        {message}
      </Typography>
    </div>
  );
};
export { ValidationText };

//The design say the cshade of green for success is G400, but it looks more like G500 in the design so I settled for G500
