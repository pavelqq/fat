import React, {useState, useRef} from 'react';
//import { useSelector } from 'react-redux_old';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {
    Card,
    CardContent,
    Divider,
    IconButton,
    Input,
    Paper,
    Tooltip
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternate';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import {sendPost} from "../../redux/actions/profilePosts";
import {useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
    },
    content: {
        display: 'flex',
        alignItems: 'center'
    },
    paper: {
        flexGrow: 1,
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
    }
}));

const AddPost = props => {
    const {currentUserName, className, ...rest} = props;

    const classes = useStyles();
    const fileInputRef = useRef(null);
    const [value, setValue] = useState('');
    //const session = useSelector(state => state.session);
    //const post = useSelector((state) => state.post);

    const handleChange = event => {
        event.persist();
        setValue(event.target.value);
    };

    const handleAttach = () => {
        fileInputRef.current.click();
    };

    // const handleSendPost = (post) => {
    //     sendPost(post);
    //     setValue('')
    // }

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <CardContent className={classes.content}>
                <Paper
                    className={classes.paper}
                    elevation={1}
                >
                    <Input
                        className={classes.input}
                        disableUnderline
                        onChange={handleChange}
                        placeholder={
                              `Что вы думаете, ${currentUserName}`
                        }
                    />
                </Paper>
                <Tooltip
                    // onClick={handleSendPost}
                    title="Отправить">
                    <IconButton color={value.length > 0 ? 'primary' : 'default'}>
                        <SendIcon/>
                    </IconButton>
                </Tooltip>
                <Divider className={classes.divider}/>
                <Tooltip title="Прикрепить изображение">
                    <IconButton
                        edge="end"
                        onClick={handleAttach}
                    >
                        <AddPhotoIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Прикрепить файл">
                    <IconButton
                        edge="end"
                        onClick={handleAttach}
                    >
                        <AttachFileIcon/>
                    </IconButton>
                </Tooltip>
                <input
                    className={classes.fileInput}
                    ref={fileInputRef}
                    type="file"
                />
            </CardContent>
        </Card>
    );
};


export default AddPost;
