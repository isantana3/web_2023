export type UserType = "ADMINISTRADOR" | "USUARIO" | "GESTOR";

export type UserStatusType = "INATIVO" | "ATIVO";

export interface IUser {
  id: string;
  userType: UserType;
  name: string;
  email: string;
  token: string;
  registration: number;
  phone: number;
  position: string;
  organ: string;
  password?: string;
  status?: UserStatusType;
}
