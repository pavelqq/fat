import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Grid, Button} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.white
    },
    header: {
        width: theme.breakpoints.values.md,
        maxWidth: '100%',
        margin: '0 auto',
        padding: '80px 24px',
        [theme.breakpoints.up('md')]: {
            padding: '140px 24px'
        },
    },
    buttons: {
        marginTop: theme.spacing(6),
        display: 'flex',
        justifyContent: 'center'
    },
    mediaContainer: {
        margin: '0 auto',
        maxWidth: 1600,
        padding: theme.spacing(0, 2),
        overflow: 'hidden'
    },
    media: {
        width: '100%'
    },
    stats: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(1)
    },
    statsInner: {
        width: theme.breakpoints.values.md,
        maxWidth: '100%',
        margin: '0 auto'
    }
}));

const PresentationHeader = props => {
    const {className, ...rest} = props;

    const classes = useStyles();

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <div className={classes.header}>
                <Typography
                    align="center"
                    gutterBottom
                    variant="h1"
                >
                    Привет жиртрест!
                </Typography>
                <Typography
                    align="center"
                    component="h2"
                    variant="subtitle1"
                >
                    Лорем поменьше лорем поменьше лорем поменьше ну типо заглушка для текста такая, только с
                    маленьким текстом,
                    описание лорема заголовка вот. Лорем поменьше лорем поменьше лорем поменьше ну типо заглушка для
                    текста такая.
                </Typography>
                <div className={classes.buttons}>
                    <Button
                        color="primary"
                        component="a"
                        href="*"
                        target="_blank"
                        variant="contained"
                    >
                        Начать
                    </Button>
                </div>
            </div>
            <div className={classes.mediaContainer}>
                <img
                    alt="Demos"
                    className={classes.media}
                    src="/images/presentation/header.jpg"
                />
            </div>
            <div className={classes.stats}>
                <Grid
                    alignItems="center"
                    className={classes.statsInner}
                    container
                    justify="center"
                    spacing={4}
                >
                    <Grid
                        item
                        lg={3}
                        md={4}
                        xs={12}
                    >
                        <Typography
                            color="inherit"
                            gutterBottom
                            variant="h4"
                        >
                            20
                        </Typography>
                        <Typography
                            color="inherit"
                            variant="body2"
                        >
                            Жиробасиков уже похудело
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        lg={3}
                        md={6}
                        xs={12}
                    >
                        <Typography
                            color="inherit"
                            gutterBottom
                            variant="h4"
                        >
                            20$
                        </Typography>
                        <Typography
                            color="inherit"
                            variant="body2"
                        >
                            И ты сто про скинешь сало
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        lg={3}
                        md={6}
                        xs={12}
                    >
                        <Typography
                            color="inherit"
                            gutterBottom
                            variant="h4"
                        >
                            20
                        </Typography>
                        <Typography
                            color="inherit"
                            variant="body2"
                        >
                            Челиков тебе помогут
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        lg={3}
                        md={6}
                        xs={12}
                    >
                        <div>
                            <img
                                alt="React"
                                src="/images/react.png"
                            />
                        </div>
                        <Typography
                            color="inherit"
                            variant="body2"
                        >
                            Сервис создан на React
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default PresentationHeader;
