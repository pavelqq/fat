import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Button,
  Dialog,
  TextField,
  Typography,
  colors
} from '@material-ui/core';

import getInitials from "../../../../../../utils/getInitials";

const useStyles = makeStyles(theme => ({
  root: {
    width: 960
  },
  header: {
    padding: theme.spacing(3),
    maxWidth: 720,
    margin: '0 auto'
  },
  content: {
    padding: theme.spacing(0, 2),
    maxWidth: 720,
    margin: '0 auto'
  },
  helperText: {
    textAlign: 'right',
    marginRight: 0
  },
  author: {
    margin: theme.spacing(4, 0),
    display: 'flex'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    backgroundColor: colors.grey[100],
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  applyButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  }
}));

const Application = props => {
  const { author, open, onClose, onApply, className, ...rest } = props;

  const [value, setValue] = useState('');

  const classes = useStyles();

  const handleChange = event => {
    event.persist();

    setValue(event.target.value);
  };

  return (
    <Dialog
      maxWidth="lg"
      onClose={onClose}
      open={open}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <div className={classes.header}>
          <Typography
            align="center"
            className={classes.title}
            gutterBottom
            variant="h3"
          >
            The project owner requires an introduction
          </Typography>
          <Typography
            align="center"
            className={classes.subtitle}
            variant="subtitle2"
          >
            Write down a short note with your application regarding why you
            think you'd be a good fit for this position.
          </Typography>
        </div>
        <div className={classes.content}>
          <TextField
            autoFocus
            className={classes.textField}
            FormHelperTextProps={{ classes: { root: classes.helperText } }}
            fullWidth
            helperText={`${200 - value.length} characters left`}
            label="Short Note"
            multiline
            onChange={handleChange}
            placeholder="What excites you about this project?"
            rows={5}
            value={value}
            variant="outlined"
          />
          <div className={classes.author}>
            <Avatar
              alt="Author"
              className={classes.avatar}
              src={author.avatar}
            >
              {getInitials(author.name)}
            </Avatar>
            <div>
              <Typography variant="h3">{author.name}</Typography>
              <Typography variant="subtitle2">{author.bio}</Typography>
            </div>
          </div>
        </div>
        <div className={classes.actions}>
          <Button
            className={classes.applyButton}
            onClick={onApply}
            variant="contained"
          >
            Apply for a role
          </Button>
        </div>
      </div>
    </Dialog>
  );
};


export default Application;
