import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';

import axios from "../../utils/axios";
import useRouter from "../../utils/useRouter"
import Page from "../../components/Page";
import {
    ConversationList,
    ConversationDetails,
    ConversationPlaceholder
} from './components';
import {useDispatch, useSelector} from "react-redux";
import {getAllProjects} from "../../store/actions/projectActions";
import {getUsersConversations} from "../../store/actions/conversationActions";
import {getConversationMessages} from "../../store/actions/messageActions";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        display: 'flex',
        '@media (max-width: 863px)': {
            '& $conversationList, & $conversationDetails': {
                flexBasis: '100%',
                width: '100%',
                maxWidth: 'none',
                flexShrink: '0',
                transform: 'translateX(0)'
            }
        }
    },
    openConversion: {
        '@media (max-width: 863px)': {
            '& $conversationList, & $conversationDetails': {
                transform: 'translateX(-100%)'
            }
        }
    },
    conversationList: {
        width: 300,
        flexBasis: 300,
        flexShrink: 0,
        '@media (min-width: 864px)': {
            borderRight: `1px solid ${theme.palette.divider}`
        }
    },
    conversationDetails: {
        flexGrow: 1
    },
    conversationPlaceholder: {
        flexGrow: 1
    }
}));

const Chat = props => {
    const {history} = props;
    const classes = useStyles();
    const router = useRouter();

    const dispatch = useDispatch();

    const authUser = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(getUsersConversations(authUser._id))
    }, [dispatch])

    const conversations = useSelector(state => state.conversationsList)

    useEffect(() => {
        dispatch(getConversationMessages(router.match.params.id))
    }, [dispatch, router.match.params.id])

    const messages = useSelector(state => state.messagesList)

    // conversations.forEach(function (conversation) {
    //     conversation.messages = "false";
    // });

    const appState = useSelector((state) => state);
    console.log(appState);

    const auth = useSelector(state => state.auth)
    if (!auth._id) (
        history.push('/')
    )

    // const [conversations, setConversations] = useState([]);

    let selectedConversation;
    let selectedConversationMessages;

    if (router.match.params.id) {
        selectedConversation = conversations.find(
            c => c.conversationId === router.match.params.id
        );
        selectedConversationMessages = messages.filter(
            m => m.conversationId === router.match.params.id
        )
    }

    return (
        <Page
            className={clsx({
                [classes.root]: true,
                [classes.openConversion]: selectedConversation
            })}
            title="Чаты"
        >
            <ConversationList
                className={classes.conversationList}
                conversations={conversations}
            />
            {(selectedConversation && selectedConversationMessages) ? (
                <ConversationDetails
                    className={classes.conversationDetails}
                    conversation={selectedConversation}
                    messages={selectedConversationMessages}
                    authUser={authUser}
                />
            ) : (
                <ConversationPlaceholder className={classes.conversationPlaceholder}/>
            )}
        </Page>
    );
};

export default Chat;
