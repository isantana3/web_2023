import type { Icons } from "global/icons.constants";

export interface ISidebarItemProps {
  label: string;
  isActive?: boolean;
  icon: keyof typeof Icons;
  onClick?: () => void;
}

export type SidebarStylesType = Pick<ISidebarItemProps, "isActive">;
