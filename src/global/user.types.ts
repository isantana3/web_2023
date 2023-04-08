export type UserType = "ADMINISTRADOR" | "USUARIO" | "GESTOR";

export interface IUser {
  id: string;
  userType: UserType;
  name: string;
  email: string;
}
