import React, { LegacyRef } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  id?: string;
  label?: React.ReactNode | string;
  inputType?: "input" | "textarea" | "searchable";
  icon?: React.ReactNode;
  error?: boolean;
  errorText?: string;
  wrapClass?: string;
  customClassName?: string;
  flexStyle?: "col" | "row";
}
