import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Intensity from "./components/Intensity";
import {Typography} from "@material-ui/core";
import clsx from "clsx";


const useStyles = makeStyles(theme => ({
    root: {
        width: 350,
    },
    desc: {
        paddingTop: theme.spacing(3)
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        marginBottom: theme.spacing(2),
    },
    pos: {
        marginBottom: 12,
    },
}));


const General = props => {

    const {className, ...rest} = props;

    const classes = useStyles();

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <CardContent>
                <Intensity/>
                <Typography
                    className={classes.desc}
                    variant="subtitle1"
                >
                    Общий тоннаж: 8970 кг за тренировку.
                </Typography>
                <Typography
                    className={classes.desc}
                    variant="subtitle2"
                >
                    Если вы не смогли полностью выполнить тренировку, то нажмите на кнопку ниже и заполните поля, где вы не сошлись с планом
                </Typography>
                <CardActions>
                    <Button size="medium" color="primary">Изменить тренировочный план</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
};


export default General;
