import { useFormContext } from "react-hook-form";

import { ErrorMessage } from "../ErrorMessage";

import { type IInputProps } from "./Input.types";

import { Container, InputComponent, Label } from "./Input.styles";

export function Input({
  name,
  type,
  placeholder,
  label,
}: IInputProps): JSX.Element {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Container>
      <Label>{label}</Label>
      <InputComponent
        {...register(name)}
        type={type}
        placeholder={placeholder}
      />
      {errors[name]?.message && (
        <ErrorMessage message={errors[name]?.message?.toString() ?? ""} />
      )}
    </Container>
  );
}
