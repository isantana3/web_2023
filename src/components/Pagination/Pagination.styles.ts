import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px;
  justify-content: end;
  gap: 16px;
  margin-top: 2rem;
`;

export const PageButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: -0.001em;
  color: #5f6d7e;

  :disabled {
    cursor: not-allowed;
  }
`;
