import { type HTMLInputTypeAttribute } from "react";

export interface IInputProps {
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  label: string;
}
