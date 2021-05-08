import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    borderRadius: '50%',
    flexGrow: 0,
    flexShrink: 0
  },
  small: {
    height: theme.spacing(1),
    width: theme.spacing(1)
  },
  medium: {
    height: theme.spacing(2),
    width: theme.spacing(2)
  },
  large: {
    height: theme.spacing(3),
    width: theme.spacing(3)
  },
  default: {
    backgroundColor: colors.grey[50]
  },
  primary: {
    backgroundColor: theme.palette.primary.main
  },
  info: {
    backgroundColor: colors.lightBlue[600]
  },
  warning: {
    backgroundColor: colors.orange[900]
  },
  error: {
    backgroundColor: theme.palette.error.main
  },
  success: {
    backgroundColor: colors.green[600]
  }
}));

const StatusBullet = props => {
  const { className, size, color, ...rest } = props;

  const classes = useStyles();

  const rootClassName = clsx(
    {
      [classes.root]: true,
      [classes[size]]: size,
      [classes[color]]: color
    },
    className
  );

  return (
    <span
      {...rest}
      className={rootClassName}
    />
  );
};


StatusBullet.defaultProps = {
  size: 'medium',
  color: 'default'
};

export default StatusBullet;
