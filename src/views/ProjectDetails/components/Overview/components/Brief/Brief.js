import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';

import Markdown from "../../../../../../components/Markdown";

const useStyles = makeStyles(() => ({
  root: {}
}));

const Brief = props => {
  const { brief, className, ...rest } = props;

  const classes = useStyles();

  debugger;

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Markdown source={brief} />
      </CardContent>
    </Card>
  );
};


export default Brief;
