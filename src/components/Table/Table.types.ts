/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ITableProps {
  header: string[];
  row: any[];
  title?: string;
  keys: any[];
  actions?: (any: any) => JSX.Element;
}
