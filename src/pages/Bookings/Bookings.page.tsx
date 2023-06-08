import { useEffect, useState } from "react";

import { times } from "global/hours.constant";
import { Icons } from "global/icons.constants";
import { useNavigate } from "react-router-dom";
import { type MultiValue, type SingleValue } from "react-select";
import { toast } from "react-toastify";
import { laboratoryService } from "service/laboratory/laboratory.service";
import { locationService } from "service/location/location.service";

import { Button } from "components/Button";
import { Input } from "components/Input";
import { Select } from "components/Select";
import { Table } from "components/Table";

import { type ILaboratory } from "global/laboratory.types";
import { type ILocation } from "global/location.types";

import {
  Content,
  Header,
  RightContent,
  SubHeader,
  SubTitle,
  Title,
  Wrapper,
} from "./Bookings.styles";

export function Bookings(): JSX.Element {
  const [locations, setLocation] = useState<ILocation[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [laboratories, setLaboratories] = useState<ILaboratory[]>([]);
  const navigate = useNavigate();

  function onChangeSelect(
    value: MultiValue<string | number> | SingleValue<string | number>
  ): void {
    // console.log(value);
  }

  const getLocations = async (): Promise<void> => {
    const { data } = await locationService.getLocations();
    setLocation(data);
  };

  const getLaboratories = async (): Promise<void> => {
    const { data } = await laboratoryService.getLaboratories();
    setLaboratories(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getLocations().catch((err) => {
      toast.error(err.message);
    });
    getLaboratories().catch((err) => {
      toast.error(err.message);
    });
  }, []);

  // Ações da tabela
  const Actions = (rowId: number): JSX.Element => {
    return (
      <Button
        callback={() => {}}
        label="Reservar"
        icon={<Icons.BulletinNewIcon color="#fff" />}
      />
    );
  };

  return (
    <Wrapper>
      <Header>
        <Title>Reservas</Title>
        <SubTitle>Gerêncie seus agendamentos</SubTitle>
      </Header>
      <SubHeader>
        <Input
          icon="SearchIcon"
          type={"search"}
          placeholder="Pesquisar laboratórios ..."
          onChange={(value) => {
            // console.log(value);
          }}
        />
        <RightContent>
          <Select
            placeholder="07:30 - 09:10"
            icon="TimeIcon"
            onChange={onChangeSelect}
            options={times}
            isMulti
          />
          <Select
            placeholder="Todos"
            icon="BuildingIcon"
            onChange={onChangeSelect}
            options={[
              {
                label: "Todos",
                value: null,
              },
              ...locations.map((item) => {
                return {
                  value: item._id,
                  label: item.label,
                };
              }),
            ]}
          />
          <Button
            label="Nova Reserva"
            type="button"
            callback={() => {
              navigate("/reserva");
            }}
          />
        </RightContent>
      </SubHeader>
      <Content>
        <Table
          title="Laboratórios Disponíveis"
          header={["ID", "Laboratório", "Pavilhão"]}
          keys={["_id", "label", "pavilion.label"]}
          row={laboratories}
          actions={Actions}
          isLoading={isLoading}
        />
      </Content>
    </Wrapper>
  );
}
