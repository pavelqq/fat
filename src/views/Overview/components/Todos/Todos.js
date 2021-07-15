/* eslint-disable react/no-multi-comp */
import React, {useState, useEffect, useRef} from 'react';
import clsx from 'clsx';
import 'moment/locale/ru';
import moment from 'moment';
import {makeStyles} from '@material-ui/core/styles';
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Radio,
    Tooltip,
    Typography,
    colors, Grid, Fab, CircularProgress, Hidden
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ArchiveIcon from '@material-ui/icons/ArchiveOutlined';
import Label from "../../../../components/Label";
import axios from '../../../../utils/axios'
import {Link as RouterLink} from "react-router-dom";
import KeyboardArrowRightIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import Paper from '@material-ui/core/Paper';

import {Check, EventAvailable, Save, Today} from "@material-ui/icons";
import {green} from "@material-ui/core/colors";


const getLabel = todo => {
    moment().locale('ru');

    if (todo.done) {
        return null;
    }

    // if (moment(date).isBefore(moment(), 'hours')) {
    //     return (
    //         <Label color={colors.red[600]}>{`Сделать ${moment(
    //             date
    //         ).fromNow()}`}</Label>
    //     );
    // }
    //
    // if (moment(date).isSame(moment(), 'hours')) {
    //     return <Label color={colors.orange[600]}>Сделать</Label>;
    // }

    return <Label color={colors.orange[500]}>{`Сделать ${moment(todo).format('LT')}`}</Label>
};


