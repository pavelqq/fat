import React, {useRef, useState} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import AddPost from "../../../../components/AddPost";
import Posts from "./Components/Posts";
import {useSelector} from "react-redux";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {},
}));

const Wall = (props) => {
    const {className, ...rest} = props;

    const classes = useStyles();

    const currentUser = useSelector((state) => state.userById);
    const auth = useSelector((state) => state.auth);

    const [post, setPost] = useState({
        description: "",
    });

    const scrollRef = useRef(null)

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            {/*<Gallery/>*/}
            {currentUser._id === auth._id ? (
                <>
                    <Grid container>
                        {/*<Hidden xsDown>*/}
                        {/*    <Grid item sm={3} md={4}>*/}
                        {/*        /!*<Timeline scrollRef={scrollRef} post={post} setPost={setPost}*!/*/}
                        {/*        /!*          currentUser={currentUser}/>*!/*/}
                        {/*    </Grid>*/}
                        {/*</Hidden>*/}
                        <Grid item xs={12} sm={12} md={12}>
                            <AddPost post={post} setPost={setPost} currentUserName={currentUser.name}/>
                            <Posts scrollRef={scrollRef} post={post} setPost={setPost} currentUser={currentUser}/>
                        </Grid>
                    </Grid>
                </>
            ) : (
                <>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12}>
                            <Posts scrollRef={scrollRef} post={post} setPost={setPost} currentUser={currentUser}/>
                        </Grid>
                        {/*<Hidden xsDown>*/}
                        {/*    <Grid item sm={3} md={4}>*/}
                        {/*        /!*<Timeline scrollRef={scrollRef} post={post} setPost={setPost}*!/*/}
                        {/*        /!*          currentUser={currentUser}/>*!/*/}
                        {/*    </Grid>*/}
                        {/*</Hidden>*/}
                    </Grid>
                </>
            )}
        </div>
    );
}


export default Wall;
