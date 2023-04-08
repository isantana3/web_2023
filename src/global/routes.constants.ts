import { type FunctionComponent, type SVGProps } from "react";

import { type UserType } from "global/user.types";

interface IRoutes {
  name: string;
  path: string;
  icon?: FunctionComponent<SVGProps<SVGElement>>;
  users: UserType[] | "ALL";
}

export const routes: IRoutes[] = [
  {
    name: "Inicio",
    path: "/inicio",
    users: "ALL",
  },
  {
    name: "Laboratórios",
    path: "/laboratorios",
    users: "ALL",
  },
  {
    name: "Suas Reservas",
    path: "/reservas",
    users: "ALL",
  },
  {
    name: "Configurações",
    path: "/configuracoes",
    users: "ALL",
  },
  {
    name: "Cadastros",
    path: "/cadastros",
    users: ["ADMINISTRADOR", "GESTOR"],
  },
];
