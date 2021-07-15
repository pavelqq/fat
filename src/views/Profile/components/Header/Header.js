import React, {useState, useEffect} from 'react';
import {Link as RouterLink, Redirect} from 'react-router-dom';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {
    Avatar,
    Typography,
    Button,
    Hidden,
    IconButton,
    Tooltip,
    colors
} from '@material-ui/core';
import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternate';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import MoreIcon from '@material-ui/icons/MoreVert';
import DoneOutlineOutlinedIcon from '@material-ui/icons/DoneOutlineOutlined';
import EditIcon from '@material-ui/icons/Edit';

import {useDispatch, useSelector} from "react-redux";
import {followUser, unfollowUser} from "../../../../store/actions/userActions";
import moment from "moment";
import {addConversation} from "../../../../store/actions/conversationActions";
import {v4 as uuidv4} from 'uuid';
import {useHistory} from "react-router";


const useStyles = makeStyles(theme => ({
    root: {},
    cover: {
        position: 'relative',
        height: 320,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        '&:before': {
            position: 'absolute',
            content: '" "',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundImage:
                'linear-gradient(-180deg, rgba(0,0,0,0.00) 58%, rgba(0,0,0,0.32) 100%)'
        },
        '&:hover': {
            '& $changeButton': {
                visibility: 'visible'
            }
        }
    },
    changeButton: {
        visibility: 'hidden',
        position: 'absolute',
        bottom: theme.spacing(3),
        right: theme.spacing(3),
        backgroundColor: colors.blueGrey[900],
        color: theme.palette.white,
        [theme.breakpoints.down('md')]: {
            top: theme.spacing(3),
            bottom: 'auto'
        },
        '&:hover': {
            backgroundColor: colors.blueGrey[900]
        }
    },
    addPhotoIcon: {
        marginRight: theme.spacing(1)
    },
    container: {
        padding: theme.spacing(2, 3),
        margin: '0 auto',
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    avatar: {
        border: `2px solid ${theme.palette.white}`,
        height: 130,
        width: 130,
        top: -60,
        left: theme.spacing(3),
        position: 'absolute'
    },
    details: {
        marginLeft: 150,
        flex: "auto"
    },
    actions: {
        // marginLeft: 'auto',
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(1)
        },
        // '& > * + *': {
        //     marginLeft: theme.spacing(1)
        // }
    },
    actionButtons: {
        margin: theme.spacing(1),
    },
    moreIcon: {
        flex: "auto"
    },
    pendingButton: {
        color: theme.palette.white,
        backgroundColor: colors.red[600],
        '&:hover': {
            backgroundColor: colors.red[900]
        }
    },
    personAddIcon: {
        marginRight: theme.spacing(1)
    },
    mailIcon: {
        marginRight: theme.spacing(1)
    }
}));

const Header = props => {
    const {className, ...rest} = props;

    const classes = useStyles();

    const currentUser = useSelector((state) => state.userById);
    const AuthedUser = useSelector(state => state.auth)

    let followBool;
    try {
        followBool = Boolean(AuthedUser.followings.indexOf(currentUser?._id))
    } catch (e) {
        console.log('Ошибка: ' + e)
    }

    const [followed, setFollowed] = useState(
        followBool
    );

    const dispatch = useDispatch();
    const history = useHistory();

    const handleFollowUser = async () => {
        try {
            if (followed) {
                dispatch(unfollowUser(AuthedUser._id, currentUser._id))
            } else {
                dispatch(followUser(AuthedUser._id, currentUser._id))
            }
            setFollowed(!followed);
        } catch (err) {
        }
    }

    const handleConversation = async () => {
        let newConversation = {
            date: Date.now(),
            conversationId: uuidv4(),
            firstUser: {
                uid: AuthedUser._id,
                name: AuthedUser.name,
                profilePicture: AuthedUser.profilePicture
            },
            secondUser: {
                uid: currentUser._id,
                name: currentUser.name,
                profilePicture: currentUser.profilePicture
            }
        }
        dispatch(addConversation(newConversation))
        history.push('/chat')
    }

    //const handleChangeCover = () => {};

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <div
                className={classes.cover}
                style={{backgroundImage: `url(${currentUser.coverPicture})`}}
            >
                {/*<Button*/}
                {/*    className={classes.changeButton}*/}
                {/*    variant="contained"*/}
                {/*    onClick={handleChangeCover}*/}
                {/*>*/}
                {/*    <AddPhotoIcon className={classes.addPhotoIcon}/>*/}
                {/*    Изменить фон*/}
                {/*</Button>*/}
            </div>
            <div className={classes.container}>
                <Avatar
                    alt="Person"
                    className={classes.avatar}
                    src={currentUser.profilePicture}
                />
                <div className={classes.details}>
                    <Typography
                        component="h2"
                        variant="overline"
                    >
                        {currentUser.bio}
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h2"
                    >
                        {currentUser.name}
                    </Typography>
                    <Typography
                        component="h2"
                        variant="body1"
                    >
                        {currentUser.from}, {currentUser.city}, {moment(currentUser.age).format("LL")}
                    </Typography>
                </div>
                {AuthedUser._id !== currentUser._id && (
                    <Hidden>
                        <div className={classes.actions}>
                            <Button
                                className={classes.actionButtons}
                                color="secondary"
                                onClick={handleConversation}
                                variant="contained"
                            >
                                <ChatIcon className={classes.mailIcon}/>
                                Отправить сообщение
                            </Button>
                            <Button
                                className={classes.actionButtons}
                                color="primary"
                                variant="contained"
                                onClick={handleFollowUser}
                            >
                                {followed ? <DoneOutlineOutlinedIcon className={classes.personAddIcon}/>
                                    : <PersonAddIcon className={classes.personAddIcon}/>}
                                {followed ? "Вы подписаны" : "Подписаться"}
                            </Button>
                        </div>
                    </Hidden>
                )}
                {/*{AuthedUser._id !== currentUser._id && (*/}
                {/*    <Hidden mdUp>*/}
                {/*        <div className={clsx(classes.actions, classes.moreIcon)}>*/}
                {/*            <Tooltip title="Опции">*/}
                {/*                <IconButton>*/}
                {/*                    <MoreIcon/>*/}
                {/*                </IconButton>*/}
                {/*            </Tooltip>*/}
                {/*        </div>*/}
                {/*    </Hidden>*/}
                {/*)}*/}
                {AuthedUser._id === currentUser._id && (
                    <div className={classes.actions}>
                        <Button
                            className={classes.actionButtons}
                            color="primary"
                            component={RouterLink}
                            to="/settings/general"
                            variant="outlined"
                        >
                            <EditIcon className={classes.mailIcon}/>
                            Редактировать профиль
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};


export default Header;
