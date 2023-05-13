import { useState } from "react";

import { Icons } from "global/icons.constants";
import ModalComponent from "react-modal";
import { Theme } from "styles/Themes";

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
          <Icons.CloseIcon color={Theme.PrimaryTheme["primary-light"]} />
        </button>
      </ModalHeader>
      <ModalContent>{children}</ModalContent>
      <ModalFooter>{actions}</ModalFooter>
    </ModalComponent>
  );
}
