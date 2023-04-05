import { useParams } from "react-router-dom";

import { Wrapper } from "./Laboratory.styles";

export function Laboratory(): JSX.Element {
  const { id } = useParams();

  return (
    <Wrapper>
      <h1>Laboratory {id}</h1>
    </Wrapper>
  );
}
