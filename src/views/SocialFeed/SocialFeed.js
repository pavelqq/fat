import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';

// import axios from 'utils/axios';

import {Header} from './components';
import AddPost from "../../components/AddPost";
import PostCard from "../../components/PostCard";
import Page from "../../components/Page";
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles(theme => ({
    root: {
        width: theme.breakpoints.values.lg,
        maxWidth: '100%',
        margin: '0 auto',
    },
    newPost: {
        marginTop: theme.spacing(1)
    },
    posts: {
        marginTop: theme.spacing(2)
    },
    post: {
        marginBottom: theme.spacing(2)
    }
}));

const SocialFeed = () => {
    const classes = useStyles();

    // const [posts, setPosts] = useState([]);
    //
    // useEffect(() => {
    //   let mounted = true;
    //
    //   const fetchPosts = () => {
    //     axios.get('/api/social-feed').then(response => {
    //       if (mounted) {
    //         setPosts(response.data.posts);
    //       }
    //     });
    //   };
    //
    //   fetchPosts();
    //
    //   return () => {
    //     mounted = false;
    //   };
    // }, []);

    const posts = [
        {
            id: uuidv4(),
            author: {
                name: 'Вася Пупкин',
                avatar: '/images/avatars/avatar_10.png'
            },
            message: 'Здарова ребята',
            liked: true,
            likes: 1,
            comments: [
                {
                    id: uuidv4(),
                    author: {
                        name: 'Никита Сергеич',
                        avatar: '/images/avatars/avatar_12.png'
                    },
                    message: 'Привет',
                    created_at: moment().subtract(3, 'hours')
                }
            ],
            created_at: moment().subtract(16, 'minutes')
        },
        {
            id: uuidv4(),
            author: {
                name: 'Денис Николаев',
                avatar: '/images/avatars/avatar_11.png'
            },
            message: 'Халло епт',
            media: 'https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg',
            liked: true,
            likes: 24,
            comments: [
                {
                    id: uuidv4(),
                    author: {
                        name: 'Аня Морозова',
                        avatar: '/images/avatars/avatar_5.png'
                    },
                    message: 'Ахахах',
                    created_at: moment().subtract(3, 'hours')
                },
                {
                    id: uuidv4(),
                    author: {
                        name: 'Никола Тесла',
                        avatar: '/images/avatars/avatar_8.png'
                    },
                    message:
                        'Хмм...',
                    created_at: moment().subtract(2, 'hours')
                }
            ],
            created_at: moment().subtract(4, 'hours')
        },
        {
            id: uuidv4(),
            author: {
                name: 'Денис Николаев',
                avatar: '/images/avatars/avatar_11.png'
            },
            message:
                'Мда, так и живем',
            liked: false,
            likes: 65,
            comments: [
                {
                    id: uuidv4(),
                    author: {
                        name: 'Вася Пукин',
                        avatar: '/images/avatars/avatar_6.png'
                    },
                    message:
                        'Пойдет',
                    created_at: moment().subtract(3, 'hours')
                },
                {
                    id: uuidv4(),
                    author: {
                        name: 'Леха',
                        avatar: '/images/avatars/avatar_4.png'
                    },
                    message: 'Oh... so sentimental',
                    created_at: moment().subtract(2, 'hours')
                }
            ],
            created_at: moment().subtract(7, 'hours')
        }
    ];

    return (
        <Page
            className={classes.root}
            title="Лента"
        >
            <Header/>
            <AddPost className={classes.newPost}/>
            <div className={classes.posts}>
                {posts.map(post => (
                    <PostCard
                        className={classes.post}
                        key={post.id}
                        post={post}
                    />
                ))}
            </div>
        </Page>
    );
};

export default SocialFeed;
