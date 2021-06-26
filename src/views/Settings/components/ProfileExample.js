import React, {useEffect} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {
    Avatar,
    Typography,
    Button,
    Hidden,
    colors
} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import EditIcon from '@material-ui/icons/Edit';

import {useDispatch, useSelector} from "react-redux";
import {getProfileById} from "../../../store/actions/userActions";


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
    avatarSmall: {
        border: `2px solid ${theme.palette.white}`,
        height: 100,
        width: 100,
        top: -60,
        left: theme.spacing(3),
        position: 'absolute'
    },
    details: {
        marginLeft: 150,
        flex: "auto"
    },
    detailsSmall: {
        marginLeft: 100,
        flex: "auto"
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

const ProfileExample = props => {
    const {className, ...rest} = props;

    const classes = useStyles();

    const dispatch = useDispatch();

    const authUser = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(getProfileById(authUser._id))
    }, [authUser._id, dispatch])

    const currentUser = useSelector(state => state.userById)

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <div
                className={classes.cover}
                style={{backgroundImage: `url(${currentUser.coverPicture})`}}
            />
            <Hidden smDown>
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
                            {currentUser.from}, {currentUser.city}
                        </Typography>
                    </div>
                </div>
            </Hidden>
            <Hidden mdUp>
                <div className={classes.container}>
                    <Avatar
                        alt="Person"
                        className={classes.avatarSmall}
                        src={currentUser.profilePicture}
                    />
                    <div className={classes.detailsSmall}>
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
                            {currentUser.from}, {currentUser.city}
                        </Typography>
                    </div>
                </div>
            </Hidden>
        </div>
    );
};


export default ProfileExample;
