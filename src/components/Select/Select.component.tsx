import { useState } from "react";

import { Icons } from "global/icons.constants";
import Select, {
  components,
  type MultiValue,
  type SingleValue,
} from "react-select";

import { type IOptions, type ISelectProps } from "./Select.types";

import { Container, Label } from "./Select.styles";

type ValueType = MultiValue<string | number> | SingleValue<string | number>;

export function CustomSelect({
  options,
  label,
  defaultValue,
  onChange,
  icon,
  placeholder,
  isMulti,
  disabled,
}: ISelectProps): JSX.Element {
  const Icon = icon ? Icons[icon] : undefined;
  const [valueLocal, setValue] = useState<ValueType>();

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Select
        isDisabled={disabled}
        noOptionsMessage={() => <>Nenhum item para esses filtros ...</>}
        isMulti={isMulti}
        components={{
          // eslint-disable-next-line react/prop-types
          Control: ({ children, ...rest }) => (
            <components.Control {...rest}>
              {Icon && <Icon />} {children}
            </components.Control>
          ),
        }}
        styles={{
          control: (base) => ({
            ...base,
            padding: "1px",
            borderRadius: "8px",
          }),
          menuPortal: (base) => ({
            ...base,
            fontSize: 14,
          }),
        }}
        placeholder={placeholder}
        isOptionDisabled={() =>
          Array.isArray(valueLocal) && valueLocal.length >= 2
        }
        menuPosition="fixed"
        menuPortalTarget={document.body}
        options={options}
        value={valueLocal}
        defaultValue={defaultValue as unknown as ValueType}
        onChange={(val) => {
          setValue(val);
          onChange(val as unknown as IOptions);
        }}
      />
    </Container>
  );
}
