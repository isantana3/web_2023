export interface IModalProps {
  isVisible: boolean;
  toggleModal: () => void;
  title?: string;
  children: JSX.Element[] | JSX.Element;
  actions?: JSX.Element[] | JSX.Element;
}
