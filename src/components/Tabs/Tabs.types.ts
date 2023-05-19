export interface ITabsProps {
  headers: string[];
  items: JSX.Element[];
  defaultTab?: number;
}

export type TabsStyleType = {
  $active: boolean;
};
