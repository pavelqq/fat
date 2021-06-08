import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import AddPost from "../../../../components/AddPost";
import PostCard from "../../../../components/PostCard";
import TimelinePosts from "../TimelinePosts";
import Gallery from "../Gallery";
import Posts from "./Components/Posts";
import axios from "../../../../utils/axios";

const useStyles = makeStyles(theme => ({
    root: {},
    // timeline: {
    //     paddingTop: theme.spacing(3),
    // }
}));

const Wall = (props) => {
    const {currentUser, className, ...rest} = props;

    const classes = useStyles();

    // const posts = [
    //     {
    //         id: uuidv4(),
    //         author: {
    //             name: 'Ирина Николаева',
    //             avatar: '/images/avatars/avatar_11.png'
    //         },
    //         message: 'Здарова. Как дела?',
    //         liked: true,
    //         likes: 24,
    //         comments: [
    //             {
    //                 id: uuidv4(),
    //                 author: {
    //                     name: 'Аня Пупкина',
    //                     avatar: '/images/avatars/avatar_5.png'
    //                 },
    //                 message: 'Лол',
    //                 created_at: moment().subtract(3, 'hours')
    //             },
    //             {
    //                 id: uuidv4(),
    //                 author: {
    //                     name: 'Женя Грибоедова',
    //                     avatar: '/images/avatars/avatar_8.png'
    //                 },
    //                 message:
    //                     'Хмм, вот это гений мысли',
    //                 created_at: moment().subtract(2, 'hours')
    //             },
    //             {
    //                 id: uuidv4(),
    //                 author: {
    //                     name: 'Женя Грибоедова',
    //                     avatar: '/images/avatars/avatar_8.png'
    //                 },
    //                 message:
    //                     'Ахахахах',
    //                 created_at: moment().subtract(2, 'hours')
    //             },
    //             {
    //                 id: uuidv4(),
    //                 author: {
    //                     name: 'Аня Пупкина',
    //                     avatar: '/images/avatars/avatar_5.png'
    //                 },
    //                 message: 'Это точно',
    //                 created_at: moment().subtract(2, 'hours')
    //             },
    //         ],
    //         created_at: moment().subtract(4, 'hours')
    //     },
    //     {
    //         id: uuidv4(),
    //         author: {
    //             name: 'Ирина Николаева',
    //             avatar: '/images/avatars/avatar_11.png'
    //         },
    //         media: 'https://pp.userapi.com/c850224/v850224250/14bda2/Jcnvta1AAQk.jpg',
    //         message:
    //             'Ну ты и жирдяй, худей давай, а то совсем уродом стал!',
    //         liked: false,
    //         likes: 65,
    //         comments: [
    //             {
    //                 id: uuidv4(),
    //                 author: {
    //                     name: 'Ваня Пупкин',
    //                     avatar: '/images/avatars/avatar_6.png'
    //                 },
    //                 message:
    //                     'Она права...',
    //                 created_at: moment().subtract(3, 'hours')
    //             },
    //             {
    //                 id: uuidv4(),
    //                 author: {
    //                     name: 'Аня Жирова',
    //                     avatar: '/images/avatars/avatar_4.png'
    //                 },
    //                 message: 'Хахахах',
    //                 created_at: moment().subtract(2, 'hours')
    //             }
    //         ],
    //         created_at: moment().subtract(7, 'hours')
    //     }
    // ];
    // const [posts, setPosts] = useState([]);
    //
    // useEffect(() => {
    //   let mounted = true;
    //
    //   const fetchPosts = () => {
    //     axios.get('/api/users/1/posts').then(response => {
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

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            {/*<Gallery/>*/}
            <AddPost/>
            <Posts/>
            {/*<Grid container spacing={1}>*/}
            {/*    <Grid item xs={12} sm={8}>*/}
            {/*        <div className={classes.posts}>*/}
            {/*            {posts.map(post => (*/}
            {/*                <PostCard*/}
            {/*                    className={classes.post}*/}
            {/*                    key={post.id}*/}
            {/*                    post={post}*/}
            {/*                />*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={12} sm={4}>*/}
            {/*        {posts.map(post => (*/}
            {/*            <TimelinePosts*/}
            {/*                className={classes.timeline}*/}
            {/*                key={post.id}*/}
            {/*                post={post}*/}
            {/*            />*/}
            {/*        ))}*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}
        </div>
    );
};


export default Wall;
