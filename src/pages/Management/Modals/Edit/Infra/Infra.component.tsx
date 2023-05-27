import { toast } from "react-toastify";
import { infraService } from "service/infra/infra.service";
import { useInfra } from "store/slices/infra/useInfra";

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
  const { infra } = useInfra();

  async function onSubmit(newData: IInfra): Promise<void> {
    const { code, label } = newData;
    const { data, status } = await infraService.updateInfra(infra.id ?? "", {
      code: code ?? infra.code,
      roomId: infra.roomId,
      label: label ?? infra.label,
    });

    if (status !== 200) {
      toast.error("Erro ao editar item de infraestrutura");
      return;
    }

    toast.success("Item editado com sucesso");
    toggleModal();
    onSuccess(data);
  }

  return (
    <Modal
      title={`Editando item ${infra.label}`}
      isVisible={isVisible}
      toggleModal={toggleModal}
    >
      <Form onSubmit={onSubmit} schema={InfraSchema}>
        <Input
          placeholder="CADEIRA_LABORATÓRIO"
          label="Código"
          name="code"
          type="text"
          defaultValue={infra.code}
        />
        <Input
          placeholder="Cadeira de Laboratório"
          label="Nome"
          name="label"
          type="text"
          defaultValue={infra.label}
        />
        <ButtonWrapper>
          <Button
            label="Cancelar"
            color="warning"
            callback={toggleModal}
            type="button"
          />
          <Button label="Salvar Item" color="primary" type="submit" />
        </ButtonWrapper>
      </Form>
    </Modal>
  );
}
