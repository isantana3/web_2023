import { Booking } from "pages/Booking";
import { User } from "pages/Configurations";
import { Dashboard } from "pages/Dashboard";
import { Management } from "pages/Management";
import { Route, Routes } from "react-router-dom";

export function UserRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="*" element={<Dashboard />} />
      <Route path="/configuracoes" element={<User />} />
      {/* <Route path="/reservas" element={<Bookings />} /> */}
      <Route path="/reserva/:id" element={<Booking />} />
      <Route path="/reserva" element={<Booking />} />
      <Route path="/gestao" element={<Management />} />
    </Routes>
  );
}
