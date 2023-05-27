import { toast } from "react-toastify";
import { laboratoryService } from "service/laboratory/laboratory.service";

import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { Modal } from "components/Modal";

import { LaboratoriesSchema } from "./Laboratories.schema";

import { type ILaboratoriesProps } from "./Laboratories.types";
import { type ILaboratory } from "global/laboratory.types";

import { ButtonWrapper } from "./Laboratories.styles";

export function Laboratories({
  isVisible,
  toggleModal,
  onSuccess,
}: ILaboratoriesProps): JSX.Element {
  async function onSubmit(newData: ILaboratory): Promise<void> {
    const { location, label } = newData;
    const { data, status } = await laboratoryService.createLaboratory({
      location,
      label,
    });

    if (status !== 201) {
      toast.error("Erro ao criar laboratório");
      return;
    }

    toast.success("Laboratório editar com sucesso");
    toggleModal();
    onSuccess(data);
  }

  return (
    <Modal
      title={`Criando Laboratório`}
      isVisible={isVisible}
      toggleModal={toggleModal}
    >
      <Form onSubmit={onSubmit} schema={LaboratoriesSchema}>
        <Input placeholder="6A" label="Nome" name="label" type="text" />
        <Input
          placeholder="Pav batatinha"
          label="Localização"
          name="location"
          type="text"
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
