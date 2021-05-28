import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {Tabs, Tab, Divider, colors} from '@material-ui/core';

import axios from '../../utils/axios';
import Page from "../../components/Page";
import {Header, Overview, Files, Activities, Tasks} from './components';


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
    const {id, tab} = match.params;
    const [project, setProjects] = useState(null);

    useEffect(() => {
        let mounted = true;

        const fetchProject = () => {
            axios.get(`api/?project=${id}`).then(response => {
                if(mounted) {
                    setProjects(response.data.project);
                }
            })
        };

        fetchProject();

        return () => {
            mounted = false;
        };
    }, []);

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
        return <Redirect to={`/projects/${id}/overview`}/>;
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
            <Header project={project}/>
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
                {tab === 'overview' && <Overview project={project}/>}
                {tab === 'tasks' && <Tasks tasks={project.tasks}/>}
                {tab === 'files' && <Files files={project.files}/>}
                {tab === 'activity' && <Activities activities={project.activities}/>}
            </div>
        </Page>
    );
};


export default ProjectDetails;
