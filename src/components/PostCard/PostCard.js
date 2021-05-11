import React, {useState} from 'react';
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
    Divider,
    Tooltip,
    colors
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import {Reactions, CommentBubble, CommentForm} from './components';
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActions from "@material-ui/core/CardActions";
import Collapse from '@material-ui/core/Collapse';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Gallery from "../../views/Profile/components/Gallery";


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
        backgroundPosition: 'initial'
    },
    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {},
    likeButton: {},
    likedButton: {
        color: colors.red[600]
    },
    actions: {
        display: 'flex',
        alignItems: 'center'
    }
}));

const PostCard = props => {
    const {post, className, ...rest} = props;
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [liked, setLiked] = useState(post.liked);
    const [likes, setLikes] = useState(post.likes);
    const handleLike = () => {
        setLiked(true);
        setLikes(likes => likes + 1);
    };
    const handleUnlike = () => {
        setLiked(false);
        setLikes(likes => likes - 1);
    };

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
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
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
                    variant="h6"
                >
                    {post.message}
                </Typography>
                {post.media && (
                    <div className={classes.mediaArea}>
                        <div
                            className={classes.media}
                        >
                            <Gallery/>
                        </div>
                    </div>
                )}
                <div className={classes.actions}>
                    {liked ? (
                        <IconButton
                            className={classes.likedButton}
                            onClick={handleUnlike}
                            size="small"
                        >
                            <FavoriteIcon/>
                        </IconButton>
                    ) : (
                        <Tooltip title="Нравится">
                            <IconButton
                                className={classes.likeButton}
                                onClick={handleLike}
                                size="small"
                            >
                                <FavoriteBorderIcon/>
                            </IconButton>
                        </Tooltip>
                    )}
                    <Typography
                        color="textSecondary"
                        variant="subtitle1"
                    >
                        {likes}
                    </Typography>
                    <IconButton
                        size="small"
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="Показать комментарии"
                    >
                        <Typography
                            color="textSecondary"
                            variant="subtitle1"
                        >
                            Комментарии
                        </Typography>
                        <ExpandMoreIcon/>
                    </IconButton>
                </div>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
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
                </Collapse>
            </CardContent>
        </Card>
    );
};


export default PostCard;
