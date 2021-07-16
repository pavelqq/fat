import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import PostCard from "../../../components/PostCard";
import {getAllPosts} from "../../../store/actions/postActions";


const useStyles = makeStyles(theme => ({
    root: {},
    posts: {
        marginTop: theme.spacing(2)
    },
    post: {
        marginBottom: theme.spacing(2)
    },
    timeline: {
        paddingTop: theme.spacing(3),
    }
}));


const Posts = props => {
    const { scrollRef, post, setPost, className, ...rest } = props;

    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch])

    const posts = useSelector(state => state.postsList)

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <div className={classes.posts}>
                {posts.length && posts.map((post) => (
                    <PostCard
                        scrollRef={scrollRef}
                        className={classes.post}
                        key={post.id}
                        post={post}
                        setPost={setPost}
                        posts={posts}
                    />
                ))}
            </div>
        </div>
    )
}

export default Posts;