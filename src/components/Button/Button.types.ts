export interface IButtonProps {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: (param?: any) => any;
  icon: JSX.Element;
}
