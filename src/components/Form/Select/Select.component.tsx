import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";

import { ErrorMessage } from "../ErrorMessage";

import { type ISelectProps } from "./Select.types";

import { Container, Label } from "./Select.styles";

export function CustomSelect({
  name,
  options,
  label,
  defaultValue,
}: ISelectProps): JSX.Element {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={options[0]}
      render={({ field: { onChange, value }, formState }) => (
        <Container>
          <Label>{label}</Label>
          <Select
            styles={{
              menuPortal: (base) => ({ ...base, fontSize: 14 }),
            }}
            defaultValue={defaultValue}
            menuPosition="fixed"
            menuPortalTarget={document.body}
            options={options}
            value={options.find((c) => c.value === value)}
            onChange={(val) => {
              onChange(val?.value);
            }}
          />
          {errors[name]?.message && (
            <ErrorMessage message={errors[name]?.message?.toString() ?? ""} />
          )}
        </Container>
      )}
    />
  );
}
