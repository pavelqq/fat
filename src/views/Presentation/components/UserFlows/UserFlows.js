import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {

  },
  inner: {
    padding: theme.spacing(6, 3),
    width: theme.breakpoints.values.lg,
    maxWidth: '90%',
    margin: '0 auto'
  },
  media: {
    '& img': {
      width: '100%',
      height: 'auto'
    }
  }
}));

const UserFlows = () => {

  const classes = useStyles();

  return (
    <div>
      <div className={classes.inner}>
        <Grid
          alignItems="center"
          container
          justify="space-between"
        >
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
          >
            <Typography
              gutterBottom
              variant="h3"
            >
              Complete User Flows
            </Typography>
            <Typography variant="subtitle2">
              Not just a set of tools, the package includes the most common use
              cases of user flows like User Management, Second Level Layout, and
              many more.
            </Typography>
          </Grid>
          <Grid
            className={classes.media}
            item
            lg={4}
            md={6}
            xs={12}
          >
            <img
                alt="User flows"
                src="/images/presentation/user_flows.png"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default UserFlows;
