import React, {forwardRef} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Paper, IconButton, Typography, colors} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutlined';
import CloseIcon from '@material-ui/icons/CloseOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutlined';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import WarningIcon from '@material-ui/icons/WarningOutlined';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        padding: '16px 24px',
        borderRadius: theme.shape.borderRadius,
        marginTop: theme.spacing(2)
    },
    default: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
    success: {
        backgroundColor: colors.green[600],
        color: theme.palette.white
    },
    info: {
        backgroundColor: colors.lightBlue[600],
        color: theme.palette.white
    },
    warning: {
        backgroundColor: colors.orange[900],
        color: theme.palette.white
    },
    error: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText
    },
    message: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        padding: '8px 0',
        color: theme.palette.error.contrastText
    },
    icon: {
        fontSize: 20,
        marginRight: theme.spacing(2),
    },
    action: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
        paddingLeft: 16,
        marginRight: -8
    }
}));

const icons = {
    default: <InfoIcon/>,
    success: <CheckCircleIcon/>,
    info: <InfoIcon/>,
    warning: <WarningIcon/>,
    error: <ErrorIcon/>
};

const Alert = forwardRef((props, ref) => {
    const {className, icon, variant, message, onClose, ...rest} = props;

    const classes = useStyles();

    return (
        <Paper
            {...rest}
            className={clsx(classes.root, classes[variant], className)}
            component={Typography}
            elevation={1}
            ref={ref}
            variant="h6"
        >
            <span className={classes.icon}>{icon || icons[variant]}</span>
            <Typography variant='h4' className={classes.message}>
                {message}
            </Typography>
            {onClose && (
                <IconButton
                    className={classes.action}
                    color="inherit"
                    key="close"
                    onClick={onClose}
                >
                    <CloseIcon/>
                </IconButton>
            )}
        </Paper>
    );
});


export default Alert;
