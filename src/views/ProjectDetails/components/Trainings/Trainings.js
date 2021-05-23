import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import ItemsTable from "../Diet/components/ItemsTable";
import {KeyboardDatePicker} from "@material-ui/pickers";
import ProteinsFatsCarbohydrates from "../Diet/components/ProteinsFatsCarbohydrates";
import General from './components/General/General'
import moment from "moment";
import EventTable from "../../../ProjectCreate/components/ProjectCalendar/components/EventTable";
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

    const [selectedDate, setSelectedDate] = React.useState(moment());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

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
                    <TrainingsTable selectedDate={selectedDate} train={train}/>
                </Grid>
                <Grid
                    className={classes.dates}
                    direction="column"
                    item
                    lg={4}
                    xs={12}
                >
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Выберете дату"
                        format="dd/MM/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'Изменить',
                        }}
                    />
                    <General className={classes.intensity} />
                </Grid>
            </Grid>
        </div>
    );
};


export default Trainings;
