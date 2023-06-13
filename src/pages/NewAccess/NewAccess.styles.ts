import styled from "styled-components";
import { Theme } from "styles/Themes";

export const Container = styled.div`
  background: ${Theme.ForgotPassword.background};
  height: 100%;
`;

export const CentralizedContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
`;

export const Header = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  color: ${({ theme }) => theme.ForgotPassword.title};
`;

export const SmallText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.ForgotPassword.title};
  text-align: center;
  cursor: pointer;
  text-decoration: underline;
`;
