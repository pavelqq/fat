import React, {useEffect, useState} from 'react';
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
import {Grid} from "@material-ui/core";
import axios from "../../utils/axios";

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
        marginTop: theme.spacing(1)
    }
}));

const Overview = props => {
    const {history} = props;
    const classes = useStyles();

    const authUserId = useSelector(state => state.auth._id)

    const appState = useSelector((state) => state);
    console.log(appState);

    const auth = useSelector(state => state.auth)
    if (!auth._id) (
        history.push('/')
    )

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            setTodos(todos)
        }

        const fetchTodos = () => {
            axios.get('/api/account/todos')
                .then(response => {
                    if (mounted) {
                        setTodos(response.data.todos);
                    }
                });
        };

        fetchTodos();

        return () => {
            mounted = false;
        };
    }, []);

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
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={4}
                >
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Todos
                            className={classes.todos}
                            title={`Тренировочный план`}
                            todos={todos}
                            setTodos={setTodos}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Todos
                            className={classes.todos}
                            title={`Диета`}
                            todos={todos}
                            setTodos={setTodos}
                        />
                    </Grid>
                </Grid>
                {/*<Statistics className={classes.statistics}/>*/}
                {/*<Notifications className={classes.notifications}/>*/}
            </div>
        </Page>
    );
};

export default Overview;

