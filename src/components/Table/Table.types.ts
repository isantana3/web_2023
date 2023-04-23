import { type FunctionComponent } from "react";

export interface ITableProps {
  header: string[];
  row: string[][];
  title?: string;
  actions?: (any: any) => JSX.Element;
}
