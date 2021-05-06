import React, {useState, useEffect} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Button, colors} from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ProjectCard from "../../../../components/ProjectCard";

import axios from "../../../../utils/axios";


const useStyles = makeStyles(theme => ({
    root: {},
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(2)
    },
    title: {
        position: 'relative',
        '&:before': {
            position: 'absolute',
            bottom: -8,
            left: 0,
            content: '" "',
            height: 3,
            width: 48,
            backgroundColor: theme.palette.primary.main
        }
    },
    arrowIcon: {
        marginLeft: theme.spacing(1)
    },
    projectCard: {
        marginBottom: theme.spacing(3)
    }
}));


const Plans = props => {
    const {className, ...rest} = props;

    const classes = useStyles();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        let mounted = true;

        const fetchProjects = () => {
            axios.get('/api/account/projects').then(response => {
                if (mounted) {
                    setProjects(response.data.projects);
                }
            });
        };

        fetchProjects();

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <div className={classes.header}>
                <Typography
                    className={classes.title}
                    variant="h5"
                >
                    Активные планы
                </Typography>
                <Button
                    component={RouterLink}
                    to="/profile/user/projects"
                >
                    Посмотреть все
                    <KeyboardArrowRightIcon className={classes.arrowIcon}/>
                </Button>
            </div>
            {projects.map(project => (
                <ProjectCard
                    className={classes.projectCard}
                    key={project.id}
                    project={project}
                />
            ))}
        </div>
    );
};

export default Plans;
