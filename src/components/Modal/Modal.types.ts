export interface IModalProps {
  isVisible: boolean;
  toggleModal: () => void;
  title?: string;
  children: JSX.Element[] | JSX.Element;
  onSave?: () => void;
  onCancel?: () => void;
}
