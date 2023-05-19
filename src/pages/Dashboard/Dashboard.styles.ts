import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.Dashboard.background};
  color: #000;
  display: flex;
  flex-direction: column;
  padding: 4rem;
`;

export const Header = styled.div`
  margin-bottom: 4rem;
`;

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  color: ${({ theme }) => theme.Dashboard.title};
`;

export const SubTitle = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.Dashboard.subTitle};
`;
