import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.Configurations.background};
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.Configurations.stroke};
  gap: 1rem;
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
`;

export const SubHeader = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 4rem;
  gap: 1rem;
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
  min-width: fit-content;
`;
