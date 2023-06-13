import { useEffect, useState } from "react";

import { Icons } from "global/icons.constants";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { reservationService } from "service/reservation/reservation.service";

import { Button } from "components/Button";
import { LaboratoryTag } from "components/LaboratoryTag";
import { Pagination } from "components/Pagination";
import { type IPagination } from "components/Pagination/Pagination.types";
import { Table } from "components/Table";

import {
  type IReservationList,
  type ReservationStatusType,
} from "global/reservations.types";

import { ButtonRow } from "./Bookings.styles";
import {
  LaboratoryItem,
  LaboratoryItemSubTitle,
  LaboratoryItemTitle,
} from "pages/Dashboard/Dashboard.styles";

export const Bookings = (): JSX.Element => {
  const [bookings, setBookings] = useState<IReservationList[]>([]);
  const [page, setPage] = useState<IPagination>({
    page: 1,
    totalPages: 1,
    limit: 2,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const getBookings = async (page: IPagination): Promise<void> => {
    setIsLoading(true);
    const {
      data: { data },
      data: { lastPage },
    } = await reservationService.getReservations(page);
    setPage({
      page: page.page,
      totalPages: lastPage,
      limit: 2,
    });
    setBookings(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getBookings(page).catch((e) => {});
  }, []);

  const setBookingStatus = async (
    newStatus: ReservationStatusType,
    reservation: IReservationList
  ): Promise<void> => {
    const { status } = await reservationService.updateReservation(
      reservation._id as string,
      {
        ...reservation,
        room: reservation.room._id,
        responsible: reservation.responsible._id,
        status: newStatus,
      }
    );

    if (status !== 200) {
      toast.error("Ocorreu um erro ao atualizar uma reserva");
      return;
    }

    toast.success("Reserva atualizada com sucesso");
    await getBookings({
      page: 1,
      totalPages: 1,
      limit: 2,
    });
  };

  const Actions = (rowId: number): JSX.Element => {
    return bookings[rowId].status === "reserved" ? (
      <ButtonRow>
        <Button
          label="Aprovar"
          callback={async () => {
            await setBookingStatus("finished", bookings[rowId]);
          }}
          icon={<Icons.ConfirmIcon />}
        />
        <Button
          callback={async () => {
            await setBookingStatus("cancelled", bookings[rowId]);
          }}
          label="Reprovar"
          color="warning"
          icon={<Icons.CloseIcon />}
        />
      </ButtonRow>
    ) : (
      <ButtonRow>
        <Button
          callback={() => {
            navigate(`/reserva/${bookings[rowId]._id as string}`);
          }}
          label="Visualizar Reserva"
        />
      </ButtonRow>
    );
  };

  const generateRows = (): object[] => {
    return bookings.map((booking) => {
      const dateStart = new Date(booking.startDate);
      const dateEnd = new Date(booking.endDate);
      const data = {
        description: <div>{booking.label}</div>,
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
        name: booking.responsible.name,
        status: <LaboratoryTag status={booking.status} label="Pendente" />,
      };
      return data;
    });
  };

  return (
    <>
      <Table
        title="Agendamentos"
        header={["Descrição Geral", "Descrição", "Status", "Responsável"]}
        keys={["laboratory", "description", "status", "name"]}
        isLoading={isLoading}
        row={generateRows()}
        actions={Actions}
      />
      <Pagination page={page} setPage={getBookings} />
    </>
  );
};
