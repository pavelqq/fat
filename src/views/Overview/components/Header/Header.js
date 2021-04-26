import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, Hidden } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';

const useStyles = makeStyles(theme => ({
  root: {},
  summaryButton: {

  },
  barChartIcon: {
    marginRight: theme.spacing(2)
  },
  image: {
    width: '100%',
    maxHeight: 400
  }
}));

const Header = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  // const session = useSelector(state => state.session);

  const quotes = [
    [
      "Благородные люди, друг друга любя,      \
      Видят горе других, забывают себя.        \
      Если чести и блеска зеркал ты желаешь, — \
      Не завидуй другим, — и возлюбят тебя.",
    ],

    [
      "Добродетель мудрецов напоминает собой путешествие в дальннюю страну \
      и восхождение на вершину: идущие                                     \
      в дальнюю страну начинают свой путь с первого шага;                  \
      восходящие на вершину начинают с подножия горы.",
    ],

    [
      "Если вы хотите успеха, а готовитесь к поражению, то вы получите как раз то, к чему готовитесь.",
    ],

    [
      "Мы – рабы своих привычек. измени свои привычки, изменится твоя жизнь.",
    ]
  ];

  const quote = quotes[ Math.floor( Math.random() * quotes.length ) ];

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="center"
        container
        justify="space-between"
        spacing={3}
      >
        <Grid
          item
          md={6}
          xs={12}
        >
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Домашняя страница
          </Typography>
          <br/>
          <Typography
            component="h1"
            gutterBottom
            variant="h4"
          >
            Добрый день, Павел
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
          >
            {quote}
          </Typography>
          <Button
            className={classes.summaryButton}
            edge="start"
            variant="contained"
          >
            <BarChartIcon className={classes.barChartIcon} />
            Посмотреть задания на сегодня
          </Button>
        </Grid>
        <Hidden smDown>
          <Grid
            item
            md={6}
          >
            <img
              alt="Cover"
              className={classes.image}
              src="/images/undraw_growth_analytics_8btt.svg"
            />
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default Header;
