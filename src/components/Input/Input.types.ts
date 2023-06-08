import { type HTMLInputTypeAttribute } from "react";

import { type Icons } from "global/icons.constants";

export interface IInputProps {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  defaultValue?: string | number;
  width?: number;
  disabled?: boolean;
  icon?: keyof typeof Icons;
  onChange: (value: string) => void;
}

export type InputStylesType = Pick<IInputProps, "width">;
