import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPosts} from '../../../../../redux/store/actions/postAction'
import PostCard from "../../../../../components/PostCard";
//import {connect} from "react-redux";
//import {getPosts as getPostsAction} from "../../../../../redux_old/modules/posts";
import {makeStyles} from "@material-ui/core/styles";


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


const Users = () => {

    const classes = useStyles();

    // const dispatch = useDispatch()
    //
    // const postsListData = useSelector(state => state.postsList)
    //
    // const {loading, error, posts} = postsListData
    //
    // useEffect(() => {
    //     dispatch(getPosts())
    // }, [dispatch])
    //

    return (
        <div>
            {/*{loading ? "Loading..." : error ? error.message : posts.map(post =>*/}
            {/*    (*/}
            {/*        <PostCard*/}
            {/*            className={classes.post}*/}
            {/*            key={post.id}*/}
            {/*            post={post}*/}
            {/*        />*/}
            {/*    )*/}
            {/*)}*/}
        </div>
    )
}

export default Users;


// const Posts = ({posts, getPosts}) => {
//
//     const classes = useStyles();
//
//     useEffect(() => {
//         getPosts();
//     }, [posts])
//
//     debugger;
//
//     return (
//         <div className={classes.posts}>
//             {
//                 posts.length && posts.map(
//                     item => <p>{item.title}</p>
//                 )
//             }
//             {/*{posts.length && posts.map(post => (*/}
//             {/*    <PostCard*/}
//             {/*        className={classes.post}*/}
//             {/*        key={post.id}*/}
//             {/*        post={post}*/}
//             {/*    />*/}
//             {/*))}*/}
//         </div>
//     )
// }

// export default connect(
//     ({posts}) => ({posts: posts.posts}),
//     {
//         getPosts: getPostsAction
//     }
// )(Posts);