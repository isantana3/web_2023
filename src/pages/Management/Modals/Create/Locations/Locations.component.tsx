import { toast } from "react-toastify";
import { locationService } from "service/location/location.service";

import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { Modal } from "components/Modal";

import { LocationsSchema } from "./Locations.schema";

import { type ILaboratoriesProps } from "./Locations.types";
import { type ILocation } from "global/location.types";

import { ButtonWrapper } from "./Locations.styles";

export function Locations({
  isVisible,
  toggleModal,
  onSuccess,
}: ILaboratoriesProps): JSX.Element {
  async function onSubmit(newData: ILocation): Promise<void> {
    const { label, description, observation } = newData;
    const { data, status } = await locationService.createLocation({
      label,
      description,
      observation,
    });

    if (status !== 201) {
      toast.error("Erro ao criar Pavilhão");
      return;
    }

    toast.success("Pavilhão criado com sucesso");
    toggleModal();
    onSuccess(data);
  }

  return (
    <Modal
      title={`Criando Pavilhão`}
      isVisible={isVisible}
      toggleModal={toggleModal}
    >
      <Form onSubmit={onSubmit} schema={LocationsSchema}>
        <Input
          placeholder="Parvilhão Marques ..."
          label="Pavilhão"
          name="label"
          type="text"
        />
        <Input
          placeholder="Parvilhão de exatas"
          label="Descrição"
          name="description"
          type="text"
        />
        <Input
          placeholder="Não possui elevador ..."
          label="Observação"
          name="observation"
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
