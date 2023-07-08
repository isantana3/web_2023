import { Icons } from "global/icons.constants";
import { useNavigate } from "react-router-dom";
import { useAuth } from "store/slices/auth/useAuth";

import {
  Container,
  IconContainer,
  Label,
  LogoutButton,
} from "./SidebarHeader.styles";

export function SidebarHeader(): JSX.Element {
  const { user } = useAuth();
  const navigate = useNavigate();

  function handleLogout(): void {
    navigate("/");
    localStorage.setItem("token", "");
    localStorage.setItem("userData", "");
    window.location.reload();
  }

  return (
    <Container>
      <IconContainer>
        <Icons.UserIcon color="#fff" />
      </IconContainer>
      <Label>{user.name}</Label>
      <Label>{user.role}</Label>
      <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
    </Container>
  );
}
