import { type FunctionComponent, type SVGProps } from "react";

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
    name: "Laboratórios",
    path: "/laboratorios",
    users: "ALL",
    icon: "LaboratoryIcon",
  },
  {
    name: "Suas Reservas",
    path: "/reservas",
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
    name: "Cadastros",
    path: "/cadastros",
    users: ["ADMINISTRADOR", "GESTOR"],
    icon: "Managementcon",
  },
];
