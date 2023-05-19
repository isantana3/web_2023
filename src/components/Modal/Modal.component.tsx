import { Icons } from "global/icons.constants";
import ModalComponent from "react-modal";
import { useTheme } from "styled-components";

import { type IModalProps } from "./Modal.types";

import {
  ModalContent,
  ModalCustomStyles,
  ModalFooter,
  ModalHeader,
} from "./Modal.styles";

export function Modal({
  isVisible,
  toggleModal,
  title,
  children,
  actions = <></>,
}: IModalProps): JSX.Element {
  const theme = useTheme();

  return (
    <ModalComponent
      onRequestClose={toggleModal}
      isOpen={isVisible}
      style={ModalCustomStyles}
      closeTimeoutMS={200}
      ariaHideApp={false}
    >
      <ModalHeader>
        {title && <h2>{title}</h2>}
        <button onClick={toggleModal}>
          <Icons.CloseIcon color={theme.PrimaryTheme["primary-light"]} />
        </button>
      </ModalHeader>
      <ModalContent>{children}</ModalContent>
      <ModalFooter>{actions}</ModalFooter>
    </ModalComponent>
  );
}
