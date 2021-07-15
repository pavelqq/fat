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

// const [currentPost, setCurrentPost] = useState(null);
// const [currentIndex, setCurrentIndex] = useState(-1);
//const [searchTitle, setSearchTitle] = useState("");

// const dispatch = useDispatch();
//
// const [posts, setPosts] = useState(dispatch(retrievePosts(currentUser.username)))
//
// const getPosts = useSelector(state => state.posts);
//
// console.log('posts:', getPosts.posts)

// const onChangeSearchTitle = e => {
//     const searchTitle = e.target.value;
//     setSearchTitle(searchTitle);
// };
//
// const refreshData = () => {
//     setCurrentPost(null);
//     setCurrentIndex(-1);
// };
//
// const setActivePost = (post, index) => {
//     setCurrentPost(post);
//     setCurrentIndex(index);
// };

// const removeAllPosts = () => {
//     dispatch(deleteAllPosts())
//         .then(response => {
//             console.log(response);
//             refreshData();
//         })
//         .catch(e => {
//             console.log(e);
//         });
// };

// const findByTitle = () => {
//     refreshData();
//     //dispatch(findPostsByTitle(searchTitle));
// };

{/*<TextField*/}
{/*    id="searchByTitle"*/}
{/*    label="Outlined"*/}
{/*    variant="outlined"*/}
{/*    placeholder="Поиск по названию..."*/}
{/*    onChange={onChangeSearchTitle}*/}
{/*/>*/}
{/*<Button*/}
{/*    onClick={findByTitle}*/}
{/*>*/}
{/*    Поиск*/}
{/*</Button>*/}
{/*<ul>*/}
{/*    {posts &&*/}
{/*    posts.map((post, index) => (*/}
{/*        <li*/}
{/*            className={*/}
{/*                "list" + (index === currentIndex ? "active" : "")*/}
{/*            }*/}
{/*            onClick={() => setActivePost(post, index)}*/}
{/*            key={index}*/}
{/*        >*/}
{/*            {post.title}*/}
{/*        </li>*/}
{/*    ))}*/}
{/*</ul>*/}
{/*{currentPost ? (*/}
{/*    <div>*/}
{/*        <h4>Пост</h4>*/}
{/*        <div>*/}
{/*            <label>*/}
{/*                <strong>Название:</strong>*/}
{/*            </label>{" "}*/}
{/*            {currentPost.title}*/}
{/*        </div>*/}
{/*        <div>*/}
{/*            <label>*/}
{/*                <strong>Описание:</strong>*/}
{/*            </label>{" "}*/}
{/*            {currentPost.description}*/}
{/*        </div>*/}
{/*        <div>*/}
{/*            <label>*/}
{/*                <strong>Статус:</strong>*/}
{/*            </label>{" "}*/}
{/*            {currentPost.published ? "Запощено" : "Загрузка"}*/}
{/*        </div>*/}

{/*        <Link*/}
{/*            to={"/posts/" + currentPost._id}*/}
{/*        >*/}
{/*            Редактировать*/}
{/*        </Link>*/}
{/*    </div>*/}
{/*) : (*/}
{/*    <div>*/}
{/*        <br />*/}
{/*        <p>Нажмите на пост...</p>*/}
{/*    </div>*/}
{/*)}*/}
{/*{posts.map(post =>*/}
{/*    (*/}
{/*        <PostCard*/}
{/*            className={classes.post}*/}
{/*            key={post.id}*/}
{/*            post={post}*/}
{/*        />*/}
{/*    )*/}
{/*)}*/}

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