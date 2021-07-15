import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import {Card, colors, Grid, Slider, Typography, withStyles} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import {Line} from "react-chartjs-2";


const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            marginRight: theme.spacing(2)
        },
        paddingTop: theme.spacing(1)
    },
    bmiStatusText: {
        color: colors.red[500]
    },
    divider: {
        height: 3,
        width: '100%'
    },
    lineChart: {
        minWidth: 400,
        [theme.breakpoints.down('md')]: {
            minWidth: 300,
        },
        marginBottom: theme.spacing(2)
    }
}));

const BMISlider = withStyles({
    root: {},
    thumb: {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -12,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50%)',
    },
    track: {
        height: 3,
        borderRadius: 1,
    },
    rail: {
        backgroundImage: 'linear-gradient(to right, ' +
            '#ff0000 0%, ' +
            '#ffff00 10%, ' +
            '#00ff00 18%, ' +
            '#ffff00 30%, ' +
            '#ff0066 60%, ' +
            '#ff0000 80%, ' +
            '#800000 100% )',
        height: 15,
        borderRadius: 1,
    },
})(Slider);

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: 'Изменение ИМТ в течении проекта',
            data: [32.7, 32.4, 30.6, 28.4, 27.3, 25.7],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};


const BMI = props => {
    const {className, ...rest} = props;

    const classes = useStyles();

    const BMI = 28.7

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            >
                <Grid item>
                    <Typography
                        variant='h5'
                    >
                        ИМТ = {BMI} (кг)/(м^2)
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant='subtitle2'
                        component="h1"
                        className={classes.bmiStatusText}
                    >
                        {(Number(BMI) < 16) && 'Сильная худоба'}
                        {(16.1 < Number(BMI) && Number(BMI) < 17) && 'Умеренная худоба'}
                        {(17.1 < Number(BMI) && Number(BMI) < 18.5) && 'Легкая худоба'}
                        {(18.6 < Number(BMI) && Number(BMI) < 25) && 'Нормальный вес'}
                        {(25.1 < Number(BMI) && Number(BMI) < 30) && 'Избыточный вес'}
                        {(30.1 < Number(BMI) && Number(BMI) < 35) && 'Ожирение 1 типа'}
                        {(35.1 < Number(BMI) && Number(BMI) < 40) && 'Ожирение 2 типа'}
                        {(40.1 < Number(BMI) && Number(BMI) < 50) && 'Ожирение 3 типа'}
                    </Typography>
                </Grid>
                <Grid container>
                    <BMISlider
                        valueLabelDisplay="auto"
                        defaultValue={BMI}
                        min={0}
                        max={100}
                    />
                </Grid>
                <Divider className={classes.divider} />
                <Grid item>
                    <Typography
                        variant='subtitle2'
                        component="h1"
                    >
                        Диапазон нормального веса: 18.5 - 25 (кг)/(м^2)
                    </Typography>
                    <Typography
                        variant='subtitle2'
                        component="h1"
                    >
                        Нормальный вес для роста 187 см: 64.7 - 87.4 кг
                    </Typography>
                    <Typography
                        variant='subtitle2'
                        component="h1"
                    >
                        Весовой индекс: 11.3 (кг)/(м^3)
                    </Typography>
                </Grid>
                <Divider className={classes.divider} />
                <Grid item>
                    <Line
                        data={data}
                        options={options}
                        className={classes.lineChart}
                    />
                </Grid>
            </Grid>
        </Card>
    )
}

export default BMI;