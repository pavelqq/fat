import React, {useEffect, useState} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import {
    Avatar,
    Drawer,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListSubheader,
    Typography,
    Fab,
    Badge, colors
} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import StatusBullet from "../../../../components/StatusBullet";
import { v4 as uuidv4 } from 'uuid';
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../../../store/actions/chatListActions";


const useStyles = makeStyles(theme => ({
    drawer: {
        width: 275
    },
    root: {
        backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    list: {
        padding: theme.spacing(1, 3),
    },
    listItemText: {
        marginRight: theme.spacing(1)
    },
    lastActivity: {
        whiteSpace: 'nowrap'
    },
    fab: {
        position: 'fixed',
        bottom: 35,
        right: 40,
        [theme.breakpoints.down('sm')]: {
            bottom: 20,
            right: 20,
        },
        zIndex: theme.zIndex.drawer - 100
    },
    badge: {
        backgroundColor: colors.orange[400],
        '&:hover': {
            backgroundColor: colors.pink[400]
        }
    }
}));

const ChatBar = props => {
    const { className, ...rest } = props;

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    // const groups = [
    //     {
    //         id: 'important',
    //         name: 'Важные'
    //     },
    //     {
    //         id: 'friends',
    //         name: 'Друзья'
    //     }
    // ];
    // const connections = [
    //     {
    //         id: uuidv4(),
    //         name: 'Иришка Поднебесная',
    //         avatar: 'https://sun9-12.userapi.com/impf/c840322/v840322253/10c7a/J2u-lq5CHqY.jpg?size=972x1296&quality=96&sign=f08e80f955733ce9e5793559ef2dad23&type=album',
    //         active: true,
    //         lastActivity: moment().subtract(24, 'minutes'),
    //         group: 'important'
    //     },
    //     {
    //         id: uuidv4(),
    //         name: 'Александр Садилов',
    //         avatar: 'https://sun9-76.userapi.com/impf/QO13CHH3Qtnh-4Q-cNs7Q6R5PIEftoDNhQ0LDw/uANt4sMlMlE.jpg?size=2560x1920&quality=96&sign=f62d1e8f893e7e60586003873fc4b497&type=album',
    //         active: true,
    //         lastActivity: moment(),
    //         group: 'important'
    //     },
    //     {
    //         id: uuidv4(),
    //         name: 'Аня Армагеддон',
    //         avatar: '/images/avatars/avatar_5.png',
    //         active: false,
    //         lastActivity: moment().subtract(1, 'minutes'),
    //         group: 'friends'
    //     },
    //     {
    //         id: uuidv4(),
    //         name: 'Шельме Бешельме',
    //         avatar: '/images/avatars/avatar_8.png',
    //         active: true,
    //         lastActivity: moment(),
    //         group: 'friends'
    //     },
    //     {
    //         id: uuidv4(),
    //         name: 'Курт Кабан',
    //         avatar: '/images/avatars/avatar_6.png',
    //         active: true,
    //         lastActivity: moment(),
    //         group: 'friends'
    //     },
    //     {
    //         id: uuidv4(),
    //         name: 'Адам Козырной',
    //         avatar: '/images/avatars/avatar_7.png',
    //         active: false,
    //         lastActivity: moment().subtract(24, 'minutes'),
    //         group: 'friends'
    //     },
    //     {
    //         id: uuidv4(),
    //         name: 'Эмили Шевченко',
    //         avatar: '/images/avatars/avatar_9.png',
    //         active: true,
    //         lastActivity: moment(),
    //         group: 'friends'
    //     },
    //     {
    //         id: uuidv4(),
    //         name: 'Ква Кси',
    //         avatar: '/images/avatars/avatar_10.png',
    //         active: true,
    //         lastActivity: moment(),
    //         group: 'friends'
    //     },
    //     {
    //         id: uuidv4(),
    //         name: 'Сунь Хуйвчай',
    //         avatar: '/images/avatars/avatar_11.png',
    //         active: true,
    //         lastActivity: moment(),
    //         group: 'friends'
    //     },
    //     {
    //         id: uuidv4(),
    //         name: 'Маргаретт Теттчер',
    //         avatar: '/images/avatars/avatar_12.png',
    //         active: false,
    //         lastActivity: moment().subtract(2, 'days')
    //     }
    // ];

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // if (!groups && !connections) {
    //     return null;
    // }
    //
    // const onlineConnections = connections.filter(
    //     connection => connection.active
    // ).length;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    const users = useSelector(state => state.chatList)

    return (
        <>
            <Drawer
                anchor="right"
                classes={{ paper: classes.drawer }}
                elevation={1}
                onClose={handleClose}
                open={open}
                variant="temporary"
            >
                <div
                    {...rest}
                    className={clsx(classes.root, className)}
                >
                        <List
                            className={classes.list}
                            subheader={
                                <ListSubheader
                                    disableGutters
                                    disableSticky
                                >
                                    Пользователи
                                </ListSubheader>
                            }
                        >
                            {users
                                .map(user => (
                                    <ListItem
                                        disableGutters
                                        key={user._id}
                                    >
                                        <ListItemAvatar>
                                            <Avatar
                                                alt="Person"
                                                component={RouterLink}
                                                src={user.profilePicture}
                                                to={`/profile/${user._id}/wall`}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText
                                            className={classes.listItemText}
                                            disableTypography
                                            primary={
                                                <Typography
                                                    component={RouterLink}
                                                    display="block"
                                                    noWrap
                                                    to={`/profile/${user._id}/wall`}
                                                    variant="subtitle1"
                                                >
                                                    {user.name}
                                                </Typography>
                                            }
                                        />
                                        {/*{user.active ? (*/}
                                        {/*    <StatusBullet*/}
                                        {/*        color="success"*/}
                                        {/*        size="small"*/}
                                        {/*    />*/}
                                        {/*) : (*/}
                                        {/*    <Typography*/}
                                        {/*        className={classes.lastActivity}*/}
                                        {/*        variant="body2"*/}
                                        {/*    >*/}
                                        {/*        {moment(user.lastActivity).fromNow()}*/}
                                        {/*    </Typography>*/}
                                        {/*)}*/}
                                    </ListItem>
                                ))}
                        </List>
                </div>
            </Drawer>
            <span
                className={clsx(classes.fab, {
                    [classes.shiftFab]: open
                })}
            >
        <Badge
            badgeContent={users.length}
            color="error"
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
        >
          <Fab
              className={classes.badge}
              onClick={handleOpen}
          >
            <PeopleIcon />
          </Fab>
        </Badge>
      </span>
        </>
    );
};


export default ChatBar;

// <>
//     <Drawer
//         anchor="right"
//         classes={{ paper: classes.drawer }}
//         elevation={1}
//         onClose={handleClose}
//         open={open}
//         variant="temporary"
//     >
//         <div
//             {...rest}
//             className={clsx(classes.root, className)}
//         >
//             {groups.map(group => (
//                 <List
//                     className={classes.list}
//                     key={group.id}
//                     subheader={
//                         <ListSubheader
//                             disableGutters
//                             disableSticky
//                         >
//                             {group.name}
//                         </ListSubheader>
//                     }
//                 >
//                     {users
//                         .filter(connection => group.id === connection.group)
//                         .map(connection => (
//                             <ListItem
//                                 disableGutters
//                                 key={connection.id}
//                             >
//                                 <ListItemAvatar>
//                                     <Avatar
//                                         alt="Person"
//                                         component={RouterLink}
//                                         src={connection.avatar}
//                                         to="/profile/1/timeline"
//                                     />
//                                 </ListItemAvatar>
//                                 <ListItemText
//                                     className={classes.listItemText}
//                                     disableTypography
//                                     primary={
//                                         <Typography
//                                             component={RouterLink}
//                                             display="block"
//                                             noWrap
//                                             to="/profile/1/timeline"
//                                             variant="subtitle1"
//                                         >
//                                             {connection.name}
//                                         </Typography>
//                                     }
//                                 />
//                                 {connection.active ? (
//                                     <StatusBullet
//                                         color="success"
//                                         size="small"
//                                     />
//                                 ) : (
//                                     <Typography
//                                         className={classes.lastActivity}
//                                         variant="body2"
//                                     >
//                                         {moment(connection.lastActivity).fromNow()}
//                                     </Typography>
//                                 )}
//                             </ListItem>
//                         ))}
//                 </List>
//             ))}
//         </div>
//     </Drawer>
//     <span
//         className={clsx(classes.fab, {
//             [classes.shiftFab]: open
//         })}
//     >
//         <Badge
//             badgeContent={onlineConnections}
//             color="error"
//         >
//           <Fab
//               color="secondary"
//               onClick={handleOpen}
//           >
//             <PeopleIcon />
//           </Fab>
//         </Badge>
//       </span>
// </>