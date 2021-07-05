import React from 'react';
import clsx from "clsx";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ProjectCalendar from "../Calendar/ProjectCalendar";

const useStyles = makeStyles(theme => ({
    root: {},
}));


const Workouts = props => {
    const {className, projectId, ...rest} = props;

    const classes = useStyles();

    return(
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <ProjectCalendar
                titlePage={'Тренировки'}
                type={'trainings'}
                projectId={projectId}
                editMode={true}
            />
        </div>
    )
}


export default Workouts;