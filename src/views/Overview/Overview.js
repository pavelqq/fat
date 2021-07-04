import React from 'react';
import {makeStyles} from '@material-ui/core/styles';


import {
    Header,
    Statistics,
    Notifications,
    Plans,
    Todos
} from './components';
import Page from "../../components/Page";
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {
        width: theme.breakpoints.values.lg,
        maxWidth: '100%',
        margin: '0 auto',
    },
    overview: {
        marginRight: theme.spacing(6),
        marginLeft: theme.spacing(6),
        marginBottom: theme.spacing(6),
    },
    statistics: {
        marginTop: theme.spacing(3)
    },
    notifications: {
        marginTop: theme.spacing(6)
    },
    projects: {
        marginTop: theme.spacing(6)
    },
    todos: {
        marginTop: theme.spacing(6)
    }
}));

const Overview = () => {
    const classes = useStyles();

    // const dispatch = useDispatch();

    const authUserId = useSelector(state => state.auth._id)

    return (
        <Page
            className={classes.root}
            title="Home"
        >
            <div className={classes.overview}>
                <Header/>
                <Plans className={classes.projects} id={authUserId}/>
                <Todos className={classes.todos}/>
                <Statistics className={classes.statistics}/>
                <Notifications className={classes.notifications}/>
            </div>
        </Page>
    );
};

export default Overview;

