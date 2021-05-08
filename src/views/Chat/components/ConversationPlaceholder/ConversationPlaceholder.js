import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inner: {
        textAlign: 'center'
    },
    image: {
        maxWidth: 400
    },
    title: {
        margin: theme.spacing(4, 0, 1, 0)
    }
}));

const ConversationPlaceholder = props => {
    const {className, ...rest} = props;

    const classes = useStyles();

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <div className={classes.inner}>
                <img
                    alt="Начните диалог"
                    className={classes.image}
                    src="/images/undraw_work_chat_erdt.svg"
                />
                <Typography
                    className={classes.title}
                    variant="h4"
                >
                    Ваши сообщения
                </Typography>
                <Typography variant="subtitle1">
                    Выберете диалог слева, чтобы начать переписку
                </Typography>
            </div>
        </div>
    );
};


export default ConversationPlaceholder;
