import { useState } from "react";

import { Icons } from "global/icons.constants";

import { type IInputProps } from "./Input.types";

import { Container, InputComponent } from "./Input.styles";

export function Input({
  type,
  placeholder,
  defaultValue,
  width,
  disabled = false,
  onChange,
  icon,
}: IInputProps): JSX.Element {
  const Icon = icon ? Icons[icon] : undefined;
  const [value, setValue] = useState<string | number>(defaultValue ?? "");

  return (
    <Container width={width}>
      <InputComponent
        disabled={disabled}
        defaultValue={defaultValue}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          onChange(event.target.value);
        }}
      />
      {Icon && <Icon />}
    </Container>
  );
}
