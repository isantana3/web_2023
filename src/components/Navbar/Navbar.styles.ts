import styled from "styled-components";
import { Theme } from "styles/Themes";

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
  border-bottom: 1px solid ${Theme.Navbar.stroke};
  color: blue;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-left: 12rem;
`;

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: ${Theme.Navbar.font};
`;
