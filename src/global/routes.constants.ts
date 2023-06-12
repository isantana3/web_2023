import { type Icons } from "./icons.constants";

import { type UserType } from "global/user.types";

export interface IRoutes {
  name: string;
  path: string;
  icon: keyof typeof Icons;
  users: UserType[] | "ALL";
}

export const routes: IRoutes[] = [
  {
    name: "Inicio",
    path: "/",
    users: "ALL",
    icon: "HomeIcon",
  },
  {
    name: "Reserva",
    path: "/reserva",
    users: "ALL",
    icon: "BulletinIcon",
  },
  {
    name: "Configurações",
    path: "/configuracoes",
    users: "ALL",
    icon: "ConfigIcon",
  },
  {
    name: "Gestão",
    path: "/gestao",
    users: ["admin", "manager"],
    icon: "Managementcon",
  },
];
