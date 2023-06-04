import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { infraService } from "service/infra/infra.service";
import { laboratoryService } from "service/laboratory/laboratory.service";
import { useInfra } from "store/slices/infra/useInfra";

import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { Select } from "components/Form/Select";
import { Modal } from "components/Modal";
import { helpers } from "utils/helpers";

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
  const { infra } = useInfra();

  async function onSubmit(newData: IInfra): Promise<void> {
    const { code, label, room } = newData;
    const { data, status } = await infraService.updateInfra(infra._id ?? "", {
      code,
      room,
      label,
    });

    if (status !== 200) {
      toast.error("Erro ao editar item de infraestrutura");
      return;
    }

    toast.success("Item editado com sucesso");
    toggleModal();
    onSuccess(data);
  }

  const getLaboratories = async (): Promise<void> => {
    const { data } = await laboratoryService.getLaboratories();
    setLaboratory(data);
  };

  useEffect(() => {
    if (helpers.isObjectEmpty(infra)) return;

    getLaboratories().catch((err) => {
      toast.error(err.message);
    });
  }, [infra]);

  if (helpers.isObjectEmpty(infra)) return <></>;

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
        <Select
          label="Laboratório"
          name="room"
          defaultValue={{
            label:
              laboratory.find((c) => c._id === infra.room._id)?.label ?? "",
            value: infra.room._id,
          }}
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
