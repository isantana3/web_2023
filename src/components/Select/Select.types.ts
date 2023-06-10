import { type Icons } from "global/icons.constants";
import { type OptionsOrGroups } from "react-select";

export interface IOptions {
  value: string | number;
  label: string | number;
}

export interface ISelectProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: OptionsOrGroups<string | number, any> | undefined[];
  label?: string;
  defaultValue?: IOptions;
  onChange: (data: IOptions) => void;
  icon?: keyof typeof Icons;
  placeholder?: string;
  isMulti?: boolean;
}
