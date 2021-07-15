import React, {useRef, useState} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Card, CardContent, Divider, Hidden, IconButton, Paper, Tooltip, Typography} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternate';
import AttachFileIcon from '@material-ui/icons/AttachFile';

//import {sendPost} from "../../redux/actions/profilePosts";
import {useDispatch} from "react-redux";
import {addPost, updatePost} from "../../store/actions/postActions";
import {EditorToolbar} from "../RichEditor/components";
import {convertFromRaw, convertToRaw, Editor, EditorState, getDefaultKeyBinding, Modifier, RichUtils} from "draft-js";
import {blockRenderMap} from "../RichEditor/utils";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
    },
    content: {
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
        alignItems: 'center'
    },
    sendButton: {
        width: '130',
    },
    paper: {
        flexGrow: 1,
        padding: theme.spacing(0.5, 1)
    },
    // input: {
    //     width: '100%'
    // },
    divider: {
        [theme.breakpoints.up('sm')]: {
            width: 1,
            height: 24
        },
    },
    fileInput: {
        display: 'none'
    },
    editorContainer: {
        padding: theme.spacing(1),
        minHeight: 60,
        '& .public-DraftEditorPlaceholder-root': {
            ...theme.typography.body2
        },
        '& .public-DraftEditorPlaceholder-hasFocus': {
            display: 'none'
        },
        '& .public-DraftEditor-content': {
            '& p': {
                ...theme.typography.body1
            },
            '& h1': {
                ...theme.typography.h1
            },
            '& h2': {
                ...theme.typography.h2
            },
            '& h3': {
                ...theme.typography.h3
            },
            '& h4': {
                ...theme.typography.h4
            },
            '& h5': {
                ...theme.typography.h5
            },
            '& h6': {
                ...theme.typography.h6
            },
            '& blockquote': {
                ...theme.typography.subtitle1
            },
            '& ul': {
                ...theme.typography.body1,
                marginLeft: theme.spacing(4)
            },
            '& ol': {
                ...theme.typography.body1,
                marginLeft: theme.spacing(4)
            },
            '& pre': {
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
                fontSize: 16,
                padding: 2
            }
        }
    },
    textAlignLeft: {
        textAlign: 'left'
    },
    textAlignCenter: {
        textAlign: 'center'
    },
    textAlignRight: {
        textAlign: 'right'
    },
    textAlignJustify: {
        textAlign: 'justify'
    }
}));

const AddPost = props => {
    const {post, setPost, currentUserName, className, ...rest} = props;

    const classes = useStyles();

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (post._id) {
            const id = post._id;
            const updatedPost = {
                description: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
                profilePicture: post.profilePicture,
                author: post.author,
                date: post.date,
                uid: post.uid
            }

            dispatch(updatePost(updatedPost, id));

        } else {
            const newPost = {
                ...post,
                date: new Date()
            }

            dispatch(addPost(newPost));
        }
        setPost({description: EditorState.createEmpty()});
    }

    const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

    const editorRef = useRef(null);

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const handleContainerClick = () => {
        editorRef.current.focus();
    };

    const handleToolbarToggle = (type, value) => {
        if (type === 'blockType') {
            if (['left', 'center', 'right', 'justify'].includes(value)) {
                const newContentState = Modifier.setBlockData(
                    editorState.getCurrentContent(),
                    editorState.getSelection(),
                    {'text-align': value}
                );
                const newEditorState = EditorState.push(
                    editorState,
                    newContentState,
                    'change-block-data'
                );
                setEditorState(newEditorState);
                return;
            }
            setEditorState(RichUtils.toggleBlockType(editorState, value));
        } else {
            setEditorState(RichUtils.toggleInlineStyle(editorState, value));
        }
    };

    const handleEditorChange = editorState => {
        setEditorState(editorState);
        setPost({...post, description: JSON.stringify(convertToRaw(editorState.getCurrentContent()))})
    };

    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            handleEditorChange(newState);
            return true;
        }
        return false;
    };

    const mapKeyToEditorCommand = event => {
        if (event.keyCode === 9) {
            const newEditorState = RichUtils.onTab(event, editorState, 4);
            if (newEditorState !== editorState) {
                handleEditorChange(newEditorState);
            }
            return;
        }
        return getDefaultKeyBinding(event);
    };

    function blockStyleFn(contentBlock) {
        const textAlign = contentBlock.getData().get('text-align');
        if (textAlign) {
            const className = `textAlign${capitalize(textAlign)}`;
            return classes[className];
        }
        return '';
    }


    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Paper
                    className={classes.paper}
                    elevation={1}
                >
                    <EditorToolbar
                        editorState={editorState}
                        onToggle={handleToolbarToggle}
                    />
                    <Divider/>
                    <div
                        className={classes.editorContainer}
                        onClick={handleContainerClick}
                    >
                        <Editor
                            blockRenderMap={blockRenderMap}
                            blockStyleFn={blockStyleFn}
                            editorState={editorState}
                            handleKeyCommand={handleKeyCommand}
                            keyBindingFn={mapKeyToEditorCommand}
                            onChange={handleEditorChange}
                            placeholder={`Что нового? ${currentUserName}`}
                            ref={editorRef}
                            spellCheck
                        />
                    </div>
                    <Tooltip
                        title="Отправить"
                        type="submit"
                    >
                        <IconButton
                            color='primary'
                        >
                            <SendIcon/>
                        </IconButton>
                    </Tooltip>
                </Paper>
            </form>
        </Card>
    );
};

{/*<Input*/
}
{/*    className={classes.input}*/
}
{/*    disableUnderline*/
}
{/*    value = {post.description}*/
}
{/*    onChange = {(e) => setPost({...post, description: e.target.value})}*/
}
{/*    placeholder={*/
}
{/*        `Что вы думаете, ${currentUserName}`*/
}
{/*    }*/
}
{/*/>*/
}
{/*<Divider className={classes.divider}/>*/
}
{/*<Tooltip title="Прикрепить изображение">*/
}
{/*    <IconButton*/
}
{/*        edge="end"*/
}
{/*        //onClick={handleAttach}*/
}
{/*    >*/
}
{/*        <AddPhotoIcon/>*/
}
{/*    </IconButton>*/
}
{/*</Tooltip>*/
}
{/*<Tooltip title="Прикрепить файл">*/
}
{/*    <IconButton*/
}
{/*        edge="end"*/
}
{/*        //onClick={handleAttach}*/
}
{/*    >*/
}
{/*        <AttachFileIcon/>*/
}
{/*    </IconButton>*/
}
{/*</Tooltip>*/
}
{/*<input*/
}
{/*    className={classes.fileInput}*/
}
{/*    //ref={fileInputRef}*/
}
{/*    type="file"*/
}
{/*/>*/
}

export default AddPost;
