import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default
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

const SourceFiles = () => {

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
              Детализация планов
            </Typography>
            <Typography variant="subtitle2">
              Огромные возможности детализации планов питания и тренировок. Следите за каждым шагом ваших друзей или
              сравнивайте свой прогресс.
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
                src="/images/presentation/source_files.png"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SourceFiles;
