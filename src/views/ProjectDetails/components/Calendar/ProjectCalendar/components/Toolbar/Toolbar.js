import React from 'react';
import clsx from 'clsx';
import moment from 'moment';
import {makeStyles} from '@material-ui/core/styles';
import {
    Grid,
    Hidden,
    Typography,
    Tooltip,
    ButtonGroup,
    IconButton,
    Button
} from '@material-ui/core';
import ViewConfigIcon from '@material-ui/icons/ViewComfyOutlined';
import ViewWeekIcon from '@material-ui/icons/ViewWeekOutlined';
import ViewDayIcon from '@material-ui/icons/ViewDayOutlined';
import ViewAgendaIcon from '@material-ui/icons/ViewAgendaOutlined';
import {ArrowBack, ArrowForward} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    root: {},
    addEvent: {
        [theme.breakpoints.down('xs')]: {},
    },
}));

const Toolbar = props => {
    const {
        date,
        view,
        editMode,
        titlePage,
        onDatePrev,
        onDateNext,
        onEventAdd,
        onViewChange,
        onDateToday,
        className,
        ...rest
    } = props;

    const classes = useStyles();

    const viewOptions = [
        {
            label: 'Месяц',
            value: 'dayGridMonth',
            icon: ViewConfigIcon
        },
        // {
        //     label: 'Неделя',
        //     value: 'timeGridWeek',
        //     icon: ViewWeekIcon
        // },
        // {
        //     label: 'День',
        //     value: 'timeGridDay',
        //     icon: ViewDayIcon
        // },
        {
            label: 'Задачи дня',
            value: 'listWeek',
            icon: ViewAgendaIcon
        }
    ];

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Grid
                alignItems="flex-end"
                container
                justify="space-between"
                spacing={1}
            >
                <Grid item>
                    {/*<Typography*/}
                    {/*    component="h2"*/}
                    {/*    gutterBottom*/}
                    {/*    variant="overline"*/}
                    {/*>*/}
                    {/*    Календарь задач*/}
                    {/*</Typography>*/}
                    <Typography
                        component="h1"
                        variant="overline"
                    >
                        {props.editMode
                            ? `${props.titlePage}. Режим редактирования`
                            : `${props.titlePage}. Режим просмотра`
                        }
                    </Typography>
                </Grid>
                {/*<Hidden smDown>*/}
                {/*    {props.editMode && (*/}
                {/*        <Grid item>*/}
                {/*            <Button*/}
                {/*                color="primary"*/}
                {/*                onClick={onEventAdd}*/}
                {/*                variant="contained"*/}
                {/*                className={classes.addEvent}*/}
                {/*            >*/}
                {/*                Добавить событие*/}
                {/*            </Button>*/}
                {/*        </Grid>*/}
                {/*    )}*/}
                {/*</Hidden>*/}
            </Grid>
            <Grid
                alignItems="center"
                container
                justify="space-between"
                spacing={1}
            >
                <Grid item>
                    <ButtonGroup>
                        <Button onClick={onDatePrev}><ArrowBack/></Button>
                        <Button onClick={onDateToday}>Сегодня</Button>
                        <Button onClick={onDateNext}><ArrowForward/></Button>
                    </ButtonGroup>
                </Grid>
                <Hidden smDown>
                    <Grid item>
                        <Typography variant="h4">
                            {`Дата: ${date}`}
                        </Typography>
                    </Grid>
                    <Grid item>
                        {viewOptions.map(viewOption => {
                            const Icon = viewOption.icon;

                            return (
                                <Tooltip
                                    key={viewOption.value}
                                    title={viewOption.label}
                                >
                                    <IconButton
                                        color={viewOption.value === view ? 'primary' : 'default'}
                                        onClick={() => onViewChange(viewOption.value)}
                                    >
                                        <Icon/>
                                    </IconButton>
                                </Tooltip>
                            );
                        })}
                    </Grid>
                </Hidden>
                {props.editMode && (
                    <Grid item>
                        <Button
                            color="primary"
                            onClick={onEventAdd}
                            variant="contained"
                            className={classes.addEvent}
                        >
                            Добавить событие
                        </Button>
                    </Grid>
                )}
            </Grid>
        </div>
    );
};


export default Toolbar;
