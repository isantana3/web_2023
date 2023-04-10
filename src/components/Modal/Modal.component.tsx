import { useState } from "react";

import ModalComponent from "react-modal";

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
  onSave,
  onCancel,
}: IModalProps): JSX.Element {
  return (
    <ModalComponent
      onRequestClose={toggleModal}
      isOpen={isVisible}
      style={ModalCustomStyles}
    >
      <ModalHeader>
        {title && <h2>{title}</h2>}
        <button onClick={toggleModal}>x</button>
      </ModalHeader>
      <ModalContent>{children}</ModalContent>
      <ModalFooter>
        {!!onSave && <button />}
        {!!onCancel && <button />}
      </ModalFooter>
    </ModalComponent>
  );
}
