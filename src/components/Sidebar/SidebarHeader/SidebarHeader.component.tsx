import { Icons } from "global/icons.constants";
import { useAuth } from "store/slices/auth/useAuth";

import {
  Container,
  EditButon,
  IconContainer,
  Label,
} from "./SidebarHeader.styles";

export function SidebarHeader(): JSX.Element {
  const { user } = useAuth();

  return (
    <Container>
      <IconContainer>
        <Icons.HomeIcon color="#fff" />
      </IconContainer>
      <Label>Samuel Vasconcelos</Label>
      <Label>Admin</Label>
      <EditButon>Editar perfil</EditButon>
    </Container>
  );
}
