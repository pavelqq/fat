import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';

import FilesDropzone from "../../../../components/FilesDropzone";

const useStyles = makeStyles(() => ({
  root: {}
}));

const ProjectCover = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Загрузите файлы, если нужно" />
      <CardContent>
        <FilesDropzone />
      </CardContent>
    </Card>
  );
};


export default ProjectCover;
