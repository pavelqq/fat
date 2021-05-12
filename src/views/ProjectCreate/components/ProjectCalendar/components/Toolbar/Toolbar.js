import React from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Hidden,
  Typography,
  Tooltip,
  ButtonGroup,
  IconButton,
  Button
} from '@material-ui/core';
import ViewConfigIcon from '@material-ui/icons/ViewComfyOutlined';
import ViewWeekIcon from '@material-ui/icons/ViewWeekOutlined';
import ViewDayIcon from '@material-ui/icons/ViewDayOutlined';
import ViewAgendaIcon from '@material-ui/icons/ViewAgendaOutlined';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Toolbar = props => {
  const {
    date,
    view,
    onDatePrev,
    onDateNext,
    onEventAdd,
    onViewChange,
    onDateToday,
    className,
    ...rest
  } = props;

  const classes = useStyles();

  const viewOptions = [
    {
      label: 'Месяц',
      value: 'dayGridMonth',
      icon: ViewConfigIcon
    },
    {
      label: 'Неделя',
      value: 'timeGridWeek',
      icon: ViewWeekIcon
    },
    {
      label: 'День',
      value: 'timeGridDay',
      icon: ViewDayIcon
    },
    {
      label: 'Задачи дня',
      value: 'listWeek',
      icon: ViewAgendaIcon
    }
  ];

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="flex-end"
        container
        justify="space-between"
        spacing={3}
      >
        <Grid item>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Calendar
          </Typography>
          <Typography
            component="h1"
            variant="h3"
          >
            Здесь ваш план
          </Typography>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            onClick={onEventAdd}
            variant="contained"
          >
            Добавить событие
          </Button>
        </Grid>
      </Grid>
      <Grid
        alignItems="center"
        container
        justify="space-between"
        spacing={3}
      >
        <Grid item>
          <ButtonGroup>
            <Button onClick={onDatePrev}>Предыдущий</Button>
            <Button onClick={onDateToday}>Сегодня</Button>
            <Button onClick={onDateNext}>Следующий</Button>
          </ButtonGroup>
        </Grid>
        <Hidden smDown>
          <Grid item>
            <Typography variant="h3">
              {moment(date).format('MMMM YYYY')}
            </Typography>
          </Grid>
          <Grid item>
            {viewOptions.map(viewOption => {
              const Icon = viewOption.icon;

              return (
                <Tooltip
                  key={viewOption.value}
                  title={viewOption.label}
                >
                  <IconButton
                    color={viewOption.value === view ? 'primary' : 'default'}
                    onClick={() => onViewChange(viewOption.value)}
                  >
                    <Icon />
                  </IconButton>
                </Tooltip>
              );
            })}
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};


export default Toolbar;
