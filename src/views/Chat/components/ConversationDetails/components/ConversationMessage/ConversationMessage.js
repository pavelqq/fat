import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Link, Avatar, colors} from '@material-ui/core';
import {useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(2)
    },
    authUser: {
        display: 'flex',
        justifyContent: 'flex-end',
        '& $body': {
            background: colors.blueGrey[100]
        }
    },
    inner: {
        display: 'flex',
        maxWidth: 500
    },
    avatar: {
        marginRight: theme.spacing(2)
    },
    body: {
        backgroundColor: colors.grey[200],
        color: theme.palette.text.primary,
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(1, 1.5)
    },
    content: {
        marginTop: theme.spacing(0.3)
    },
    image: {
        marginTop: theme.spacing(2),
        height: 'auto',
        width: 380,
        maxWidth: '100%'
    },
    footer: {
        marginTop: theme.spacing(1),
        display: 'flex',
        justifyContent: 'flex-end'
    }
}));

const ConversationMessage = props => {
    const {message, className, ...rest} = props;

    const classes = useStyles();

    const authId = useSelector(state => state.auth._id);

    const authUser = (uid, authId) => {
        return uid === authId;
    }

    return (
        <div
            {...rest}
            className={clsx(
                classes.root,
                {
                    [classes.authUser]: authUser(message.sender.uid, authId)
                },
                className
            )}
        >
            <div className={classes.inner}>
                <Avatar
                    className={classes.avatar}
                    component={RouterLink}
                    src={message.sender.profilePicture}
                    to={`/profile/${message.sender.uid}/wall`}
                />
                <div>
                    <div className={classes.body}>
                        <Typography variant="body2" color="secondary">
                            <Link
                                color="inherit"
                                component={RouterLink}
                                to={`/profile/${message.sender.uid}/wall`}
                                variant="h6"
                            >
                                {authUser(message.sender.uid, authId) ? message.sender.name : message.sender.name}
                            </Link>
                        </Typography>
                        <div className={classes.content}>
                            {message.contentType === 'image' ? (
                                <img
                                    alt="Картинка"
                                    className={classes.image}
                                    src={message.content}
                                />
                            ) : (
                                <Typography
                                    color="inherit"
                                    variant="subtitle1"
                                >
                                    {message.content}
                                </Typography>
                            )}
                        </div>
                    </div>
                    <div className={classes.footer}>
                        <Typography
                            className={classes.time}
                            variant="body2"
                        >
                            {moment(message.date).fromNow()}
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ConversationMessage;
