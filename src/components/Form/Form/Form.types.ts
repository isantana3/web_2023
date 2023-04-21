import { type FieldValues, type SubmitHandler } from "react-hook-form";
import { type AnyObject, type ObjectSchema } from "yup";

export interface IFormProps {
  onSubmit: SubmitHandler<FieldValues>;
  schema: ObjectSchema<any, AnyObject, any, "">;
  children: JSX.Element[] | JSX.Element;
}
