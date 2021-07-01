import React, {useRef, useState} from 'react';
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
    colors, MenuItem, Menu
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import {Reactions, CommentBubble, CommentForm, OptionsPopover} from './components';
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActions from "@material-ui/core/CardActions";
import Collapse from '@material-ui/core/Collapse';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Gallery from "../../views/Profile/components/Gallery";
import {convertFromRaw, Editor, EditorState} from "draft-js";
import {likeDislikePost} from "../../store/actions/postActions";
import {useDispatch, useSelector} from "react-redux";


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
        paddingTop: 0,
    },
    editorField: {
        marginBottom: theme.spacing(1)
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

const PostCard = (props) => {
    const { scrollRef, posts, post, setPost, className, ...rest } = props;
    const classes = useStyles();

    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const dispatch = useDispatch();
    const authUserId = useSelector(state => state.auth._id)

    function likedByUser(userId) {
        return userId === authUserId;
    }

    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(post.likes.some(likedByUser));

    const likeHandler = () => {
        try {
            dispatch(likeDislikePost(post._id, authUserId))
        } catch (err) {
        }
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    const [closedOptions, setOpenOptions] = useState(false);
    const handleOpenOptions = () => {
        setOpenOptions(true);
    };
    const handleCloseOptions = () => {
        setOpenOptions(false);
    };
    const optionsRef = useRef(null);


    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
            ref={scrollRef}
        >
            <OptionsPopover
                anchorEl={optionsRef.current}
                onClose={handleCloseOptions}
                open={closedOptions}
                handleCloseOptions={handleCloseOptions}
                closedOptions={closedOptions}
                post={post}
                setPost={setPost}
                posts={posts}
            />
            <CardHeader
                avatar={
                    <Avatar
                        alt="Персона"
                        component={RouterLink}
                        src={post.profilePicture}
                        to={`profile/${post.uid}/wall`}
                    />
                }
                action={
                    <IconButton
                        aria-haspopup="true"
                        onClick={handleOpenOptions}
                        ref={optionsRef}
                    >
                        <MoreVertIcon/>
                    </IconButton>
                }
                disableTypography
                subheader={
                    <div className={classes.subheader}>
                        <AccessTimeIcon className={classes.accessTimeIcon}/>
                        <Typography variant="body2">
                            {moment(post.date).fromNow()}
                        </Typography>
                    </div>
                }
                title={
                    <Link
                        color="textPrimary"
                        component={RouterLink}
                        to={`profile/${post.uid}/wall`}
                        variant="h6"
                    >
                        {post.author}
                    </Link>
                }
            />
            <CardContent className={classes.content}>
                <div className={classes.editorField}>
                    <Editor
                        editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(post.description)))}
                        readOnly={true}
                    />
                </div>
                {/*<Typography*/}
                {/*    className={classes.message}*/}
                {/*    variant="h5"*/}
                {/*>*/}
                {/*    {post.description}*/}
                {/*</Typography>*/}
                {/*{post.images && (*/}
                {/*    <div className={classes.mediaArea}>*/}
                {/*        <div*/}
                {/*            className={classes.media}*/}
                {/*        >*/}
                {/*            <Gallery/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*)}*/}
                <div className={classes.actions}>
                    {isLiked ? (
                        <IconButton
                            className={classes.likedButton}
                            onClick={likeHandler}
                            size="small"
                        >
                            <FavoriteIcon/>
                        </IconButton>
                    ) : (
                        <Tooltip title="Нравится">
                            <IconButton
                                className={classes.likeButton}
                                onClick={likeHandler}
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
                        {like}
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
                    {/*{post.comments && (*/}
                    {/*    <div className={classes.comments}>*/}
                    {/*        {post.comments.map(comment => (*/}
                    {/*            <CommentBubble*/}
                    {/*                comment={comment}*/}
                    {/*                key={comment.id}*/}
                    {/*            />*/}
                    {/*        ))}*/}
                    {/*    </div>*/}
                    {/*)}*/}
                    <Divider className={classes.divider}/>
                    <CommentForm/>
                </Collapse>
            </CardContent>
        </Card>
    );
};


export default PostCard;
