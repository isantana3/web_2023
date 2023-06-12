import styled from "styled-components";
import { Theme } from "styles/Themes";

export const Container = styled.div`
  background: ${Theme.Register.background};
  height: 100%;
`;

export const Content = styled.div`
  padding-top: 5%;
  padding-left: 5%;
  padding-right: 5%;
`;

export const Header = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 10px;
`;

export const LogoTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  color: ${({ theme }) => theme.Register.logoTitle};
`;

export const TitleContainer = styled.div``;

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.Register.title};
`;

export const SubTitle = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.Register.subTitle};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const InputRow = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;
