import { type Theme } from "styles/Themes";

export interface IButtonProps {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback?: (e?: any) => any;
  icon?: JSX.Element;
  color?: keyof typeof Theme.Components.button;
  type?: "button" | "submit" | "reset";
  center?: boolean;
  disabled?: boolean;
  iconStroke?: boolean;
  iconPosition?: "right" | "left";
  border?: keyof typeof Theme.Components.button;
}

export type IButtonStylesType = Pick<
  IButtonProps,
  "color" | "center" | "disabled" | "iconStroke"
>;
