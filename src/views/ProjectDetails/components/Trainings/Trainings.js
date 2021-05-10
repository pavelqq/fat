import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {}
}));

const Trainings = props => {
    const {train, className, ...rest} = props;

    const classes = useStyles();

    debugger;

    return (
        <Grid
            {...rest}
            className={clsx(classes.root, className)}
            container
            spacing={3}
        >
            {train.name}
            {/*{train.map(t => (*/}
            {/*    <Grid*/}
            {/*        item*/}
            {/*        // key={t.id}*/}
            {/*        lg={4}*/}
            {/*        xs={12}*/}
            {/*    >*/}
            {/*        {t.name}*/}
            {/*    </Grid>*/}
            {/*))}*/}
        </Grid>
    );
};


export default Trainings;
