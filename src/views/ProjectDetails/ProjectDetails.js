import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {Tabs, Tab, Divider, colors} from '@material-ui/core';

import Page from "../../components/Page";
import {Header, Overview, Files, Activities, Tasks} from './components';
import {useDispatch, useSelector} from "react-redux";
import {getProjectById} from "../../store/actions/projectActions";
import {getProfileById} from "../../store/actions/userActions";
import {getMembers} from "../../store/actions/usersListActions";


const useStyles = makeStyles(theme => ({
    root: {
        width: theme.breakpoints.values.lg,
        maxWidth: '100%',
        margin: '0 auto',
        padding: theme.spacing(3)
    },
    tabs: {
        marginTop: theme.spacing(3)
    },
    divider: {
        backgroundColor: colors.grey[300]
    },
    alert: {
        marginTop: theme.spacing(3)
    },
    content: {
        marginTop: theme.spacing(3)
    }
}));


const ProjectDetails = props => {
    const {match, history} = props;
    const classes = useStyles();
    const {projectId, userId, tab} = match.params;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjectById(projectId));
    }, [projectId])

    useEffect(() => {
        dispatch(getProfileById(userId));
    }, [userId])

    useEffect(() => {
        dispatch(getMembers(projectId))
    }, [projectId])

    const project = useSelector(state => state.projectById);
    const author = useSelector(state => state.userById);
    const members = useSelector(state => state.usersList);

    const appState = useSelector((state) => state);
    console.log(appState);

    const handleTabsChange = (event, value) => {
        history.push(value);
    };

    const tabs = [
        {value: 'overview', label: 'Подробнее про проект'},
        {value: 'tasks', label: 'Задачи проекта'},
        {value: 'files', label: 'Прикрепленные файлы'},
        {value: 'activity', label: 'Активность проекта'},
    ];

    if (!tab) {
        return <Redirect to={`/projects/${projectId}/author/${userId}/overview`}/>;
    }

    if (!tabs.find(t => t.value === tab)) {
        return <Redirect to="/errors/error-404"/>;
    }

    if (!project) {
        return null;
    }

    return (
        <Page
            className={classes.root}
            title="Детали проекта"
        >
            <Header projectTitle={project.title} author={author}/>
            <Tabs
                className={classes.tabs}
                onChange={handleTabsChange}
                scrollButtons="auto"
                value={tab}
                variant="scrollable"
            >
                {tabs.map(tab => (
                    <Tab
                        key={tab.value}
                        label={tab.label}
                        value={tab.value}
                    />
                ))}
            </Tabs>
            <Divider className={classes.divider}/>
            <div className={classes.content}>
                {tab === 'overview' && <Overview projectId={projectId} userId={userId} members={members} description={project.description}/>}
                {/*{tab === 'tasks' && <Tasks tasks={project.tasks}/>}*/}
                {/*{tab === 'files' && <Files files={project.files}/>}*/}
                {/*{tab === 'activity' && <Activities activities={project.activities}/>}*/}
            </div>
        </Page>
    );
};


export default ProjectDetails;
