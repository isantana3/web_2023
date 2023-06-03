import { Icons } from "global/icons.constants";
import { useNavigate } from "react-router-dom";
import { useAuth } from "store/slices/auth/useAuth";

import {
  Container,
  EditButon,
  IconContainer,
  Label,
} from "./SidebarHeader.styles";

export function SidebarHeader(): JSX.Element {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <Container>
      <IconContainer>
        <Icons.UserIcon color="#fff" />
      </IconContainer>
      <Label>{user.name}</Label>
      <Label>{user.role}</Label>
      <EditButon
        onClick={() => {
          navigate("/configuracoes");
        }}
      >
        <Icons.EditIcon /> Editar perfil
      </EditButon>
    </Container>
  );
}
