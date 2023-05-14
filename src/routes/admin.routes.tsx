import { Booking } from "pages/Booking";
import { Bookings } from "pages/Bookings";
import { Admin } from "pages/Configurations";
import { Dashboard } from "pages/Dashboard";
import { Management } from "pages/Management";
import { Route, Routes } from "react-router-dom";

export function AdminRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="*" element={<Dashboard />} />
      <Route path="/configuracoes" element={<Admin />} />
      <Route path="/reservas" element={<Bookings />} />
      <Route path="/reserva/:id" element={<Booking />} />
      <Route path="/cadastros" element={<Management />} />
    </Routes>
  );
}
