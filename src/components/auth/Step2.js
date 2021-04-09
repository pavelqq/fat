import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers';
import { useData } from "./DataContext";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import { PrimaryButton } from "./authComponents/PrimaryButton";
import { MainContainer } from "./authComponents/MainContainer";
import { Form } from "./authComponents/Form";
import { Input } from "./authComponents/Input";
import * as yup from "yup";
import { parsePhoneNumberFromString } from 'libphonenumber-js'


const schema = yup.object().shape({
  email: yup
    .string()
    .email("Некорректный E-mail, шот намудрили 😯")
    .required("Пустая строчка с e-mail'ом 😨"),
});

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value)
  if(!phoneNumber){
    return value
  }

  return (
    phoneNumber.formatInternational()
  );
};

export const Step2 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const hasPhone = watch("hasPhone");

  const onSubmit = (data) => {
    // history.push("./step3");
    history.push("./result");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🦄 Шаг 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="email"
          type="email"
          label="Почта"
          name="email"
          error={!!errors.email}
          helperText={errors?.email?.message}
          required
        />

        <FormControlLabel
          control={
            <Checkbox defaultValue={data.hasPhone} defaultChecked={data.hasPhone} color="primary" inputRef={register} name="hasPhone" />
          }
          label="Тык сюда, если у вас есть номер телефона🤩"
        />

        {hasPhone && (
          <Input
            ref={register}
            id="phoneNumber"
            type="tel"
            label="Телефон"
            name="phoneNumber"
            onChange={(event) => {
              event.target.value = normalizePhoneNumber(event.target.value);
            }}
          />
        )}
        <PrimaryButton>Далее</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
