/* eslint-disable react/jsx-key */

import { useEffect, useState } from "react";

import { Icons } from "global/icons.constants";
import { useNavigate } from "react-router-dom";
import { reservationService } from "service/reservation/reservation.service";
import { useAuth } from "store/slices/auth/useAuth";

import { Button } from "components/Button";
import { LaboratoryTag } from "components/LaboratoryTag";
import { Table } from "components/Table";

import { type IReservationList } from "global/reservations.types";

import {
  Header,
  LaboratoryItem,
  LaboratoryItemSubTitle,
  LaboratoryItemTitle,
  SubTitle,
  Title,
  Wrapper,
} from "./Dashboard.styles";

export function Dashboard(): JSX.Element {
  const { user } = useAuth();
  const [bookings, setBookings] = useState<IReservationList[]>([]);
  const [loading, setIsLoading] = useState<boolean>(true);

  const getBookings = async (): Promise<void> => {
    // const { data } = await reservationService.getReservationsNormal({
    //   id: user._id,
    // });
    const {
      data: { data },
    } = await reservationService.getReservationsNormal({});

    setBookings(data.filter((item) => item.responsible._id === user?._id));
    setIsLoading(false);
  };

  const navigate = useNavigate();

  const Actions = (rowId: number): JSX.Element => {
    const id = bookings[rowId]._id ?? 0;
    const status = bookings[rowId].status;
    return status === "reserved" ? (
      <Icons.EditIcon
        onClick={() => {
          navigate(`/reserva/${id}`);
        }}
      />
    ) : (
      <Icons.DotsIcon />
    );
  };

  useEffect(() => {
    getBookings().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateRows = (): object[] => {
    return bookings.map((booking) => {
      const dateStart = new Date(booking.startDate);
      const dateEnd = new Date(booking.endDate);
      const data = {
        laboratory: (
          <LaboratoryItem>
            <Icons.LaboratoryIcon />
            <div>
              <LaboratoryItemTitle>{booking.room.label}</LaboratoryItemTitle>
              <LaboratoryItemSubTitle>
                <span>{dateStart.toLocaleDateString()}</span>
                <span>
                  {dateStart.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                  {" - "}
                  {dateEnd.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </LaboratoryItemSubTitle>
            </div>
          </LaboratoryItem>
        ),
        status: <LaboratoryTag status={booking.status} label="Pendente" />,
      };
      return data;
    });
  };

  return (
    <Wrapper>
      <Header>
        <Title>Olá, {user?.name}!</Title>
        <SubTitle>Suas últimas atividades podem ser vistas abaixo </SubTitle>
      </Header>
      <Table
        isLoading={loading}
        headerIcon={
          <Button
            callback={() => {
              navigate("/reserva");
            }}
            label="Nova Reserva"
          />
        }
        title="Suas reservas"
        header={["Laboratório", "Status"]}
        actions={Actions}
        keys={["laboratory", "status"]}
        row={generateRows()}
      />
    </Wrapper>
  );
}
