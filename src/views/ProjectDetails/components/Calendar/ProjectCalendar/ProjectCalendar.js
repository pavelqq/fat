import React, {useState, useRef, useEffect} from 'react';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timelinePlugin from '@fullcalendar/timeline';
import {makeStyles} from '@material-ui/core/styles';
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

import {AddEditEvent, Toolbar} from './components';

import {v4 as uuidv4} from 'uuid';
import {generateRandomColor} from "../../../../../utils/generateRandomColor";
import {useDispatch, useSelector} from "react-redux";
import {getProjectDietEvents, getProjectTrainingsEvents} from "../../../../../store/actions/eventActions";


const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
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
        marginTop: theme.spacing(1),
        borderRadius: '1%',
    }
}));


const ProjectCalendar = props => {
    const {editMode, titlePage, type, projectId} = props
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        if(type === 'trainings') {
            dispatch(getProjectTrainingsEvents(projectId))
        } else {
            dispatch(getProjectDietEvents(projectId))
        }
    }, [projectId])

    const eventsList = useSelector(state => state.eventsList)

    const calendarRef = useRef(null);
    const theme = useTheme();
    const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));
    const [view, setView] = useState(mobileDevice ? 'listWeek' : 'dayGridMonth');
    const [date, setDate] = useState(moment().format('DD-MM-YYYY'));
    const [events, setEvents] = useState([...eventsList]);

    useEffect(() => {
        setEvents(eventsList)
    }, [eventsList])

    const [eventModal, setEventModal] = useState({
        open: false,
        event: null
    });

    // useEffect(() => {
    //     let mounted = true;
    //
    //     const fetchEvents = () => {
    //         if (mounted) {
    //             axios
    //                 .get('/api/calendar')
    //                 .then(response => setEvents(response.data.events));
    //         }
    //     };
    //
    //     fetchEvents();
    //
    //     return () => {
    //         mounted = false;
    //     };
    // }, []);

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

    const handleNothing = () => {
        return null
    }

    return (
        <div
            className={classes.root}
        >
            <Toolbar
                date={date}
                onDateNext={handleDateNext}
                onDatePrev={handleDatePrev}
                onDateToday={handleDateToday}
                onEventAdd={editMode ? handleEventNew : handleNothing}
                onViewChange={handleViewChange}
                view={view}
                editMode={props.editMode}
                titlePage={props.titlePage}
            />
            <Card className={classes.card}>
                {/*<CardContent>Раньше календарь был внутри контента</CardContent>*/}
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
                    headerToolbar={false}
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
                    editMode={editMode}
                    type={type}
                    projectId={projectId}
                />
            </Modal>
        </div>
    );
};


export default ProjectCalendar;


//{
//             id: uuidv4(),
//             type: 'trainings',
//             projectId: 'projectId',
//             authorId: 'userId',
//             title: 'Баллон гавна',
//             desc: 'Описание задания',
//             allDay: true,
//             color: colors.green['700'], //generateRandomColor() рандомный цвет? можно как опцию
//             start: moment('2021-07-01').toDate(),
//         },
//         {
//             id: uuidv4(),
//             type: 'trainings',
//             projectId: 'projectId',
//             authorId: 'userId',
//             title: 'Моча съела гавно',
//             desc: 'Inform about new contract',
//             allDay: false,
//             color: colors.green['700'],
//             start: moment('2021-07-01 16:55:00').toDate(),
//             end: moment('2021-07-01 17:02:00').toDate()
//         },
//         {
//             id: uuidv4(),
//             type: 'trainings',
//             projectId: 'projectId',
//             authorId: 'userId',
//             title: 'Дрисня',
//             desc: 'Discuss about new partnership',
//             allDay: false,
//             color: colors.amber['700'],
//             start: moment('2021-07-03 08:55:00').toDate(),
//             end: moment('2021-07-04 15:02:00').toDate()
//         },
//         {
//             id: uuidv4(),
//             type: 'trainings',
//             projectId: 'projectId',
//             authorId: 'userId',
//             title: 'Хочу пиццы',
//             desc: 'Prepare documentation',
//             allDay: true,
//             color: colors.orange['700'],
//             start: moment('2021-07-14 16:55:00').toDate()
//         },
//         {
//             id: uuidv4(),
//             type: 'trainings',
//             projectId: 'projectId',
//             authorId: 'userId',
//             title: 'Тест1',
//             desc: 'Meet with team to discuss',
//             allDay: true,
//             color: colors.yellow['700'],
//             start: moment('2021-07-18 07:00:00').toDate()
//         },
//         {
//             id: uuidv4(),
//             type: 'trainings',
//             projectId: 'projectId',
//             authorId: 'userId',
//             title: 'Тест2',
//             desc: 'Sorry, John',
//             allDay: false,
//             color: colors.blue['700'],
//             start: moment('2021-07-20 08:55:00').toDate(),
//             end: moment('2021-07-20 09:30:00').toDate()
//         },
//         {
//             id: uuidv4(),
//             type: 'trainings',
//             projectId: 'projectId',
//             authorId: 'userId',
//             title: 'Саня',
//             desc: 'Discuss about the new project',
//             allDay: true,
//             color: colors.purple['700'],
//             start: moment('2021-07-03 08:00:00').toDate(),
//             end: moment('2021-07-07 08:00:00').toDate()
//         },
//         {
//             id: uuidv4(),
//             type: 'trainings',
//             projectId: 'projectId',
//             userId: 'userId',
//             title: 'Лоликс',
//             desc: 'Get a new quote for the payment processor',
//             allDay: false,
//             color: colors.red['700'],
//             start: moment('2021-07-05 08:00:00').toDate(),
//             end: moment('2021-07-06 09:00:00').toDate()
//         }