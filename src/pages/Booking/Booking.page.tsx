import { useParams } from "react-router-dom";

import { Wrapper } from "./Booking.styles";

export function Booking(): JSX.Element {
  const { id } = useParams();

  return (
    <Wrapper>
      <h1>Booking {id}</h1>
    </Wrapper>
  );
}
