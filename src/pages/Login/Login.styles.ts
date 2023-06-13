import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #d4e1f4;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  gap: 8vw;
  justify-content: center;
  align-items: center;
`;

export const LeftSide = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: calc(715px - 10vh);
    width: auto;
    z-index: 99;
  }

  div {
    position: absolute;
    width: 260px;
    height: calc(103px - 2vh);
    bottom: -25px;
    left: -25px;
    background: #283a73;
  }

  @media (max-width: 1420px) {
    img {
      max-height: calc(715px - 20vh);
      width: auto;
      z-index: 99;
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 40%;
  max-width: 20vw;

  form {
    width: 100%;
  }

  img {
    height: 100px;
  }

  h1 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    color: #314ca5;
  }
`;
