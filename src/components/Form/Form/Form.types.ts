/* eslint-disable @typescript-eslint/no-explicit-any */
import { type AnyObject, type ObjectSchema } from "yup";

export interface IFormProps {
  onSubmit: (data: any) => void;
  schema: ObjectSchema<any, AnyObject, any, "">;
  children: JSX.Element[] | JSX.Element;
}
