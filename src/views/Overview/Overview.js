import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Header,
    Statistics,
    Notifications,
    Projects,
    Todos
} from './components';
import Page from "../../components/Page";
import {useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {
        width: theme.breakpoints.values.lg,
        maxWidth: '100%',
        margin: '0 auto',
    },
    overview: {
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(2),
        },
        marginRight: theme.spacing(3),
        marginLeft: theme.spacing(3),
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
        marginTop: theme.spacing(3)
    }
}));

const Overview = () => {
    const classes = useStyles();

    const authUserId = useSelector(state => state.auth._id)

    return (
        <Page
            className={classes.root}
            title="Домашняя страница"
        >
            <div className={classes.overview}>
                <Header/>
                <Projects
                    className={classes.projects}
                    authUserId={authUserId}
                    fromProfilePage={false}
                    fromOverviewPage={true}
                />
                <Todos className={classes.todos}/>
                {/*<Statistics className={classes.statistics}/>*/}
                {/*<Notifications className={classes.notifications}/>*/}
            </div>
        </Page>
    );
};

export default Overview;

