import React from 'react';
import clsx from 'clsx';
import moment from 'moment';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Grid, Button, ButtonGroup} from '@material-ui/core';
import {DatePicker, KeyboardDatePicker} from '@material-ui/pickers';
import CalendarTodayIcon from '@material-ui/icons/CalendarTodayOutlined';

const useStyles = makeStyles(theme => ({
    root: {},
    dates: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
}));

const Header = props => {
    const {diet, className, ...rest} = props;

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
                spacing={3}
            >
                <Grid
                    item
                    lg={9}
                    xs={12}
                >
                    <Typography
                        component="h1"
                        gutterBottom
                        variant="overline"
                    >
                        Справа нужно выбрать дату и посмотреть, что вам нужно съесть\выпить сегодня для приближения к цели!
                    </Typography>
                </Grid>
                <Grid
                    className={classes.dates}
                    item
                    lg={3}
                    xs={12}
                >
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Выберете дату"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'Изменить',
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

Header.defaultProps = {};


export default Header;
