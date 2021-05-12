import React, { useState, useRef, useEffect } from 'react';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timelinePlugin from '@fullcalendar/timeline';
import { makeStyles } from '@material-ui/core/styles';
import {
    Modal,
    Card,
    CardContent,
    colors,
    useTheme,
    useMediaQuery
} from '@material-ui/core';
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';

import axios from '../../../../utils/axios';
import { AddEditEvent, Toolbar } from './components';


const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        padding: theme.spacing(3),
        '& .fc-unthemed td': {
            borderColor: theme.palette.divider
        },
        '& .fc-widget-header': {
            backgroundColor: colors.grey[50]
        },
        '& .fc-axis': {
            ...theme.typography.body2
        },
        '& .fc-list-item-time': {
            ...theme.typography.body2
        },
        '& .fc-list-item-title': {
            ...theme.typography.body1
        },
        '& .fc-list-heading-main': {
            ...theme.typography.h6
        },
        '& .fc-list-heading-alt': {
            ...theme.typography.h6
        },
        '& .fc th': {
            borderColor: theme.palette.divider
        },
        '& .fc-day-header': {
            ...theme.typography.subtitle2,
            fontWeight: 500,
            color: theme.palette.text.secondary,
            padding: theme.spacing(1),
            backgroundColor: colors.grey[50]
        },
        '& .fc-day-top': {
            ...theme.typography.body2
        },
        '& .fc-highlight': {
            backgroundColor: colors.blueGrey[50]
        },
        '& .fc-event': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            borderWidth: 2,
            opacity: 0.9,
            '& .fc-time': {
                ...theme.typography.h6,
                color: 'inherit'
            },
            '& .fc-title': {
                ...theme.typography.body1,
                color: 'inherit'
            }
        },
        '& .fc-list-empty': {
            ...theme.typography.subtitle1
        }
    },
    card: {
        marginTop: theme.spacing(3)
    }
}));


const ProjectCalendar = () => {
    const classes = useStyles();
    const calendarRef = useRef(null);
    const theme = useTheme();
    const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));
    const [view, setView] = useState(mobileDevice ? 'listWeek' : 'dayGridMonth');
    const [date, setDate] = useState(moment('2019-07-30 08:00:00').toDate());
    const [events, setEvents] = useState([]);
    const [eventModal, setEventModal] = useState({
        open: false,
        event: null
    });

    useEffect(() => {
        let mounted = true;

        const fetchEvents = () => {
            if (mounted) {
                axios
                    .get('/api/calendar')
                    .then(response => setEvents(response.data.events));
            }
        };

        fetchEvents();

        return () => {
            mounted = false;
        };
    }, []);

    useEffect(() => {
        const calendarApi = calendarRef.current.getApi();
        const newView = mobileDevice ? 'listWeek' : 'dayGridMonth';

        calendarApi.changeView(newView);
        setView(newView);
    }, [mobileDevice]);

    const handleEventClick = info => {
        const selected = events.find(event => event.id === info.event.id);

        setEventModal({
            open: true,
            event: selected
        });
    };

    const handleEventNew = () => {
        setEventModal({
            open: true,
            event: null
        });
    };

    const handleEventDelete = event => {
        setEvents(events => events.filter(e => e.id !== event.id));
        setEventModal({
            open: false,
            event: null
        });
    };

    const handleModalClose = () => {
        setEventModal({
            open: false,
            event: null
        });
    };

    const handleEventAdd = event => {
        setEvents(events => [...events, event]);
        setEventModal({
            open: false,
            event: null
        });
    };

    const handleEventEdit = event => {
        setEvents(events => events.map(e => (e.id === event.id ? event : e)));
        setEventModal({
            open: false,
            event: null
        });
    };

    const handleDateToday = () => {
        const calendarApi = calendarRef.current.getApi();

        calendarApi.today();
        setDate(calendarApi.getDate());
    };

    const handleViewChange = view => {
        const calendarApi = calendarRef.current.getApi();

        calendarApi.changeView(view);
        setView(view);
    };

    const handleDatePrev = () => {
        const calendarApi = calendarRef.current.getApi();

        calendarApi.prev();
        setDate(calendarApi.getDate());
    };

    const handleDateNext = () => {
        const calendarApi = calendarRef.current.getApi();

        calendarApi.next();
        setDate(calendarApi.getDate());
    };

    return (
        <div
            className={classes.root}
        >
            <Toolbar
                date={date}
                onDateNext={handleDateNext}
                onDatePrev={handleDatePrev}
                onDateToday={handleDateToday}
                onEventAdd={handleEventNew}
                onViewChange={handleViewChange}
                view={view}
            />
            <Card className={classes.card}>
                <CardContent>
                    <FullCalendar
                        locale={'ru'}
                        schedulerLicenseKey={'GPL-My-Project-Is-Open-Source'}
                        allDayMaintainDuration
                        defaultDate={date}
                        defaultView={view}
                        droppable
                        editable
                        eventClick={handleEventClick}
                        eventResizableFromStart
                        events={events}
                        header={false}
                        height={800}
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin,
                            timelinePlugin
                        ]}
                        ref={calendarRef}
                        rerenderDelay={10}
                        selectable
                        weekends
                    />
                </CardContent>
            </Card>
            <Modal
                onClose={handleModalClose}
                open={eventModal.open}
            >
                <AddEditEvent
                    event={eventModal.event}
                    onAdd={handleEventAdd}
                    onCancel={handleModalClose}
                    onDelete={handleEventDelete}
                    onEdit={handleEventEdit}
                />
            </Modal>
        </div>
    );
};


export default ProjectCalendar;
