import React, { cloneElement, isValidElement } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

import { Input as InputContainer } from "components/Input";

import { type IFormProps } from "./Form.types";

import { Container } from "./Form.styles";

export function Form({ onSubmit, schema, children }: IFormProps): JSX.Element {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function registerInput(Input: JSX.Element): JSX.Element {
    if (!Input.props.name) return Input;
    return isValidElement<HTMLFormElement>(Input) ? (
      <Controller
        render={({ field }) => {
          return (
            <InputContainer
              errorMessage={errors[Input.props.name]?.message?.toString()}
            >
              {cloneElement(Input, { ...field })}
            </InputContainer>
          );
        }}
        name={Input.props.name}
        control={control}
        defaultValue=""
      />
    ) : (
      Input
    );
  }

  function mapRecursive(
    children: JSX.Element[],
    callback: (child: JSX.Element) => JSX.Element
  ): any {
    return React.Children.map(children, (child) => {
      return child.type === "div"
        ? mapRecursive(child.props.children, callback)
        : callback(child);
    });
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      {mapRecursive(children, registerInput)}
    </Container>
  );
}
