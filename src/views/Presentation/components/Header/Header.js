import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Grid, Button, Divider, Link} from '@material-ui/core';
import {CheckCircleOutlined} from "@material-ui/icons";
import {green, orange} from "@material-ui/core/colors";


const useStyles = makeStyles(theme => ({
    root: {
        animation: `$myEffect 1000ms ${theme.transitions.easing.easeOut}`,
        backgroundColor: theme.palette.white
    },
    header: {
        width: theme.breakpoints.values.lg,
        maxWidth: '100%',
        margin: '0 auto',
        padding: '24px 24px',
        [theme.breakpoints.up('md')]: {
            paddingTop: '48px'
        },
    },
    test: {
        animation: `$myEffect 1000ms ${theme.transitions.easing.easeIn}`,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
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
        width: theme.breakpoints.values.lg,
        maxWidth: '75%',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '100%',
        },
        margin: '0 auto',
        zIndex: '1'
    },
    image: {
        width: '100%'
    },
    stack: {
        animation: `$myEffect 1000ms ${theme.transitions.easing.easeIn}`,
    },
    divider: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    mainDivider: {
        height: '15px',
    },
    "@keyframes myEffect": {
        "0%": {
            opacity: 0,
            transform: "translateY(-200%)"
        },
        "100%": {
            opacity: 1,
            transform: "translateY(0)"
        }
    },
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
                <div className={classes.statsInner}>
                    <Typography
                        align="center"
                        variant="overline"
                        component="h2"
                    >
                        Презентация
                    </Typography>
                    <Typography
                        align="center"
                        variant="h2"
                        component="h1"
                        gutterBottom
                    >
                        Fatty - спортивная социальная сеть
                    </Typography>
                    <Typography
                        align="center"
                        variant="body2"
                        component="h2"
                    >
                        Это проект, позволяющий людям достичь спортивных целей через подбор подходящего плана
                        тренировок и диеты, начиная от офисных работяг, заканчивая профессиональными спортсменами.
                    </Typography>
                    <Divider className={classes.divider} />
                    <Typography
                        align="center"
                        variant="overline"
                        component="h2"
                    >
                        Чтобы потестировать приложение нажмите на кнопку начать. Вы войдете под тестовым аккаунтом.
                    </Typography>
                    <Divider orientation={"vertical"} />
                    <Typography
                        align="center"
                        variant="overline"
                        component="h2"
                    >
                        Вы также можете <Link href="https://fatclient.herokuapp.com/auth/register">зарегистрироваться</Link>
                    </Typography>
                    <Divider className={classes.divider} />
                    <Grid container justifyContent="center" direction="column"
                          alignItems="center" className={classes.test}>
                        <Grid item>
                            <Typography>Тестовый Логин:</Typography>
                            <code>test@gmail.com</code>
                        </Grid>
                        <Grid item>
                            <Typography>Тестовый Пароль:</Typography>
                            <code>12345test</code>
                        </Grid>
                    </Grid>
                    <Typography
                        align="center"
                        variant="overline"
                        component="h2"
                        gutterBottom
                    >
                        Основной стек технологий при создании проекта:
                    </Typography>
                    <Grid container xs={12} className={classes.stack}>
                        <Grid container item xs={false} md={2} lg={2} direction="row"
                              justifyContent="center"
                              alignItems="center">
                            <Grid item>
                                <CheckCircleOutlined style={{color: green[500]}}/>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" component="h3">Node.js</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={false} md={2} lg={2} direction="row"
                              justifyContent="center"
                              alignItems="center">
                            <Grid item>
                                <CheckCircleOutlined style={{color: green[500]}}/>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" component="h3">Mongoose</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={false} md={2} lg={2} direction="row"
                              justifyContent="center"
                              alignItems="center">
                            <Grid item>
                                <CheckCircleOutlined style={{color: green[500]}}/>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" component="h3">Express</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={false} md={2} lg={2} direction="row"
                              justifyContent="center"
                              alignItems="center">
                            <Grid item>
                                <CheckCircleOutlined style={{color: green[500]}}/>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" component="h3">React</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={false} md={2} lg={2} direction="row"
                              justifyContent="center"
                              alignItems="center">
                            <Grid item>
                                <CheckCircleOutlined style={{color: green[500]}}/>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" component="h3">Redux</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={false} md={2} lg={2} direction="row"
                              justifyContent="center"
                              alignItems="center">
                            <Grid item>
                                <CheckCircleOutlined style={{color: green[500]}}/>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" component="h3">Material-UI</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className={classes.mediaContainer}>
                <img
                    alt="Demos"
                    className={classes.media}
                    src="/images/presentation/header.jpg"
                />
            </div>
            <Divider variant="fullWidth" light={true} className={classes.mainDivider} />
        </div>
    );
};

