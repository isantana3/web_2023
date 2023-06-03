import { type IButtonProps } from "./Button.types";

import { ButtonLabel, Container } from "./Button.styles";

export function Button({
  callback,
  icon,
  label,
  color,
  type,
  center = false,
}: IButtonProps): JSX.Element {
  return (
    <Container
      center={center}
      type={type}
      color={color}
      onClick={callback ?? undefined}
    >
      {icon && icon}
      <ButtonLabel>{label}</ButtonLabel>
    </Container>
  );
}
