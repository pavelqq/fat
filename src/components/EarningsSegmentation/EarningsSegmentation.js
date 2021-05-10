import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';

import axios from "../../utils/axios";
import GenericMoreButton from "../GenericMoreButton";
import { Chart } from './components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0
    }
  },
  chartContainer: {
    padding: theme.spacing(3)
  },
  chart: {
    height: 281
  },
  statsContainer: {
    display: 'flex'
  },
  statsItem: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(3, 2),
    '&:not(:last-of-type)': {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  }
}));

const EarningsSegmentation = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [earnings, setEarnings] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchEarnings = () => {
      axios.get('/api/dashboard/earnings').then(response => {
        if (mounted) {
          setEarnings(response.data.earnings);
        }
      });
    };

    fetchEarnings();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={<GenericMoreButton />}
        title="Сегментация"
      />
      <Divider />
      <CardContent className={classes.content}>
        <div className={classes.chartContainer}>
          <Chart
            className={classes.chart}
            data={earnings}
          />
        </div>
        <Divider />
        <div className={classes.statsContainer}>
          {earnings.map(earning => (
            <div
              className={classes.statsItem}
              key={earning.id}
            >
              <Typography
                align="center"
                component="h6"
                gutterBottom
                variant="overline"
              >
                {earning.label}
              </Typography>
              <Typography
                align="center"
                variant="h4"
              >
                {earning.value}%
              </Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};


export default EarningsSegmentation;
