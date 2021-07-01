import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, colors} from '@material-ui/core';
import {generateRandomColor} from "../../utils/generateRandomColor";



const useStyles = makeStyles(theme => ({
    root: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 0,
        flexShrink: 0,
        borderRadius: theme.shape.borderRadius,
        lineHeight: '10px',
        fontSize: '14px',
        height: 25,
        minWidth: 20,
        whiteSpace: 'nowrap',
        padding: theme.spacing(0.5, 1),
        margin: theme.spacing(0.5)
    },
    rounded: {
        borderRadius: 10,
        padding: theme.spacing(0.5)
    }
}));

const Label = props => {
    const {className, variant, color, shape, children, style, ...rest} = props;

    const classes = useStyles();

    const rootClassName = clsx(
        {
            [classes.root]: true,
            [classes.rounded]: shape === 'rounded'
        },
        className
    );

    const finalStyle = {...style};

    if (variant === 'contained') {
        finalStyle.backgroundColor = color;
        finalStyle.color = '#FFF';
        //'#FFF'
        //generateRandomColor()
    } else {
        finalStyle.border = `1px solid ${color}`;
        finalStyle.color = color;
    }

    return (
        <Typography
            {...rest}
            className={rootClassName}
            style={finalStyle}
            variant="overline"
        >
            {children}
        </Typography>
    );
};


Label.defaultProps = {
    style: {},
    color: colors.grey[600],
    variant: 'contained',
    shape: 'square'
};

export default Label;
