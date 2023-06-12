import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.Configurations.background};
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  margin-bottom: 4rem;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  width: 100%;
  padding: 4rem;

  h1 {
    width: 100%;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.Configurations.stroke};
    color: ${({ theme }) => theme.Dashboard.title};
    font-family: "Montserrat", sans-serif;
  }

  form {
    margin: 0 auto;
    width: 80%;
  }

  @media (max-width: 1420px) {
    form {
      margin: unset;
      width: 100%;
    }
  }
`;

export const SubHeader = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  padding: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.Configurations.stroke};
  gap: 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  justify-content: end;
  margin-top: 2rem;
  height: fit-content;
`;

export const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 2rem;
`;
