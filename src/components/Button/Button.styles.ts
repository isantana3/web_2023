import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 16px;
  gap: 6px;
  background: #314ca5;
  border: 1px solid #314ca5;
  border-radius: 6px;
  transition: all 100ms ease-in-out;

  &:hover {
    opacity: 90%;
  }

  svg {
    width: 20px;
    height: 20px;

    * {
      fill: #fff;
    }
  }
`;

export const ButtonLabel = styled.span`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;
