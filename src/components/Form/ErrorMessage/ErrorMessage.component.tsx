import { type IErrorMessageProps } from "./ErrorMessage.types";

import { Container } from "./ErrorMessage.styles";

export function ErrorMessage({ message }: IErrorMessageProps): JSX.Element {
  return <Container>{message}</Container>;
}
