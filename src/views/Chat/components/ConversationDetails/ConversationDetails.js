import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Divider} from '@material-ui/core';

import {
    ConversationToolbar,
    ConversationMessages,
    ConversationForm
} from './components';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.white
    }
}));

const ConversationDetails = props => {
    const {conversation, className, ...rest} = props;

    const classes = useStyles();

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <ConversationToolbar conversation={conversation}/>
            <Divider/>
            <ConversationMessages messages={conversation.messages}/>
            <Divider/>
            <ConversationForm/>
        </div>
    );
};


export default ConversationDetails;
