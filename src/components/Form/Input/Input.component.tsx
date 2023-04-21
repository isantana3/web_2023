import { useFormContext } from "react-hook-form";

import { ErrorMessage } from "../ErrorMessage";

import { type IInputProps } from "./Input.types";

import { Container, InputComponent } from "./Input.styles";

export function Input({ name, type, placeholder }: IInputProps): JSX.Element {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Container>
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
