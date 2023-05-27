import { toast } from "react-toastify";
import { laboratoryService } from "service/laboratory/laboratory.service";
import { useLaboratory } from "store/slices/laboratory/useLaboratory";

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
  const { laboratory } = useLaboratory();

  async function onSubmit(newData: ILaboratory): Promise<void> {
    const { location, label } = newData;
    const { data, status } = await laboratoryService.updateLaboratory(
      laboratory.id ?? "",
      {
        location,
        label,
      }
    );

    if (status !== 200) {
      toast.error("Erro ao editar laboratório");
      return;
    }

    toast.success("Laboratório editado com sucesso");
    toggleModal();
    onSuccess(data);
  }

  return (
    <Modal
      title={`Editando item ${laboratory.label}`}
      isVisible={isVisible}
      toggleModal={toggleModal}
    >
      <Form onSubmit={onSubmit} schema={LaboratoriesSchema}>
        <Input
          placeholder="5A"
          label="Nome"
          name="label"
          type="text"
          defaultValue={laboratory.label}
        />
        <Input
          placeholder="Pav batatinha ..."
          label="Localização"
          name="location"
          type="text"
          defaultValue={laboratory.location}
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
