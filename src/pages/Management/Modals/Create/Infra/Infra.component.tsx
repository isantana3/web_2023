import { toast } from "react-toastify";
import { infraService } from "service/infra/infra.service";

import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { Modal } from "components/Modal";

import { InfraSchema } from "./Infra.schema";

import { type IInfraProps } from "./Infra.types";
import { type IInfra } from "global/infra.types";

import { ButtonWrapper } from "./Infra.styles";

export function Infra({
  isVisible,
  toggleModal,
  onSuccess,
}: IInfraProps): JSX.Element {
  async function onSubmit(infra: IInfra): Promise<void> {
    const { code, label } = infra;
    const { data, status } = await infraService.createInfra({
      code,
      roomId: "646233a1921a64b1f699s1ca9",
      label,
    });

    if (status !== 201) {
      toast.error("Erro ao criar item de infraestrutura");
      return;
    }

    toast.success("Item criado com sucesso");
    toggleModal();
    onSuccess(data);
  }

  return (
    <Modal
      title="Criar item de infraestrutura"
      isVisible={isVisible}
      toggleModal={toggleModal}
    >
      <Form onSubmit={onSubmit} schema={InfraSchema}>
        <Input
          placeholder="CADEIRA_LABORATÓRIO"
          label="Código"
          name="code"
          type="text"
        />
        <Input
          placeholder="Cadeira de Laboratório"
          label="Nome"
          name="label"
          type="text"
        />
        <ButtonWrapper>
          <Button
            label="Cancelar"
            color="warning"
            callback={toggleModal}
            type="button"
          />
          <Button label="Salvar" color="primary" type="submit" />
        </ButtonWrapper>
      </Form>
    </Modal>
  );
}
