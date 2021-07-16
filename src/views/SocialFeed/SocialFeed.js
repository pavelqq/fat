import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Header} from './components';
import AddPost from "../../components/AddPost";
import Page from "../../components/Page";
import Grid from "@material-ui/core/Grid";
import {useSelector} from "react-redux";
import Posts from "./components/Posts";

const useStyles = makeStyles(theme => ({
    root: {
        width: theme.breakpoints.values.lg,
        maxWidth: '100%',
        margin: '0 auto',
        padding: theme.spacing(3)
    },
    newPost: {
        marginTop: theme.spacing(1)
    },
    posts: {
        marginTop: theme.spacing(1)
    },
    post: {
        marginBottom: theme.spacing(1)
    },
    timeline: {
        paddingTop: theme.spacing(9),
    },
    header: {
        paddingBottom: theme.spacing(1)
    }
}));

const SocialFeed = props => {
    const {history} = props;
    const classes = useStyles();

    const auth = useSelector(state => state.auth)
    if (!auth._id) (
        history.push('/')
    )

    const [post, setPost] = useState({
        description: "",
    });

    return (
        <Page
            className={classes.root}
            title="Лента"
        >
            <Grid container xs={12}>
                <Grid item xs={12}>
                    <Header className={classes.header}/>
                    <AddPost
                        className={classes.newPost}
                        post={post}
                        setPost={setPost}
                        currentUserName={auth.name}
                    />
                    <div className={classes.posts}>
                        <Posts
                            className={classes.post}
                            post={post}
                            setPost={setPost}
                        />
                    </div>
                </Grid>
            </Grid>
        </Page>
    );
};

export default SocialFeed;
