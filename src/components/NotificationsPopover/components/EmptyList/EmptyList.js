import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(3)
  },
  image: {
    height: 240,
    backgroundImage: 'url("/images/undraw_empty_xct9.svg")',
    backgroundPositionX: 'right',
    backgroundPositionY: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}));

const EmptyList = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.image} />
      <Typography variant="h4">There's nothing here...</Typography>
    </div>
  );
};


export default EmptyList;
