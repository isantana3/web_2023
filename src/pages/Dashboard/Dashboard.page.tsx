import { useAuth } from "store/slices/auth/useAuth";

import { Header, SubTitle, Title, Wrapper } from "./Dashboard.styles";

export function Dashboard(): JSX.Element {
  const { user } = useAuth();

  return (
    <Wrapper>
      <Header>
        <Title>Olá, Isabelle!</Title>
        <SubTitle>
          Welcome back to your all in Dashboard and more text here!
        </SubTitle>
      </Header>
    </Wrapper>
  );
}
