import React, {useEffect} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Button} from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import _ from 'lodash'

import {useDispatch, useSelector} from "react-redux";
import {getAllProjects, getUsersProjects} from "../../../../store/actions/projectActions";
import ProjectCard from "../../../../components/ProjectCard";


const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
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
    const {authUserId, className, fromOverviewPage, fromProfilePage, ...rest} = props;

    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        {fromOverviewPage && dispatch(getAllProjects())}
        {fromProfilePage && dispatch(getUsersProjects(authUserId))}
    }, [authUserId])


    const allProjects = useSelector(state => state.projectsList)

    const currentProject = _.filter(allProjects, function (project) {
        return project.members.includes(authUserId)
    })

    console.log(currentProject)

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
                    Текущий проект
                </Typography>
                <Button
                    component={RouterLink}
                    to={`/projects`}
                >
                    Все проекты
                    <KeyboardArrowRightIcon className={classes.arrowIcon}/>
                </Button>
            </div>
            {fromOverviewPage &&
            <>
                {currentProject.map(project => (
                    <ProjectCard
                        className={classes.projectCard}
                        key={project._id}
                        project={project}
                        disabledMembering={true}
                    />
                ))}
            </>
            }
            {fromProfilePage &&
            <>
                {allProjects.map(project => (
                    <ProjectCard
                        className={classes.projectCard}
                        key={project._id}
                        project={project}
                        disabledMembering={false}
                    />
                ))}
            </>
            }
        </div>
    );
};

export default Projects;
