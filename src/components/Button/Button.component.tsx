import { type IButtonProps } from "./Button.types";

import { ButtonLabel, Container } from "./Button.styles";

export function Button({
  callback,
  icon,
  label,
  color,
  type,
  center = false,
  disabled,
}: IButtonProps): JSX.Element {
  return (
    <Container
      center={center}
      type={type}
      color={color}
      disabled={disabled}
      onClick={callback ?? undefined}
    >
      {icon && icon}
      <ButtonLabel>{label}</ButtonLabel>
    </Container>
  );
}
