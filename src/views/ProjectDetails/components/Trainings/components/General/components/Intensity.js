import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
    },
    margin: {
        height: theme.spacing(3),
    },
    slider: {
        marginTop: theme.spacing(3)
    }
}));

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 1,
        label: '1',
    },
    {
        value: 2,
        label: '2',
    },
    {
        value: 3,
        label: '3',
    },
    {
        value: 4,
        label: '4',
    },
    {
        value: 5,
        label: '5',
    },
    {
        value: 6,
        label: '6',
    },
    {
        value: 7,
        label: '7',
    },
    {
        value: 8,
        label: '8',
    },
    {
        value: 9,
        label: '9',
    },
    {
        value: 10,
        label: '10',
    },
];

function valuetext(value) {
    return `${value} баллов`;
}

let value = 6;

const Intensity = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography id="discrete-slider-always" gutterBottom>
                Интенсивность
            </Typography>
            <Slider
                className={classes.slider}
                defaultValue={value}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-always"
                step={1}
                marks={marks}
                valueLabelDisplay="on"
                min={0}
                max={10}
                disabled
            />
        </div>
    );
}


export default Intensity;