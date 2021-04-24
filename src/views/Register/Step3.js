import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useData } from "./DataContext";
import { MainContainer } from "./RegisterComponents/MainContainer";
import { FileInput } from "./RegisterComponents/FileInput";
import { PrimaryButton } from "./RegisterComponents/PrimaryButton";
import Typography from "@material-ui/core/Typography";
import { Form } from "./RegisterComponents/Form";

export const Step3 = () => {
  const history = useHistory();
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  });

  const onSubmit = (data) => {
    history.push("./result");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🦄 Аватарка
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PrimaryButton>Далее</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
