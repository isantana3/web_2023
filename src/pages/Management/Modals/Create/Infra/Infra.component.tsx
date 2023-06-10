import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { infraService } from "service/infra/infra.service";
import { laboratoryService } from "service/laboratory/laboratory.service";

import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { Select } from "components/Form/Select";
import { Modal } from "components/Modal";

import { InfraSchema } from "./Infra.schema";

import { type IInfraProps } from "./Infra.types";
import { type IInfra } from "global/infra.types";
import { type ILaboratory } from "global/laboratory.types";

import { ButtonWrapper } from "./Infra.styles";

export function Infra({
  isVisible,
  toggleModal,
  onSuccess,
}: IInfraProps): JSX.Element {
  const [laboratory, setLaboratory] = useState<ILaboratory[]>([]);

  async function onSubmit(infra: IInfra): Promise<void> {
    const { code, label, room } = infra;
    const { data, status } = await infraService.createInfra({
      code,
      room,
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

  const getLaboratories = async (): Promise<void> => {
    const { data } = await laboratoryService.getLaboratoriesNormal();
    setLaboratory(data);
  };

  useEffect(() => {
    getLaboratories().catch((err) => {
      toast.error(err.message);
    });
  }, []);

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
        <Select
          label="Laboratório"
          name="room"
          options={laboratory.map((item) => {
            return {
              value: item._id,
              label: item.label,
            };
          })}
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
