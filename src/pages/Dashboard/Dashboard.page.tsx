import { Icons } from "global/icons.constants";
import { useAuth } from "store/slices/auth/useAuth";

import { Form } from "components/Form";
import { Modal } from "components/Modal";
import { useModal } from "hooks/modals.hook";

import { DashboardSchema } from "./example.schema";

import { Wrapper } from "./Dashboard.styles";

export function Dashboard(): JSX.Element {
  const { user } = useAuth();
  const signInModal = useModal();

  function onSubmit(data: any): void {
    console.log(data);
  }

  return (
    <Wrapper>
      <Modal {...signInModal}>
        <h1>helou</h1>
        <h1>helou</h1>
      </Modal>
      <h1 onClick={signInModal.toggleModal}>
        <Icons.HomeIcon color="#2cca1b" width={20} height={20} />
        Welcome {user.name}
        <Form onSubmit={onSubmit} schema={DashboardSchema}>
          <input placeholder="email@email.com" type="text" name="email" />
          <input placeholder="********" type="password" name="password" />
          <button type="submit">submit</button>
        </Form>
      </h1>
    </Wrapper>
  );
}
