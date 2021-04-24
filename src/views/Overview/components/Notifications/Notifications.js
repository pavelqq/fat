import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  Tooltip
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardOutlined';
import PaymentIcon from '@material-ui/icons/PaymentOutlined';
import MailIcon from '@material-ui/icons/MailOutlineOutlined';

const useStyles = makeStyles(theme => ({
  root: {},
  value: {
    fontWeight: theme.typography.fontWeightMedium
  },
  type: {
    fontWeight: theme.typography.fontWeightMedium
  }
}));

const Notifications = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const notifications = [
    {
      id: 1,
      value: 6,
      type: 'invite',
      message: 'новых заявок в друзья'
    },
    {
      id: 2,
      value: 2,
      type: 'message',
      message: 'новых сообщения'
    },
    {
      id: 3,
      value: 1,
      type: 'payout',
      message: 'новое задание'
    }
  ];

  const icons = {
    invite: <SendIcon />,
    message: <MailIcon />,
    payout: <PaymentIcon />
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <List>
        {notifications.map((notification, i) => (
          <ListItem
            divider={i < notifications.length - 1}
            key={notification.id}
          >
            <ListItemIcon>{icons[notification.type]}</ListItemIcon>
            <ListItemText>
              <Typography variant="body1">
                <span className={classes.value}>{notification.value}</span>{' '}
                {notification.message}
              </Typography>
            </ListItemText>
            <ListItemSecondaryAction>
              <Tooltip title="View">
                <IconButton
                  edge="end"
                  size="small"
                >
                  <ArrowForwardIcon />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default Notifications;
