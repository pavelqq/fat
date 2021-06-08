import React, {useState, useEffect} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {
    Avatar,
    Typography,
    Button,
    Hidden,
    IconButton,
    Snackbar,
    Tooltip,
    colors
} from '@material-ui/core';
import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternate';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import MoreIcon from '@material-ui/icons/MoreVert';

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
        width: theme.breakpoints.values.lg,
        maxWidth: '100%',
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
        marginLeft: 'auto',
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(1)
        },
        '& > * + *': {
            marginLeft: theme.spacing(1)
        }
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
    const {currentUser, className, ...rest} = props;

    const classes = useStyles();

    const user = {
        name: 'Павел Буре',
        bio: 'Лох какой-то',
        avatar: 'https://sun9-46.userapi.com/impf/c830408/v830408400/1121ca/C9t_7tL35pk.jpg?size=960x719&quality=96&sign=0835df69212f360830dfa1f7d204df31&type=album',
        cover: 'https://sun9-9.userapi.com/impg/66sf9QM28QKH6LygEiELQFYZsKy5sn_g_wigLQ/LcRvXzMVA0o.jpg?size=1279x1920&quality=96&sign=e509acbea617fc117bb763cc32326f88&type=album',
        connectedStatus: 'not_connected'
    };

    const [connectedStatus, setConnectedStatus] = useState(user.connectedStatus); // if rejected do not show the button
    const [openSnackbar, setOpenSnackbar] = useState(false);

    useEffect(() => {
        if (connectedStatus === 'pending') {
            setOpenSnackbar(true);
        }
    }, [connectedStatus]);

    const handleConnectToggle = () => {
        setConnectedStatus(connectedStatus =>
            connectedStatus === 'not_connected' ? 'pending' : 'not_connected'
        );
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <div
                className={classes.cover}
                style={{backgroundImage: `url(${currentUser.coverPicture})`}}
            >
                <Button
                    className={classes.changeButton}
                    variant="contained"
                >
                    <AddPhotoIcon className={classes.addPhotoIcon}/>
                    Изменить фон
                </Button>
            </div>
            <div className={classes.container}>
                <Avatar
                    alt="Person"
                    className={classes.avatar}
                    // src={user.avatar}
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
                        variant="h4"
                    >
                        {currentUser.username}
                    </Typography>
                </div>
                <Hidden smDown>
                    <div className={classes.actions}>
                        <Button
                            disabled
                            color="secondary"
                            component={RouterLink}
                            to="/chat"
                            variant="contained"
                        >
                            <ChatIcon className={classes.mailIcon}/>
                            Отправить сообщение
                        </Button>
                        {connectedStatus === 'not_connected' && (
                            <Button
                                disabled
                                color="primary"
                                onClick={handleConnectToggle}
                                variant="contained"
                            >
                                <PersonAddIcon className={classes.personAddIcon}/>
                                Добавить в друзья
                            </Button>
                        )}
                        {connectedStatus === 'pending' && (
                            <Button
                                disabled
                                className={classes.pendingButton}
                                onClick={handleConnectToggle}
                                variant="contained"
                            >
                                <PersonAddIcon className={classes.personAddIcon}/>
                                Подписан
                            </Button>
                        )}
                        <Tooltip title="More options">
                            <IconButton>
                                <MoreIcon/>
                            </IconButton>
                        </Tooltip>
                    </div>
                </Hidden>
            </div>
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
                        Запрос отправлен
                    </Typography>
                }
                onClose={handleSnackbarClose}
                open={openSnackbar}
            />
        </div>
    );
};


export default Header;
