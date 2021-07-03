import React from 'react';
import { Radar } from 'react-chartjs-2';
import {Card, CardContent, CardHeader, Divider} from "@material-ui/core";
import GenericMoreButton from "../../../../../components/GenericMoreButton/GenericMoreButton";
import {makeStyles} from "@material-ui/core/styles";

const data = {
    labels: ['Шея', 'Плечи', 'Грудь', 'Талия', 'Таз', 'Правый бицепс', 'Левый бицепс',
        'Правое предплечье', 'Левое предплечье', 'Правая кисть', 'Левая кисть',
        'Правое бедро', 'Левое бедро', 'Правая икра', 'Левая икра'],
    datasets: [
        {
            label: 'Антропометрия',
            data: [41, 125, 110, 90, 100, 40, 39, 34, 33, 19, 19, 61, 63, 40, 39],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
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

const useStyles = makeStyles(theme => ({
    root: {},
    content: {
        padding: 0,
        '&:last-child': {
            paddingBottom: 0
        }
    },
    chartContainer: {
        padding: theme.spacing(3),
        height: 400,
        width: 400,
    },
    // chart: {
    //     height: 350
    // },
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


const RadarChart = props => {

    const {...rest} = props;

    const classes = useStyles();

    return (
        <Card
            {...rest}
        >
            <CardHeader
                action={<GenericMoreButton/>}
                title={`Антропометрия`}
            />
            <Divider/>
            <CardContent className={classes.content}>
                <div className={classes.chartContainer}>
                    <Radar data={data} options={options}/>
                </div>
            </CardContent>
        </Card>
    );
};

export default RadarChart;