const useStyles = makeStyles(theme => ({
    root: {},
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        position: 'relative',
        '&:before': {
            position: 'absolute',
            bottom: -8,
            left: 0,
            content: '" "',
            height: 3,
            width: 48,
            backgroundColor: theme.palette.primary.main
        }
    },
    content: {
        padding: 0
    },
    addIcon: {
        marginRight: theme.spacing(1)
    },
    done: {
        textDecoration: 'line-through',
        color: theme.palette.text.secondary
    },
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    date: {
        marginTop: theme.spacing(1)
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    fabProgress: {
        position: 'absolute',
        top: -6,
        left: 4,
        zIndex: 1,
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    opposite: {
        display: 'flex'
    }
}));

const Todos = props => {
    const {title, todos, setTodos, className, ...rest} = props;

    const classes = useStyles();

    const handleChange = (event, todo) => {
        event.persist();

        // if (!loading) {
        //     setLoading(true);
        //     timer.current = window.setTimeout(() => {
        //         setLoading(false);
        //     }, 1000);
        // }

        setTodos(todos =>
            todos.map(t => {
                if (t.id === todo.id) {
                    return {...todo, done: !todo.done};
                }

                return t;
            })
        );
    };

    // const [loading, setLoading] = useState(false);
    // const timer = useRef();
    //
    // useEffect(() => {
    //     return () => {
    //         clearTimeout(timer.current);
    //     };
    // }, []);

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <CardHeader
                action={
                    <Button
                        color="primary"
                        size="small"
                    >
                        <AddIcon className={classes.addIcon}/>
                        Посмотреть все задания
                    </Button>
                }
                title={title}
            />
            <Divider/>
            <CardContent className={classes.content}>
                <List>
                    {todos.map((todo, i) => (
                        <ListItem
                            divider={i < todos.length - 1}
                            key={todo.id}
                        >
                            <ListItemIcon>
                                <Radio
                                    checked={todo.done}
                                    onClick={event => handleChange(event, todo)}
                                />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography
                                    className={clsx({
                                        [classes.done]: todo.done
                                    })}
                                    variant="body1"
                                >
                                    {todo.title}
                                </Typography>
                            </ListItemText>
                            {getLabel(todo)}
                            <Tooltip title="Archive">
                                <IconButton>
                                    <ArchiveIcon/>
                                </IconButton>
                            </Tooltip>
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

// <>
//     <Hidden smDown>
//         <div className={classes.header}>
//             <Typography
//                 className={classes.title}
//                 variant="h5"
//             >
//                 Задания на сегодня
//             </Typography>
//         </div>
//         <div
//             {...rest}
//             className={clsx(classes.root, className)}
//         >
//             <Timeline align="alternate">
//                 {todos.map((todo, i) => (
//                     <TimelineItem key={todo.id}>
//                         <TimelineOppositeContent>
//                             <Typography variant="body2" color="textSecondary" className={classes.date}>
//                                 {getLabel(todo)}
//                                 <div className={classes.wrapper}>
//                                     <Button
//                                         variant="contained"
//                                         color="primary"
//                                         disabled={loading}
//                                         onClick={event => handleChange(event, todo)}
//                                     >
//                                         {(todo.done)
//                                             ? <><EventAvailable/>Выполнено!</>
//                                             : <><Today/>Выполнить</>}
//                                         {loading &&
//                                         <CircularProgress size={46} className={classes.fabProgress}/>
//                                         }
//                                     </Button>
//                                 </div>
//                             </Typography>
//                         </TimelineOppositeContent>
//                         <TimelineSeparator>
//                             <TimelineDot color="primary" variant={todo.done ? 'default' : 'outlined'}>
//                                 {todo.done ? <EventAvailable/> : <Today/>}
//                             </TimelineDot>
//                             {i < todos.length - 1 && <TimelineConnector/>}
//                         </TimelineSeparator>
//                         <TimelineContent>
//                             <Paper elevation={3} className={classes.paper}>
//                                 <Typography
//                                     variant="body1"
//                                     className={clsx({
//                                         [classes.done]: todo.done
//                                     }, classes.typo)}
//                                 >
//                                     {todo.title}
//                                 </Typography>
//                                 <Typography
//                                     variant="body2"
//                                     className={clsx({
//                                         [classes.done]: todo.done
//                                     }, classes.typo)}
//                                 >
//                                     {todo.title}
//                                 </Typography>
//                             </Paper>
//                         </TimelineContent>
//                     </TimelineItem>
//                 ))}
//             </Timeline>
//         </div>
//     </Hidden>
//     <Hidden mdUp>
//         <Card
//             {...rest}
//             className={clsx(classes.root, className)}
//         >
//             <CardHeader
//                 action={
//                     <Button
//                         color="primary"
//                         size="small"
//                     >
//                         <AddIcon className={classes.addIcon}/>
//                         Посмотреть все задания
//                     </Button>
//                 }
//                 title="Задания"
//             />
//             <Divider/>
//             <CardContent className={classes.content}>
//                 <List>
//                     {todos.map((todo, i) => (
//                         <ListItem
//                             divider={i < todos.length - 1}
//                             key={todo.id}
//                         >
//                             <ListItemIcon>
//                                 <Radio
//                                     checked={todo.done}
//                                     onClick={event => handleChange(event, todo)}
//                                 />
//                             </ListItemIcon>
//                             <ListItemText>
//                                 <Typography
//                                     className={clsx({
//                                         [classes.done]: todo.done
//                                     })}
//                                     variant="body1"
//                                 >
//                                     {todo.title}
//                                 </Typography>
//                             </ListItemText>
//                             {getLabel(todo)}
//                             <Tooltip title="Archive">
//                                 <IconButton>
//                                     <ArchiveIcon/>
//                                 </IconButton>
//                             </Tooltip>
//                         </ListItem>
//                     ))}
//                 </List>
//             </CardContent>
//         </Card>
//     </Hidden>
// </>

// <Card
//                 {...rest}
//                 className={clsx(classes.root, className)}
//             >
//                 <CardHeader
//                     action={
//                         <Button
//                             color="primary"
//                             size="small"
//                         >
//                             <AddIcon className={classes.addIcon}/>
//                             Посмотреть все задания
//                         </Button>
//                     }
//                     title="Задания"
//                 />
//                 <Divider/>
//                 <CardContent className={classes.content}>
//                     <List>
//                         {todos.map((todo, i) => (
//                             <ListItem
//                                 divider={i < todos.length - 1}
//                                 key={todo.id}
//                             >
//                                 <ListItemIcon>
//                                     <Radio
//                                         checked={todo.done}
//                                         onClick={event => handleChange(event, todo)}
//                                     />
//                                 </ListItemIcon>
//                                 <ListItemText>
//                                     <Typography
//                                         className={clsx({
//                                             [classes.done]: todo.done
//                                         })}
//                                         variant="body1"
//                                     >
//                                         {todo.title}
//                                     </Typography>
//                                 </ListItemText>
//                                 {getLabel(todo)}
//                                 <Tooltip title="Archive">
//                                     <IconButton>
//                                         <ArchiveIcon/>
//                                     </IconButton>
//                                 </Tooltip>
//                             </ListItem>
//                         ))}
//                     </List>
//                 </CardContent>
//             </Card>

export default Todos;