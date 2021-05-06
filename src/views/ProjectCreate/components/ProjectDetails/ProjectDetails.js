import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import RichEditor from "../../../../components/RichEditor";


const useStyles = makeStyles(() => ({
  root: {}
}));

const ProjectDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
        <CardHeader title="Детали проекта" />
      <CardContent>
        <RichEditor placeholder="Опишите ваш проект..." />
      </CardContent>
    </Card>
  );
};


export default ProjectDetails;
