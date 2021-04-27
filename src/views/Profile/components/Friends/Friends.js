import React, {useState, useEffect} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
// import _ from 'lodash';
// import PerfectScrollbar from 'react-perfect-scrollbar';
import {makeStyles} from '@material-ui/core/styles';
import {
    Avatar,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Input,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Snackbar,
    Typography,
    colors
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CheckIcon from '@material-ui/icons/Check';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { v4 as uuidv4 } from 'uuid';
import axios from '../../../../utils/axios';
import ChatIcon from '@material-ui/icons/ChatOutlined';


const useStyles = makeStyles(theme => ({
    root: {

    },
    content: {
        paddingTop: 0
    },
    search: {
        padding: theme.spacing(2, 3),
        display: 'flex',
        alignItems: 'center'
    },
    searchIcon: {
        color: theme.palette.text.secondary
    },
    searchInput: {
        marginLeft: theme.spacing(1),
        color: theme.palette.text.secondary,
        fontSize: '14px'
    },
    avatar: {
        height: 60,
        width: 60
    },
    listItem: {
        flexWrap: 'wrap'
    },
    listItemText: {
        marginLeft: theme.spacing(2)
    },
    sendButton: {
        marginRight: theme.spacing(2)
    },
    connectButton: {
        marginRight: theme.spacing(2)
    },
    pendingButton: {
        marginRight: theme.spacing(2),
        color: theme.palette.white,
        backgroundColor: colors.red[600],
        '&:hover': {
            backgroundColor: colors.red[900]
        }
    },
    connectedButton: {
        marginRight: theme.spacing(2),
        color: theme.palette.white,
        backgroundColor: colors.green[600],
        '&:hover': {
            backgroundColor: colors.green[900]
        }
    },
    buttonIcon: {
        marginRight: theme.spacing(1)
    },
}));

const Friends = props => {
    const {className, ...rest} = props;

    const classes = useStyles();
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const connections = [
        {
            id: uuidv4(),
            name: 'Катя Танкова',
            avatar: '/images/avatars/avatar_2.png',
            common: 12,
            status: 'connected'
        },
        {
            id: uuidv4(),
            name: 'Чао Мао',
            avatar: '/images/avatars/avatar_3.png',
            common: 10,
            status: 'connected'
        },
        {
            id: uuidv4(),
            name: 'Алиса Ройзман',
            avatar: '/images/avatars/avatar_4.png',
            common: 8,
            status: 'connected'
        },
        {
            id: uuidv4(),
            name: 'Адам Денисов',
            avatar: '/images/avatars/avatar_7.png',
            common: 5,
            status: 'connected'
        },
        {
            id: uuidv4(),
            name: 'Анастас Грушев',
            avatar: '/images/avatars/avatar_8.png',
            common: 1,
            status: 'connected'
        }
    ];

    // const [connections, setConnections] = useState([]);
    //
    // useEffect(() => {
    //     let mounted = true;
    //
    //     const fetchConnections = () => {
    //         axios.get('/api/users/1/connections').then(response => {
    //             if (mounted) {
    //                 setConnections(response.data.connections);
    //             }
    //         });
    //     };
    //
    //     fetchConnections();
    //
    //     return () => {
    //         mounted = false;
    //     };
    // }, []);

    const handleConnectToggle = id => {
      // setConnections(connections => {
      //   const newConnections = _.map(connections, _.clone);
      //
      //   return newConnections.map(connection => {
      //     if (connection.id === id) {
      //       connection.status =
      //       connection.status =
      //         connection.status === 'connected' || connection.status === 'pending'
      //           ? 'not_connected'
      //           : 'pending';
      //
      //       if (connection.status === 'pending') {
      //         setOpenSnackbar(true);
      //       }
      //     }
      //
      //     return connection;
      //   });
      // });
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <CardHeader title="Друзья"/>
            <Divider/>
            <div className={classes.search}>
                <SearchIcon
                    className={classes.searchIcon}
                    color="inherit"
                />
                <Input
                    className={classes.searchInput}
                    color="inherit"
                    disableUnderline
                    placeholder="Искать людей и планы"
                />
            </div>
            <Divider/>
            <CardContent className={classes.content}>
                <div>
                    <List disablePadding>
                        {connections.map((connection, i) => (
                            <ListItem
                                className={classes.listItem}
                                divider={i < connections.length - 1}
                                key={connection.id}
                                alignItems="flex-start"
                            >
                                <ListItemAvatar>
                                    <Avatar
                                        alt="Аватарка"
                                        className={classes.avatar}
                                        component={RouterLink}
                                        src={connection.avatar}
                                        to="/profile/1/timeline"
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    className={classes.listItemText}
                                    primary={connection.name}
                                    secondary={`${connection.common} друзей`}
                                />
                                <Button
                                    align=""
                                    color="secondary"
                                    component={RouterLink}
                                    to="/chat"
                                    variant="contained"
                                    className={classes.sendButton}
                                >
                                    <ChatIcon className={classes.buttonIcon}/>
                                    Отправить сообщение
                                </Button>
                                {connection.status === 'not_connected' && (
                                    <Button
                                        className={classes.connectButton}
                                        onClick={() => handleConnectToggle(connection.id)}
                                        size="small"
                                        variant="contained"
                                    >
                                        <PersonAddIcon className={classes.buttonIcon}/>
                                        Добавить в друзья
                                    </Button>
                                )}
                                {connection.status === 'pending' && (
                                    <Button
                                        className={classes.pendingButton}
                                        onClick={() => handleConnectToggle(connection.id)}
                                        size="small"
                                        variant="contained"
                                    >
                                        <PersonAddIcon className={classes.buttonIcon}/>
                                        Подписан
                                    </Button>
                                )}
                                {connection.status === 'connected' && (
                                    <Button
                                        className={classes.connectedButton}
                                        onClick={() => handleConnectToggle(connection.id)}
                                        size="small"
                                        variant="contained"
                                    >
                                        <CheckIcon className={classes.buttonIcon}/>
                                        В друзьях
                                    </Button>
                                )}
                            </ListItem>
                        ))}
                    </List>
                </div>
            </CardContent>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                autoHideDuration={6000}
                message={
                    <Typography
                        color="inherit"
                        variant="h6"
                    >
                        Отправить запрос в друзья
                    </Typography>
                }
                onClose={handleSnackbarClose}
                open={openSnackbar}
            />
        </Card>
    );
};


export default Friends;
