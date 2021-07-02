import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import Diet from "../Diet";
import Trainings from "../Trainings/Trainings";

// import {SubscriberCard} from './components';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(2),
    }
}));

const Tasks = props => {
    const {tasks, className, ...rest} = props;

    const classes = useStyles();

    return (
        <Grid
            {...rest}
            className={clsx(classes.root, className)}
            container
            spacing={3}
        >
            {/*{tasks.diet &&*/}
            {/*<Diet diet={tasks.diet}/>*/}
            {/*}*/}
            {/*{tasks.train &&*/}
            {/*<Trainings train={tasks.train}/>*/}
            {/*}*/}
        </Grid>
    );
};


export default Tasks;
