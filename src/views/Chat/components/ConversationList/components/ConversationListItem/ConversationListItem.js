import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import {makeStyles} from '@material-ui/core/styles';
import {
    Typography,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    colors
} from '@material-ui/core';

import Label from "../../../../../../components/Label";
import {useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
    active: {
        boxShadow: `inset 4px 0px 0px ${theme.palette.primary.main}`,
        backgroundColor: colors.grey[50]
    },
    avatar: {
        height: 40,
        width: 40
    },
    details: {
        marginLeft: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    unread: {
        marginTop: 2,
        padding: 2,
        height: 18,
        minWidth: 18
    }
}));

const ConversationListItem = props => {
    const {active, conversation, className, ...rest} = props;

    const classes = useStyles();
    //const lastMessage = conversation.messages[conversation.messages.length - 1];

    const authId = useSelector(state => state.auth._id);

    let selectedConversation = {};
    if(conversation.firstUser.uid === authId) {
        selectedConversation = {...conversation.secondUser}
    } else {
        selectedConversation = {...conversation.firstUser}
    }

    return (
        <ListItem
            {...rest}
            button
            className={clsx(
                {
                    [classes.active]: active
                },
                className
            )}
            component={RouterLink}
            to={`/chat/${conversation.conversationId}`}
        >
            <ListItemAvatar>
                <Avatar
                    alt="Ава"
                    className={classes.avatar}
                    src={selectedConversation.profilePicture}
                />
            </ListItemAvatar>
            <ListItemText
                primary={selectedConversation.name}
                primaryTypographyProps={{
                    noWrap: true,
                    variant: 'h6'
                }}
                //secondary={`${lastMessage.sender.name}: ${lastMessage.content}`}
                secondary={`ID диалога: ${conversation.conversationId}`}
                secondaryTypographyProps={{
                    noWrap: true,
                    variant: 'body1'
                }}
            />
            <div className={classes.details}>
                <Typography
                    noWrap
                    variant="body2"
                >
                    {/*{moment(lastMessage.created_at).isSame(moment(), 'day')*/}
                    {/*    ? moment(lastMessage.created_at).format('LT')*/}
                    {/*    : moment(lastMessage.created_at).fromNow()}*/}
                </Typography>
                {/*{conversation.unread > 0 && (*/}
                {/*    <Label*/}
                {/*        className={classes.unread}*/}
                {/*        color={colors.red[500]}*/}
                {/*        shape="rounded"*/}
                {/*    >*/}
                {/*        {conversation.unread}*/}
                {/*    </Label>*/}
                {/*)}*/}
            </div>
        </ListItem>
    );
};


export default ConversationListItem;
