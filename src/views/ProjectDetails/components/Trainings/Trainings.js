import React, {useState} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import {KeyboardDatePicker} from "@material-ui/pickers";
import General from './components/General/General'
import moment from "moment";
import TrainingsTable from "./components/TrainingsTable";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginLeft: theme.spacing(2)
    },
    dates: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
    },
    pfc: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    desc: {
        margin: theme.spacing(3)
    },
    intensity: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
}));

const Trainings = props => {
    const {train, className, ...rest} = props;

    const classes = useStyles();

    const [selectedDate, setDate] = useState(moment());
    const [inputValue, setInputValue] = useState(moment().format("DD/MM/YYYY"));
    // const [selectedDate, setSelectedDate] = useState(moment().format("DD/MM/YYYY"));

    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };

    debugger;
    let first = train[0].date;
    let last = train[train.length - 1].date
    debugger;

    const onDateChange = (date, value) => {
        setDate(date);
        setInputValue(value);
    };

    const dateFormatter = str => {
        return str;
    };

    let currentTrain = train.find(e => e.date === inputValue);

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Grid
                container
                justify="space-between"
                spacing={2}
            >
                <Grid
                    item
                    direction="column"
                    lg={8}
                    xs={12}
                >
                    <Typography variant="subtitle2" className={classes.desc}>
                        Здесь можно посмотреть подробную информацию про ваш тренировочный план: упражнения, число подходов, вес снаряда и т.д.
                    </Typography>
                    <Typography variant="subtitle2" className={classes.desc}>
                        Выберете дату в форме справа для начала.
                    </Typography>
                    <TrainingsTable
                        selectedDate={selectedDate}
                        train={currentTrain ? currentTrain : null}
                    />
                </Grid>
                <Grid
                    className={classes.dates}
                    direction="column"
                    item
                    lg={4}
                    xs={12}
                >
                    <KeyboardDatePicker
                        value={selectedDate}
                        format="DD/MM/YYYY"
                        inputValue={inputValue}
                        onChange={onDateChange}
                        rifmFormatter={dateFormatter}
                        minDate={first.toString()}
                        maxDate={last.toString()}
                    />
                    <General className={classes.intensity} />
                </Grid>
            </Grid>
        </div>
    );
};

export default Trainings;
