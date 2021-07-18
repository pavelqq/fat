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
    const {conversation, authUser, messages, className, ...rest} = props;

    const classes = useStyles();

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <ConversationToolbar conversation={conversation}/>
            <Divider/>
            <ConversationMessages messages={messages}/>
            <Divider/>
            <ConversationForm conversation={conversation} authUser={authUser}/>
        </div>
    );
};


export default ConversationDetails;
