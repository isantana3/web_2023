export interface IStepOneFormData extends Pick<IFormData, "email"> {}

export interface IStepTwoFormData extends Omit<IFormData, "email"> {}

export interface IFormData {
  email: string;
  name: string;
  registration: string;
  position: string;
}
