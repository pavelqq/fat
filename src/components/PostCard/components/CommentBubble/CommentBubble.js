import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Link, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginBottom: theme.spacing(2)
  },
  bubble: {
    flexGrow: 1,
    padding: theme.spacing(1),
    marginLeft: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default
  },
  header: {
    display: 'flex',
    alignItems: 'center'
  },
  time: {
    marginLeft: 'auto'
  },
  message: {
    marginTop: theme.spacing(1)
  }
}));

const CommentBubble = props => {
  const { comment, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt="Person"
        component={RouterLink}
        src={comment.author.avatar}
        to="/profile/1/"
      />
      <div className={classes.bubble}>
        <div className={classes.header}>
          <Link
            color="textPrimary"
            component={RouterLink}
            to="/profile/1/"
            variant="h6"
          >
            {comment.author.name}
          </Link>
          <Typography
            className={classes.time}
            variant="body2"
          >
            {moment(comment.created_at).fromNow()}
          </Typography>
        </div>
        <Typography
          className={classes.message}
          variant="body1"
        >
          {comment.message}
        </Typography>
      </div>
    </div>
  );
};


export default CommentBubble;
