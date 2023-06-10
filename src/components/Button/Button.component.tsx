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
  iconStroke = false,
  iconPosition = "left",
}: IButtonProps): JSX.Element {
  return (
    <Container
      iconStroke={iconStroke}
      center={center}
      type={type}
      color={color}
      disabled={disabled}
      onClick={callback ?? undefined}
    >
      {icon && iconPosition === "left" && icon}
      <ButtonLabel>{label}</ButtonLabel>
      {icon && iconPosition === "right" && icon}
    </Container>
  );
}
