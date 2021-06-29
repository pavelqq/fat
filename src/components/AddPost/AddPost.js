import React, {useState, useRef} from 'react';
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

//import {sendPost} from "../../redux/actions/profilePosts";
import {useDispatch, useSelector} from "react-redux";
import {addPost, updatePost} from "../../store/actions/postActions";

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
    const {post, setPost, currentUserName, className, ...rest} = props;

    const classes = useStyles();

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        if(post._id){
            const id = post._id;
            const updatedPost = {
                description: post.description,
                profilePicture: post.profilePicture,
                author: post.author,
                date: post.date,
                uid: post.uid
            }

            dispatch(updatePost(updatedPost, id));

        } else{
            const newPost = {
                ...post,
                date: new Date()
            }

            dispatch(addPost(newPost));
        }
        setPost({ description: '' });
    }

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <CardContent className={classes.content}>
                    <Paper
                        className={classes.paper}
                        elevation={1}
                    >
                        <Input
                            className={classes.input}
                            disableUnderline
                            value = {post.description}
                            onChange = {(e) => setPost({...post, description: e.target.value})}
                            placeholder={
                                `Что вы думаете, ${currentUserName}`
                            }
                        />
                    </Paper>
                    <Tooltip
                        //onClick={handleSendPost}
                        title="Отправить"
                        type="submit"
                    >
                        <IconButton
                            //color={value.length > 0 ? 'primary' : 'default'}
                            color={'primary'}
                        >
                            <SendIcon/>
                        </IconButton>
                    </Tooltip>
                    <Divider className={classes.divider}/>
                    <Tooltip title="Прикрепить изображение">
                        <IconButton
                            edge="end"
                            //onClick={handleAttach}
                        >
                            <AddPhotoIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Прикрепить файл">
                        <IconButton
                            edge="end"
                            //onClick={handleAttach}
                        >
                            <AttachFileIcon/>
                        </IconButton>
                    </Tooltip>
                    <input
                        className={classes.fileInput}
                        //ref={fileInputRef}
                        type="file"
                    />
                </CardContent>
            </form>
        </Card>
    );
};


export default AddPost;
