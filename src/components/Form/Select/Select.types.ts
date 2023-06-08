export interface IOptions {
  value: string | number;
  label: string | number;
}

export interface ISelectProps {
  options: IOptions[];
  name: string;
  label: string;
  defaultValue?: IOptions;
  placeholder?: string;
}

export type SelectStylesType = {
  error?: boolean;
};
