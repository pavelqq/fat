import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardContent, Typography} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {}
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
                <Typography variant="h4">
                    Практические результаты:
                </Typography>
                <Typography variant="body1">
                    Статистика и график какой-нить
                </Typography>
            </CardContent>
        </Card>
    );
};


export default Statistics;
