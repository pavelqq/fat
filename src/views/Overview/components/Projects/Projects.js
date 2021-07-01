import React, {useState, useEffect} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Button, colors} from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ProjectCard from "../../../../components/ProjectCard";

import axios from "../../../../utils/axios";
import {useDispatch, useSelector} from "react-redux";
import {getUsersProjects} from "../../../../store/actions/projectActions";


const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2)
    },
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


const Projects = props => {
    const {id, className, ...rest} = props;

    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersProjects(id))
    }, [id])

    const projects = useSelector(state => state.projectsList)

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
                    Проекты пользователя
                </Typography>
                <Button
                    component={RouterLink}
                    to={`/projects`}
                >
                    Все проекты
                    <KeyboardArrowRightIcon className={classes.arrowIcon}/>
                </Button>
            </div>
            {projects.map(project => (
                <ProjectCard
                    className={classes.projectCard}
                    key={project._id}
                    project={project}
                />
            ))}
        </div>
    );
};

export default Projects;
