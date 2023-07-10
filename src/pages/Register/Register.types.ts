import { type IUser } from "global/user.types";

export interface IStepOneFormData extends Pick<IUser, "email"> {}

export interface IStepTwoFormData extends Omit<IUser, "email"> {}
