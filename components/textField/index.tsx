"use client";

import React, { ForwardedRef } from "react";
import { cn } from "@/utils/helper";
import { TextFieldProps } from "./index.types";


const TextField = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, TextFieldProps>(
  (props, ref) => {
    const {
      type = "text",
      inputType = "input",
      error = false,
      errorText = "",
      placeholder,
      icon = null,
      name,
      className,
      label,
      flexStyle = "col",
      customClassName,
      wrapClass,
      ...rest
    } = props;

    const [showPassword, setShowPassword] = React.useState(false);

    const classes = cn(
      className,
      customClassName,
      `block w-full h-[44px] text-sm bg-white text-gray-700 placeholder:text-gray-400 border rounded py-2 px-3 focus:border-blue-500 focus:border-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500`,
      error ? "border-red-400 border-2" : "border-gray-300"
    );

    const renderInput = () => {
      if (!icon) {
        return (
          <div className={`${flexStyle === "row" ? "md:grid md:grid-cols-12 md:items-center" : ""}`}>
            {label && (
              <div className={`${flexStyle === "row" ? "mb-2 md:col-span-3 md:mb-0" : "mb-2"}`}>
                <label htmlFor={name} className="text-sm font-medium text-gray-700 cursor-pointer">
                  {label}
                </label>
              </div>
            )}
            <div className={`${flexStyle === "row" ? "col-span-9" : ""}`}>
              <input
                className={classes}
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                ref={ref as React.Ref<HTMLInputElement>}
                {...rest}
              />
              {errorText && (
                <p className={`mt-1 text-sm ${error ? "text-red-500" : "text-green-500"}`}>
                  {errorText}
                </p>
              )}
            </div>
          </div>
        );
      }

      return (
        <div>
          {label && (
            <div className={`${flexStyle === "row" ? "col-span-3" : "mb-2"}`}>
              <label htmlFor={name} className="text-sm font-medium text-gray-700 cursor-pointer">
                {label}
              </label>
            </div>
          )}
          <div
            className={cn(
              "mb-2 flex w-full items-center justify-normal rounded border px-3 py-2",
              "focus-within:border-2 focus-within:border-blue-500",
              error ? "border-2 border-red-400" : "border-gray-300"
            )}
          >
            <input
              className="grow focus:outline-none"
              type={type}
              id={name}
              name={name}
              placeholder={placeholder}
              ref={ref as React.Ref<HTMLInputElement>}
              {...rest}
            />
            <span className="cursor-pointer">{icon}</span>
          </div>
        </div>
      );
    };

    const renderPasswordInput = () => (
      <div>
        {label && (
          <div className={`${flexStyle === "row" ? "col-span-3" : "mb-2"}`}>
            <label htmlFor={name} className="text-sm font-medium text-gray-700 cursor-pointer">
              {label}
            </label>
          </div>
        )}
        <div
          className={cn(
            "mb-2 flex w-full items-center justify-normal rounded border px-3 py-2",
            "focus-within:border-2 focus-within:border-blue-500",
            error ? "border-2 border-red-400" : "border-gray-300"
          )}
        >
          <input
            className="grow focus:outline-none"
            id={name}
            name={name}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            ref={ref as React.Ref<HTMLInputElement>}
            {...rest}
          />
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    );

    const renderTextArea = () => (
      <div className={`${flexStyle === "row" ? "md:grid md:grid-cols-12 md:items-start" : ""}`}>
        {label && (
          <div className={`${flexStyle === "row" ? "col-span-4" : "mb-2"}`}>
            <label htmlFor={name} className="text-sm font-medium text-gray-700 cursor-pointer">
              {label}
            </label>
          </div>
        )}
        <div className={`${flexStyle === "row" ? "col-span-8" : ""}`}>
          <textarea
            id={name}
            name={name}
            className={classes}
            placeholder={placeholder}
            rows={8}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            {...rest}
          />
          {errorText && (
            <p className={`mt-1 text-sm ${error ? "text-red-500" : "text-green-500"}`}>
              {errorText}
            </p>
          )}
        </div>
      </div>
    );

    return (
      <div className={wrapClass}>
        {inputType === "input" ? (
          type === "password" ? (
            renderPasswordInput()
          ) : (
            renderInput()
          )
        ) : inputType === "textarea" ? (
          renderTextArea()
        ) : inputType === "searchable" ? (
          <input
            className={classes}
            type={type}
            name={name}
            placeholder={placeholder}
            ref={ref as React.Ref<HTMLInputElement>}
            {...rest}
          />
        ) : null}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export { TextField };
