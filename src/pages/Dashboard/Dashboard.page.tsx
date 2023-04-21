import { Icons } from "global/icons.constants";
import { useAuth } from "store/slices/auth/useAuth";

import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { Select } from "components/Form/Select";
import { useModal } from "hooks/modals.hook";

import { DashboardSchema } from "./example.schema";

import { Wrapper } from "./Dashboard.styles";

export function Dashboard(): JSX.Element {
  const { user } = useAuth();
  const signInModal = useModal();

  function onSubmit(data: any): void {
    console.log("data");
    console.log(data);
  }

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <Wrapper>
      {/* <Modal {...signInModal}>
        <h1>helou</h1>
        <h1>helou</h1>
      </Modal> */}
      <h1 onClick={signInModal.toggleModal}>
        <Icons.HomeIcon color="#2cca1b" width={20} height={20} />
        Welcome {user.name}
      </h1>
      <Form onSubmit={onSubmit} schema={DashboardSchema}>
        <Input placeholder="email@email.com" type="text" name="email" />
        <Input placeholder="********" type="password" name="password" />
        <Select name="opcoes" options={options} />
        <button type="submit">SUBMIT</button>
      </Form>
    </Wrapper>
  );
}
