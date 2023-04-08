import { Icons } from "global/icons.constants";
import { useAuth } from "store/slices/auth/useAuth";

import { Wrapper } from "./Dashboard.styles";

export function Dashboard(): JSX.Element {
  const { user } = useAuth();

  return (
    <Wrapper>
      <h1>
        <Icons.HomeIcon color="#2cca1b" width={20} height={20} />
        Welcome {user.name}
      </h1>
    </Wrapper>
  );
}
