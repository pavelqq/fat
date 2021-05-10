import React from 'react';
import clsx from 'clsx';
import {Doughnut} from 'react-chartjs-2';
import {makeStyles, useTheme} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        position: 'relative'
    }
}));

const Chart = props => {
    const {data: dataProp, className, ...rest} = props;

    const classes = useStyles();
    const theme = useTheme();

    const data = {
        datasets: [
            {
                data: [],
                backgroundColor: [],
                borderWidth: 8,
                borderColor: theme.palette.white,
                hoverBorderColor: theme.palette.white
            }
        ],
        labels: []
    };

    for (const item of dataProp) {
        data.datasets[0].data.push(item.value);
        data.datasets[0].backgroundColor.push(item.color);
        data.labels.push(item.label);
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        cutoutPercentage: 80,
        legend: {
            display: false
        },
        layout: {
            padding: 0
        },
        tooltips: {
            enabled: true,
            mode: 'index',
            intersect: false,
            caretSize: 10,
            yPadding: 20,
            xPadding: 20,
            borderWidth: 1,
            borderColor: theme.palette.divider,
            backgroundColor: theme.palette.white,
            titleFontColor: theme.palette.text.primary,
            bodyFontColor: theme.palette.text.secondary,
            footerFontColor: theme.palette.text.secondary,
            callbacks: {
                label: function (tooltipItem, data) {
                    const label = data['labels'][tooltipItem['index']];
                    const value = data['datasets'][0]['data'][tooltipItem['index']];

                    return `${label}: ${value}%`;
                }
            }
        }
    };

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Doughnut
                data={data}
                options={options}
            />
        </div>
    );
};


export default Chart;
