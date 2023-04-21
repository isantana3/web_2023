import { type Dispatch, type SetStateAction } from "react";

export interface ISidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
}

export type ISidebarStylesType = Pick<ISidebarProps, "isCollapsed">;