export default PresentationHeader;

// <Typography
//     align="center"
//     component="h2"
//     variant="h4"
// >
//     Во время пандемии человечество столкнулось с удалёнкой. Посмотри на свой мамон.
//     Вижу на твоём лице недоумевание. Да! Вот так резко. Мы все столкнулись с проблемой лишнего
//     веса.
//     И повально побежали покупать абонемент в спортзал. Приходим, тренируемся, а мамончик-то не
//     уходит.
//     Вот моя светлая головушка додумалась до такого проекта, где сообщество людей, начиная от
//     офисных
//     работяг, ребят по-спортивнее, заканчивая проффесиональными спортсменами, общаясь найти
//     идеальную
//     программу тренировки и диету.
//     Если ты настоящий гуру жирогонки, создай свой план тренировок, распиши диету и дай
//     опробовать это
//     пользователям. На основе их результатов, корректируй программу и найди лучший вариант,
//     который
//     максимально подходит каждому.
//     Если ты простой "смертный", пробуй разные планы, соревнуйся с "коллегами по цеху" и достигай
//     результата.
//     Вот в принципе вся концепция проекта.
// </Typography>

{/*<div className={classes.stats}>*/}
{/*    <Grid*/}
{/*        alignItems="center"*/}
{/*        className={classes.statsInner}*/}
{/*        container*/}
{/*        justify="center"*/}
{/*        spacing={4}*/}
{/*    >*/}
{/*        <Grid*/}
{/*            item*/}
{/*            lg={3}*/}
{/*            md={4}*/}
{/*            xs={12}*/}
{/*        >*/}
{/*            <Typography*/}
{/*                color="inherit"*/}
{/*                gutterBottom*/}
{/*                variant="h4"*/}
{/*            >*/}
{/*                */}
{/*            </Typography>*/}
{/*            <Typography*/}
{/*                color="inherit"*/}
{/*                variant="body2"*/}
{/*            >*/}
{/*                Зарегестрированных пользователей*/}
{/*            </Typography>*/}
{/*        </Grid>*/}
{/*        <Grid*/}
{/*            item*/}
{/*            lg={3}*/}
{/*            md={6}*/}
{/*            xs={12}*/}
{/*        >*/}
{/*            <Typography*/}
{/*                color="inherit"*/}
{/*                gutterBottom*/}
{/*                variant="h4"*/}
{/*            >*/}
{/*                20$*/}
{/*            </Typography>*/}
{/*            <Typography*/}
{/*                color="inherit"*/}
{/*                variant="body2"*/}
{/*            >*/}
{/*                И ты сто про скинешь сало*/}
{/*            </Typography>*/}
{/*        </Grid>*/}
{/*        <Grid*/}
{/*            item*/}
{/*            lg={3}*/}
{/*            md={6}*/}
{/*            xs={12}*/}
{/*        >*/}
{/*            <Typography*/}
{/*                color="inherit"*/}
{/*                gutterBottom*/}
{/*                variant="h4"*/}
{/*            >*/}
{/*                20*/}
{/*            </Typography>*/}
{/*            <Typography*/}
{/*                color="inherit"*/}
{/*                variant="body2"*/}
{/*            >*/}
{/*                Челиков тебе помогут*/}
{/*            </Typography>*/}
{/*        </Grid>*/}
{/*        <Grid*/}
{/*            item*/}
{/*            lg={3}*/}
{/*            md={6}*/}
{/*            xs={12}*/}
{/*        >*/}
{/*            <div>*/}
{/*                <img*/}
{/*                    alt="React"*/}
{/*                    src="/images/react.png"*/}
{/*                />*/}
{/*            </div>*/}
{/*            <Typography*/}
{/*                color="inherit"*/}
{/*                variant="body2"*/}
{/*            >*/}
{/*                Сервис создан на React*/}
{/*            </Typography>*/}
{/*        </Grid>*/}
{/*    </Grid>*/}
{/*</div>*/}