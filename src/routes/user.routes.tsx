import { Booking } from "pages/Booking";
import { Bookings } from "pages/Bookings";
import { Admin } from "pages/Configurations";
import { Dashboard } from "pages/Dashboard";
import { Management } from "pages/Management";
import { Route, Routes } from "react-router-dom";

export function UserRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="*" element={<Dashboard />} />
      <Route path="/configuracoes" element={<Admin />} />
      <Route path="/reservas" element={<Bookings />} />
      <Route path="/reserva" element={<Booking />} />
      <Route path="/cadastros" element={<Management />} />
    </Routes>
  );
}
