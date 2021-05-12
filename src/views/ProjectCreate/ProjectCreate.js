import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button} from '@material-ui/core';

import Page from "../../components/Page";
import {
    Header,
    AboutAuthor,
    AboutProject,
    Preferences,
    ProjectCover,
    ProjectDetails,
    ProjectCalendar
} from './components';

const useStyles = makeStyles(theme => ({
    root: {
        width: theme.breakpoints.values.lg,
        maxWidth: '100%',
        margin: '0 auto',
        padding: theme.spacing(3, 3, 6, 3)
    },
    aboutAuthor: {
        marginTop: theme.spacing(3)
    },
    projectCalendar: {
        marginTop: theme.spacing(3)
    },
    aboutProject: {
        marginTop: theme.spacing(3)
    },
    projectCover: {
        marginTop: theme.spacing(3)
    },
    projectDetails: {
        marginTop: theme.spacing(3)
    },
    preferences: {
        marginTop: theme.spacing(3)
    },
    actions: {
        marginTop: theme.spacing(3)
    }
}));

const ProjectCreate = () => {
    const classes = useStyles();

    return (
        <Page
            className={classes.root}
            title="Создать проект"
        >
            <Header/>
            <AboutAuthor className={classes.aboutAuthor}/>
            <ProjectCalendar className={classes.projectCalendar}/>
            <AboutProject className={classes.aboutProject}/>
            <ProjectCover className={classes.projectCover}/>
            <ProjectDetails className={classes.projectDetails}/>
            <Preferences className={classes.preferences}/>
            <div className={classes.actions}>
                <Button
                    color="primary"
                    variant="contained"
                >
                    Создать проект
                </Button>
            </div>
        </Page>
    );
};

export default ProjectCreate;
