import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import {Card, colors, Grid, Slider, Typography, withStyles} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import {Line, Radar} from "react-chartjs-2";
import {ChartRadar} from "../../../ProjectDetails/components/Overview/components";


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
    },
    radarChart: {
        minWidth: 450,
        [theme.breakpoints.down('md')]: {
            minWidth: 300,
        },
        marginBottom: theme.spacing(2)
    }
}));


const data = {
    labels: ['Шея', 'Плечи', 'Грудь', 'Талия', 'Таз', 'Левый бицепс',
        'Правое предплечье', 'Левое предплечье','Правый бицепс', 'Правая кисть', 'Левая кисть',
        'Правое бедро', 'Левое бедро', 'Правая икра', 'Левая икра'],
    datasets: [
        {
            label: 'Текущие объёмы',
            data: [39, 120, 105, 88, 95, 38, 38, 33, 33, 19, 19, 58, 60, 38, 37],
            backgroundColor: 'rgb(255,99,132)',
            borderColor: 'rgba(99,120,255,0.15)',
            borderWidth: 1,
        }
    ],
};

const options = {
    scale: {
        ticks: {
            beginAtZero: true,
        },
        r: {
            angleLines: {
                display: false
            },
            suggestedMin: 0,
            suggestedMax: 130
        }
    },
};

let usersAnthropometry = {
    usersNeck: '40',
    usersShoulders: '120',
    usersChest: '110',
    usersWaist: '80',
    usersBooty: '95',
    usersLeftBiceps: '37',
    usersRightBiceps: '38',
    usersLeftHip: '59',
    usersRightHip: '60',
    usersLeftWrist: '20',
    usersRightWrist: '20',
    usersLeftForearm: '30',
    usersRightForearm: '28',
    usersLeftCalf: '38',
    usersRightCalf: '39',
}

let anthropometry = `
    Шея: ${usersAnthropometry.usersNeck},
    Плечи: ${usersAnthropometry.usersShoulders}, 
    Грудь: ${usersAnthropometry.usersChest},
    Талия: ${usersAnthropometry.usersWaist},
    Таз: ${usersAnthropometry.usersBooty},
    Левый бицепс: ${usersAnthropometry.usersLeftBiceps},
    Правый бицепс: ${usersAnthropometry.usersRightBiceps},
    Левое бедро: ${usersAnthropometry.usersLeftHip},
    Правое бедро: ${usersAnthropometry.usersRightHip},
    Левая кисть: ${usersAnthropometry.usersLeftWrist},
    Правая кисть: ${usersAnthropometry.usersRightWrist},
    Левое предплечье: ${usersAnthropometry.usersLeftForearm},
    Правое предплечье: ${usersAnthropometry.usersRightForearm},
    Левая икроножная: ${usersAnthropometry.usersLeftCalf},
    Правая икроножная: ${usersAnthropometry.usersRightCalf},
    `


const Anthropometry = props => {
    const {className, ...rest} = props;

    const classes = useStyles();

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
                    <Radar
                        className={classes.radarChart}
                        data={data}
                        options={options}
                    />
                </Grid>
                <Divider className={classes.divider} />
                <Grid item>
                    <Typography
                        variant='h5'
                        align="center"
                    >
                        {anthropometry}
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    )
}

export default Anthropometry;