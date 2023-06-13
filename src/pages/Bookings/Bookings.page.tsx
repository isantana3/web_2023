import { useEffect, useState } from "react";

import { times } from "global/hours.constant";
import { Icons } from "global/icons.constants";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { laboratoryService } from "service/laboratory/laboratory.service";
import { locationService } from "service/location/location.service";

import { Button } from "components/Button";
import { type IOptions } from "components/Form/Select/Select.types";
import { Input } from "components/Input";
import { Pagination } from "components/Pagination";
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
  const [page, setPage] = useState<number>(1);
  const navigate = useNavigate();

  function onChangeSelect(value: IOptions): void {
    // console.log(value);
  }

  const getLocations = async (): Promise<void> => {
    const {
      data: { data },
    } = await locationService.getLocationsNormal();
    setLocation(data);
  };

  const getLaboratories = async (page: number): Promise<void> => {
    const {
      data: { data },
    } = await laboratoryService.getLaboratories({
      page,
      limit: 2,
    });
    setLaboratories(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getLocations().catch((err) => {
      toast.error(err.message);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getLaboratories(page).catch((err) => {
      toast.error(err.message);
    });
  }, [page]);

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
        <div>
          <Table
            title="Laboratórios Disponíveis"
            header={["ID", "Laboratório", "Pavilhão"]}
            keys={["_id", "label", "pavilion.label"]}
            row={laboratories}
            actions={Actions}
            isLoading={isLoading}
          />
          <Pagination currentPage={page} setPage={setPage} totalPages={2} />
        </div>
      </Content>
    </Wrapper>
  );
}
