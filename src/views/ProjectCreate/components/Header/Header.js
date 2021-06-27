import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {}
}));

const Header = props => {
    const {className, ...rest} = props;

    const classes = useStyles();

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Typography
                component="h2"
                gutterBottom
                variant="overline"
            >
                Новый проект
            </Typography>
            <Typography
                component="h1"
                variant="h3"
            >
                Создать новый проект!
            </Typography>
        </div>
    );
};


export default Header;
