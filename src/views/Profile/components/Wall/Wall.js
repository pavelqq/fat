import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import AddPost from "../../../../components/AddPost";
import PostCard from "../../../../components/PostCard";
import TimelinePosts from "../TimelinePosts";
import Gallery from "../Gallery";
import Posts from "./Components/Posts";
import axios from "../../../../utils/axios";
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {},
    // timeline: {
    //     paddingTop: theme.spacing(3),
    // }
}));

const Wall = (props) => {
    const {className, ...rest} = props;

    const classes = useStyles();

    const currentUser = useSelector((state) => state.userById);
    const auth = useSelector((state) => state.auth);

    const [post, setPost] = useState({
        description: "",
    });

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            {/*<Gallery/>*/}
            {currentUser._id === auth._id ? (
                <>
                    <AddPost post={post} setPost={setPost} currentUserName={currentUser.name}/>
                    <Posts post={post} setPost={setPost} currentUser={currentUser}/>
                </>
            ) : (
                <>
                    <Posts post={post} setPost={setPost} currentUser={currentUser}/>
                </>
            )}
        </div>
    );
};


export default Wall;
