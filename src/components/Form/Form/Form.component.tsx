import React, { cloneElement, isValidElement, useEffect } from "react";

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
      <Container onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </Container>
    </FormProvider>
  );
}
