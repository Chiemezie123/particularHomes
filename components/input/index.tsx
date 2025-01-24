import React from "react";

import {cn} from "@/utils/helper";
import {
  FieldValues,
  UseFormRegisterReturn,
  InternalFieldName,
} from "react-hook-form";

import { InputProps } from "./index.types";


const InputComponent = <FV extends FieldValues>(
  props: InputProps<FV>,

) => {
  const {
    placeholder,
    errorMsg,
    successMsg,
    label,
    name,
    icon1,
    icon2,
    customClassName,
    labelCustomClassName,
    isSearchIcon,
    hideErrorMsg,
    bgcolor,
    validationPattern,
    message,
    maindiv,
    required,
    register,
    passwordWay,
    passwordFunc,
    inputHandler,
    inputValue,
    onBlur,
    ...rest
  } = props;



  const validation = {
    required: required || false,
    pattern: validationPattern ? { value: validationPattern as RegExp, message: message || 'Invalid input' } : undefined,
  };

 const registerInput = register ? register(name, validation) : undefined;
    const inputType = passwordWay ? "password" : "text";
  return (
    <div className={cn(`relative w-full z-0 flex flex-col `, maindiv)}>
      {label && (
        <label
          className={cn(
            "mb-2 w-fit first-letter:capitalize text-[0.875rem]",
            errorMsg ? "text-error" : "",
            labelCustomClassName
          )}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div
        className={cn(
          `relative w-full rounded-md border focus-within:border-[#008273] focus-within:border-[2px]`,
          label ? "px-2 " : "",
          customClassName,
          bgcolor 
        )}
      >
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 ">
          {icon1 && <div className="fill-current text-Accent-600">{icon1}</div>}
        </div>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" >
          {icon2 && <div className="" onClick={passwordFunc}>{icon2}</div>}
        </div>
        <input
          className={cn(
            `peer block w-full appearance-none rounded-md px-4 py-3 text-body-r font-medium placeholder:font-medium placeholder:text-body-r autofill:none focus:outline-none `,
            bgcolor,
            rest.disabled
              ? "disabled:cursor-not-allowed disabled:bg-primary-light-100 disabled:font-semibold  disabled:text-gray-3"
              : "",
           
          )}
          id={name}
          placeholder={placeholder}
          type={inputType}
          {...registerInput}
        />
      </div>
    </div>
  );
};

export type InputComponentType = <
  FV extends FieldValues,
  TFieldName extends InternalFieldName
>(
  props: InputProps<FV> & {
    ref?:
      | React.ForwardedRef<HTMLInputElement>
      | UseFormRegisterReturn<TFieldName>;
  }
) => ReturnType<typeof InputComponent>;

const Input = React.forwardRef(InputComponent) as InputComponentType;

export { Input };
export * from "./index.types";
