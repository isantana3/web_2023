import { useEffect, useState } from "react";

import { reservationService } from "service/reservation/reservation.service";

import { Pagination } from "components/Pagination";
import { Table } from "components/Table";

import { type IReservationList } from "global/reservations.types";

export const Bookings = (): JSX.Element => {
  const [bookings, setBookings] = useState<IReservationList[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getBookings = async (page: number): Promise<void> => {
    // const { data } = await reservationService.getReservations({ page });
    const {
      data: { data },
    } = await reservationService.getReservationsNormal({});
    setBookings(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getBookings(page).catch((e) => {});
  }, [page]);

  return (
    <>
      <Table
        title="Agendamentos"
        header={["Descrição", "Responsável", "Laboratório", "Data"]}
        keys={["label", "responsible.name", "room.label", "startDate"]}
        isLoading={isLoading}
        row={bookings}
      />
      <Pagination currentPage={1} setPage={setPage} totalPages={3} />
    </>
  );
};
