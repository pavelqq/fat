import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import {makeStyles} from '@material-ui/core/styles';
import {
    Card,
    CardHeader,
    CardContent,
    CardActionArea,
    CardMedia,
    Avatar,
    Link,
    Typography,
    Divider
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import {Reactions, CommentBubble, CommentForm} from './components';

const useStyles = makeStyles(theme => ({
    root: {},
    subheader: {
        display: 'flex',
        alignItems: 'center'
    },
    accessTimeIcon: {
        color: theme.palette.text.secondary,
        fontSize: '14px',
        height: 14,
        width: 14,
        marginRight: 6
    },
    content: {
        paddingTop: 0
    },
    message: {
        marginBottom: theme.spacing(2)
    },
    mediaArea: {
        marginBottom: theme.spacing(2)
    },
    media: {
        height: 0,
        paddingTop: '100%',
        backgroundPosition: 'initial'
    },
    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    }
}));

const PostCard = props => {
    const {post, className, ...rest} = props;
    debugger;
    const classes = useStyles();

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <CardHeader
                avatar={
                    <Avatar
                        alt="Персона"
                        className={classes.avatar}
                        component={RouterLink}
                        src={post.author.avatar}
                        to="/profile/1"
                    />
                }
                disableTypography
                subheader={
                    <div className={classes.subheader}>
                        <AccessTimeIcon className={classes.accessTimeIcon}/>
                        <Typography variant="body2">
                            {moment(post.created_at).fromNow()}
                        </Typography>
                    </div>
                }
                title={
                    <Link
                        color="textPrimary"
                        component={RouterLink}
                        to="/profile/1/"
                        variant="h6"
                    >
                        {post.author.name}
                    </Link>
                }
            />
            <CardContent className={classes.content}>
                <Typography
                    className={classes.message}
                    variant="body1"
                >
                    {post.message}
                </Typography>
                {post.media && (
                    <CardActionArea className={classes.mediaArea}>
                        <CardMedia
                            className={classes.media}
                            image={post.media}
                        />
                    </CardActionArea>
                )}
                <Reactions
                    className={classes.reactions}
                    post={post}
                />
                <Divider className={classes.divider}/>
                {post.comments && (
                    <div className={classes.comments}>
                        {post.comments.map(comment => (
                            <CommentBubble
                                comment={comment}
                                key={comment.id}
                            />
                        ))}
                    </div>
                )}
                <Divider className={classes.divider}/>
                <CommentForm/>
            </CardContent>
        </Card>
    );
};


export default PostCard;
