import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {
    Toolbar,
    Input,
    IconButton,
    Tooltip,
    Divider,
    List
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useRouter from "../../../../utils/useRouter";
import {ConversationListItem} from './components';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.white
    },
    searchInput: {
        flexGrow: 1
    }
}));

const ConversationList = props => {
    const {conversations, className, ...rest} = props;

    const classes = useStyles();
    const router = useRouter();
    const selectedConversation = router.match.params.id;

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Toolbar>
                <Input
                    className={classes.searchInput}
                    disableUnderline
                    placeholder="Найти диалог"
                />
                <Tooltip title="Поиск">
                    <IconButton edge="end">
                        <SearchIcon/>
                    </IconButton>
                </Tooltip>
            </Toolbar>
            <Divider/>
            <List disablePadding>
                {conversations.map((conversation, i) => (
                    <ConversationListItem
                        active={conversation.id === selectedConversation}
                        conversation={conversation}
                        divider={i < conversations.length - 1}
                        key={conversation.id}
                    />
                ))}
            </List>
        </div>
    );
};


export default ConversationList;
