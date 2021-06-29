import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Page from "../../components/Page";
import {Header, Filter, Results} from './components';

const useStyles = makeStyles(theme => ({
    root: {
        width: theme.breakpoints.values.lg,
        maxWidth: '100%',
        margin: '0 auto',
        padding: theme.spacing(3)
    },
    header: {
        marginBottom: theme.spacing(3)
    },
    filter: {
        marginTop: theme.spacing(3)
    },
    results: {
        marginTop: theme.spacing(6)
    }
}));

const ProjectList = () => {

    const classes = useStyles();

    return (
        <Page
            className={classes.root}
            title="Список проектов"
        >
            <Header className={classes.header}/>
            <Filter className={classes.filter}/>
            <Results className={classes.results}/>
        </Page>
    );
};

export default ProjectList;
