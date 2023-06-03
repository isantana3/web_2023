import { type Theme } from "styles/Themes";

export interface IButtonProps {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback?: (param?: any) => any;
  icon?: JSX.Element;
  color?: keyof typeof Theme.Components.button;
  type?: "button" | "submit" | "reset";
  center?: boolean;
}

export type IButtonStylesType = Pick<IButtonProps, "color" | "center">;
