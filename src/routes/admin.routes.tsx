import { Fragment } from "react";

import { Admin } from "pages/Configurations";
import { Dashboard } from "pages/Dashboard";
import { Laboratories } from "pages/Laboratories";
import { Laboratory } from "pages/Laboratory";
import { Management } from "pages/Management";
import { Route } from "react-router-dom";

export function AdminRoutes(): JSX.Element {
  // Vamos ter
  return (
    <Fragment>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/config" element={<Admin />} />
      <Route path="/laboratories" element={<Laboratories />} />
      <Route path="/laboratory/:id" element={<Laboratory />} />
      <Route path="/management" element={<Management />} />
    </Fragment>
  );
}
