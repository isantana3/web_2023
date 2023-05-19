import { type HTMLInputTypeAttribute } from "react";

export interface IInputProps {
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  label: string;
  defaultValue?: string;
  width?: number;
  disabled?: boolean;
}

export type InputStylesType = Pick<IInputProps, "width">;
