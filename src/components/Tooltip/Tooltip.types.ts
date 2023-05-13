export type TooltipPositionType = "top" | "bottom" | "left" | "right";

export interface ITooltipProps {
  label: string;
  children: JSX.Element;
  position: TooltipPositionType;
}

export type TooltipStylesType = Pick<ITooltipProps, "position"> & {
  width: number;
  height: number;
};
