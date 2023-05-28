import styled from "styled-components";

export const ModalCustomStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "24px",
    background: "#FFFFFF",
    boxShadow: "0px 6px 6px rgba(0, 0, 0, 0.25)",
    borderRadius: "12px",
  },
  overlay: {
    backgroundColor: "rgba(0 0 0 / 44%)",
    backdropFilter: "blur(5px)",
  },
};

export const ModalHeader = styled.div`
  width: 100%;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  button {
    background-color: transparent;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 30vw;
  min-height: fit-content;
  max-height: 50vh;
  overflow: hidden;

  @media screen and (max-width: 1400px) {
    min-width: 40vw;
  }

  @media screen and (max-width: 1368px) {
    min-width: 50vw;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: end;
`;
