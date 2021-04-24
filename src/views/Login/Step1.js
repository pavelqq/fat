import React from "react";
import { useHistory } from "react-router-dom";
import { useData } from "./DataContext";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers';
import { PrimaryButton } from "./LoginComponents/PrimaryButton";
import { MainContainer } from "./LoginComponents/MainContainer";
import { Form } from "./LoginComponents/Form";
import { Input } from "./LoginComponents/Input";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Разве у вас в имени цифры?😂")
    .required("Пустое поле с именем😱"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Разве у вас в фамилии цифры?😂")
    .required("Пустое поле с фамилией😱"),
});

export const Step1 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    history.push("./step2");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🦄 Шаг 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="firstName"
          type="text"
          label="Имя"
          name="firstName"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          ref={register}
          id="lastName"
          type="text"
          label="Фамилия"
          name="lastName"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <PrimaryButton>Далее</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
