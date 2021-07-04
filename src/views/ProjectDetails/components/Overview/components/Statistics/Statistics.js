import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardContent} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {},
    charts: {
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        }
    }
}));

const Statistics = props => {
    const {className, ...rest} = props;

    const classes = useStyles();

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <CardContent>

            </CardContent>
        </Card>
    );
};


export default Statistics;
