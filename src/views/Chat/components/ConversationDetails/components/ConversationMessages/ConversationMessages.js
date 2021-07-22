import React, {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {makeStyles} from '@material-ui/core/styles';

import ConversationMessage from '../ConversationMessage';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        overflow: "hidden",
        maxHeight: '100%'
    },
    inner: {
        overflow: "auto",
        padding: theme.spacing(7),
    }
}));

const ConversationMessages = props => {
    const {messages, className, ...rest} = props;

    const classes = useStyles();

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"})
    };

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    // не работает прокрутка вниз с перфект баром, позже сделаю
    // const lastIndex = row.length - 1;
    // row.map((rank, i) => {
    //   if (i === lastIndex) {
    //     // последнее сообщение
    //   } else {
    //     // не последнее сообщение
    //   }
    // })

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <PerfectScrollbar>
                <div className={classes.inner}>
                    {messages.map(message => {
                        return (
                            <ConversationMessage
                                key={message.id}
                                message={message}
                            />
                        );
                    })}
                    <div ref={messagesEndRef}/>
                </div>
            </PerfectScrollbar>
        </div>
    );
};


export default ConversationMessages;
