import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

import {Brief, Deliverables, Holder, Members} from './components';

const useStyles = makeStyles(theme => ({
    root: {},
    deliverables: {
        marginTop: theme.spacing(3)
    },
    members: {
        marginTop: theme.spacing(3)
    }
}));


const Overview = props => {
    const {author, project, className, ...rest} = props;

    const classes = useStyles();

    return (
        <Grid
            {...rest}
            className={clsx(classes.root, className)}
            container
            spacing={3}
        >
            <Grid
                item
                lg={8}
                xl={9}
                xs={12}
            >
                <Brief brief={project.brief}/>
                <Deliverables className={classes.deliverables}/>
            </Grid>
            <Grid
                item
                lg={4}
                xl={3}
                xs={12}
            >
                <Holder project={project} author={author}/>
                <Members
                    className={classes.members}
                    members={project.members}
                />
            </Grid>
        </Grid>
    );
};


export default Overview;
