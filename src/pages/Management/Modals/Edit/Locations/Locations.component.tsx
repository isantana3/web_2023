import { toast } from "react-toastify";
import { locationService } from "service/location/location.service";
import { useLocation } from "store/slices/location/useLocation";

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
  const { locations } = useLocation();

  async function onSubmit(newData: ILocation): Promise<void> {
    const { label, description, observation } = newData;
    const { data, status } = await locationService.updateLocation(
      locations._id,
      {
        label,
        description,
        observation,
      }
    );

    if (status !== 200) {
      toast.error("Erro ao editar Pavilhão");
      return;
    }

    toast.success("Pavilhão editado com sucesso");
    toggleModal();
    onSuccess(data);
  }

  return (
    <Modal
      title={`Editando ${locations.label}`}
      isVisible={isVisible}
      toggleModal={toggleModal}
    >
      <Form onSubmit={onSubmit} schema={LocationsSchema}>
        <Input
          placeholder="Parvilhão Marques ..."
          label="Pavilhão"
          name="label"
          type="text"
          defaultValue={locations.label}
        />
        <Input
          placeholder="Parvilhão de exatas"
          label="Descrição"
          name="description"
          type="text"
          defaultValue={locations.description}
        />
        <Input
          placeholder="Não possui elevador ..."
          label="Observação"
          name="observation"
          type="text"
          defaultValue={locations.observation}
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
