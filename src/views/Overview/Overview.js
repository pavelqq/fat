import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import {
  Header,
  Statistics,
  Notifications,
  Projects,
  Todos
} from './components';
import Page from "../../components/Page";

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
  },
  statistics: {
    marginTop: theme.spacing(3)
  },
  notifications: {
    marginTop: theme.spacing(6)
  },
  projects: {
    marginTop: theme.spacing(6)
  },
  todos: {
    marginTop: theme.spacing(6)
  }
}));

const Overview = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Home"
    >
      <Header />
      <Statistics className={classes.statistics} />
      <Notifications className={classes.notifications} />
      <Todos className={classes.todos} />
      <Projects className={classes.projects} />
    </Page>
  );
};

export default Overview;
