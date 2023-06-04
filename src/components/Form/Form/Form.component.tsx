import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";

import { type IFormProps } from "./Form.types";

import { Container } from "./Form.styles";

export function Form({ onSubmit, schema, children }: IFormProps): JSX.Element {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <Container
        onSubmit={async (event) => {
          event.preventDefault();
          const button = event.currentTarget.querySelector<HTMLButtonElement>(
            'button[type="submit"]'
          );

          if (button) {
            button.disabled = true;
            setTimeout(() => {
              button.disabled = false;
            }, 1000);
          }

          await methods.handleSubmit(onSubmit)();
        }}
      >
        {children}
      </Container>
    </FormProvider>
  );
}
