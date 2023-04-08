import { type IInputProps } from "./Input.types";

import { Container, ErrorMessage } from "./Input.styles";

export function Input({ errorMessage, children }: IInputProps): JSX.Element {
  return (
    <Container>
      {children}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}
