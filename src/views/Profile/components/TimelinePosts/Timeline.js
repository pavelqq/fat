import React, {useEffect} from 'react';
import clsx from "clsx";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../../../store/actions/postActions";
import TimelinePosts from "./TimelinePosts";


const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1)
    },
}));

const Timeline = props => {
    const { scrollRef, post, setPost, currentUser, className, ...rest } = props;

    const classes = useStyles();

    const dispatch = useDispatch();

    const posts = useSelector(state => state.postsList)

    useEffect(() => {
        dispatch(getPosts(currentUser._id));
    }, [dispatch, currentUser._id])

    return(
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            {posts.length && posts.map((post) => (
                <TimelinePosts
                    scrollRef={scrollRef}
                    key={post.id}
                    post={post}
                    setPost={setPost}
                    posts={posts}
                />
            ))}
        </div>
    )
}

export default Timeline;