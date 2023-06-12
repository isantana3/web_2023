import { useFormContext } from "react-hook-form";

import { ErrorMessage } from "../ErrorMessage";

import { type IInputProps } from "./Input.types";

import { Container, InputComponent, Label } from "./Input.styles";

export function Input({
  name,
  type,
  placeholder,
  label,
  defaultValue,
  width,
  disabled = false,
  onChange,
}: IInputProps): JSX.Element {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Container error={!!errors[name]?.message} width={width}>
      <Label>{label}</Label>
      <InputComponent
        disabled={disabled}
        defaultValue={defaultValue}
        {...register(name, {
          onChange,
        })}
        type={type}
        placeholder={placeholder}
      />
      {errors[name]?.message && (
        <ErrorMessage message={errors[name]?.message?.toString() ?? ""} />
      )}
    </Container>
  );
}
