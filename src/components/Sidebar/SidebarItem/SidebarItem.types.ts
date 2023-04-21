import type { Icons } from "global/icons.constants";

export interface ISidebarItemProps {
  label: string;
  active?: boolean;
  icon: keyof typeof Icons;
}

export type SidebarStylesType = Pick<ISidebarItemProps, "active">;
