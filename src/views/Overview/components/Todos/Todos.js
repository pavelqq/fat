/* eslint-disable react/no-multi-comp */
import React, {useState, useEffect} from 'react';
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
    colors
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ArchiveIcon from '@material-ui/icons/ArchiveOutlined';
import Label from "../../../../components/Label";
import axios from '../../../../utils/axios'
import {Link as RouterLink} from "react-router-dom";
import KeyboardArrowRightIcon from "@material-ui/core/SvgIcon/SvgIcon";


const getLabel = todo => {
    moment().locale('ru');

    if (todo.done) {
        return null;
    }

    if (moment(todo.deadline).isBefore(moment(), 'day')) {
        return (
            <Label color={colors.red[600]}>{`Сделать ${moment(
                todo.deadline
            ).fromNow()}`}</Label>
        );
    }

    if (moment(todo.deadline).isSame(moment(), 'day')) {
        return <Label color={colors.orange[600]}>Сделать сегодня</Label>;
    }

    return <Label>{`Сделать ${moment(todo.deadline).fromNow()}`}</Label>;
};


const useStyles = makeStyles(theme => ({
    root: {},
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginBottom: theme.spacing(2)
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
    }
}));

const Todos = props => {
    const {className, ...rest} = props;

    const classes = useStyles();
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            setTodos(todos)
        }

        const fetchTodos = () => {
            axios.get('/api/account/todos')
                .then(response => {
                    if (mounted) {
                        setTodos(response.data.todos);
                    }
                });
        };

        fetchTodos();

        return () => {
            mounted = false;
        };
    }, []);

    debugger;

    const handleChange = (event, todo) => {
        event.persist();

        setTodos(todos =>
            todos.map(t => {
                if (t.id === todo.id) {
                    return {...todo, done: !todo.done};
                }

                return t;
            })
        );
    };


    return (
        <>
            {/*<div className={classes.header}>*/}
            {/*    <Typography*/}
            {/*        className={classes.title}*/}
            {/*        variant="h5"*/}
            {/*    >*/}
            {/*        Задания на сегодня*/}
            {/*    </Typography>*/}
            {/*</div>*/}
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
                            Добавить!
                        </Button>
                    }
                    title="Задания"
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
        </>
    );
};


export default Todos;
