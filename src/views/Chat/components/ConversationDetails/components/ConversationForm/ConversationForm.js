import React, {useRef, useState} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {
    Avatar,
    Divider,
    IconButton,
    Input,
    Paper,
    Tooltip
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternate';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import {useDispatch, useSelector} from "react-redux";
import {v4 as uuidv4} from 'uuid';
import {addMessage} from "../../../../../../store/actions/messageActions";


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.white,
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1, 2)
    },
    paper: {
        flexGrow: 1,
        marginLeft: theme.spacing(2),
        padding: theme.spacing(0.5, 2)
    },
    input: {
        width: '100%'
    },
    divider: {
        width: 1,
        height: 24
    },
    fileInput: {
        display: 'none'
    },
    form: {
        width: '100%'
    }
}));

const ConversationForm = props => {
    let {className, authUser, cId, ...rest} = props;

    const classes = useStyles();

    // const fileInputRef = useRef(null);

    if (!cId) (
        cId = uuidv4()
    )

    const [message, setMessage] = useState({
        conversationId: cId,
        content: '',
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.persist();

        const newMessage = {
            ...message,
            date: new Date()
        }

        dispatch(addMessage(newMessage));
        setMessage({ content: '' });
    }

    // const handleChange = event => {
    //     event.persist();
    //
    //     setMessage(event.target.message);
    // };

    // const handleAttach = () => {
    //     fileInputRef.current.click();
    // };

    return (
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Avatar
                alt="Person"
                src={authUser.profilePicture}
            />
            <Paper
                className={classes.paper}
                elevation={1}
            >
                <Input
                    className={classes.input}
                    disableUnderline
                    // onChange={handleChange}
                    placeholder="Напишите что-нибудь..."
                    value={message.content}
                    onChange={(e) => setMessage({
                        ...message, content: e.target.value,
                    })}
                />
            </Paper>
            <Tooltip
                title="Отправить"
                type="submit"
            >
                <IconButton color='primary'>
                    <SendIcon/>
                </IconButton>
            </Tooltip>
            <Divider className={classes.divider}/>
            {/*<Tooltip title="Сохранить фото">*/}
            {/*    <IconButton*/}
            {/*        edge="end"*/}
            {/*        onClick={handleAttach}*/}
            {/*    >*/}
            {/*        <AddPhotoIcon/>*/}
            {/*    </IconButton>*/}
            {/*</Tooltip>*/}
            {/*<Tooltip title="Загрузить файл">*/}
            {/*    <IconButton*/}
            {/*        edge="end"*/}
            {/*        onClick={handleAttach}*/}
            {/*    >*/}
            {/*        <AttachFileIcon/>*/}
            {/*    </IconButton>*/}
            {/*</Tooltip>*/}
            {/*<input*/}
            {/*    className={classes.fileInput}*/}
            {/*    ref={fileInputRef}*/}
            {/*    type="file"*/}
            {/*/>*/}
        </div>
        </form>
    );
};


export default ConversationForm;
