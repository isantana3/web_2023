export interface IOptions {
  value: string | number;
  label: string | number;
}

export interface ISelectProps {
  options: IOptions[];
  name: string;
  label: string;
  defaultValue?: IOptions;
  width?: number;
  placeholder?: string;
  disabled?: boolean;
  onClick?: (value: string | number | undefined) => void;
}

export type SelectStylesType = {
  error?: boolean;
  width?: number;
};
