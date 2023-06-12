import { type HTMLInputTypeAttribute } from "react";

export interface IInputProps {
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  label: string;
  defaultValue?: string | number;
  width?: number;
  disabled?: boolean;
  onChange?: (event: KeyboardEvent) => void;
}

export type InputStylesType = Pick<IInputProps, "width"> & {
  error?: boolean;
};
