import { type IButtonProps } from "./Button.types";

import { ButtonLabel, Container } from "./Button.styles";

export function Button({ callback, icon, label }: IButtonProps): JSX.Element {
  return (
    <Container onClick={callback}>
      {icon}
      <ButtonLabel>{label}</ButtonLabel>
    </Container>
  );
}
