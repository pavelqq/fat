import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Popover,
    Divider,
    colors,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import CancelIcon from '@material-ui/icons/Cancel';

import {useDispatch, useSelector} from "react-redux";
import {deletePost} from "../../../store/actions/postActions";

const useStyles = makeStyles(() => ({
    root: {
        width: 200,
        maxWidth: '100%'
    },
    actions: {
        backgroundColor: colors.grey[50],
        justifyContent: 'center'
    }
}));

const NotificationsPopover = props => {
    const {posts, post, setPost, closedOptions, handleCloseOptions, anchorEl, ...rest} = props;

    const classes = useStyles();

    const authedUser = useSelector(state => state.auth);
    const currentUser = useSelector(state => state.userById);

    const dispatch = useDispatch()

    const handleOnUpdateClick = (id) => {
        const foundPost = posts.find((post) => post._id === id);
        setPost({ ...foundPost });
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    const handleDelete = (id) => {
        dispatch(deletePost(id));
    };

    return (
        <Popover
            {...rest}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
            }}
        >
            <div className={classes.root}>
                <Divider/>
                {authedUser._id === currentUser._id ? (
                    <List>
                        <ListItem button onClick={() => handleOnUpdateClick(post._id)}>
                            <ListItemIcon>
                                <EditIcon />
                            </ListItemIcon>
                            <ListItemText primary="Редактировать пост" />
                        </ListItem>
                        <ListItem button onClick={() => handleDelete(post._id)}>
                            <ListItemIcon>
                                <DeleteIcon />
                            </ListItemIcon>
                            <ListItemText primary="Удалить пост" />
                        </ListItem>
                    </List>
                ) : (
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <CancelIcon />
                            </ListItemIcon>
                            <ListItemText primary="Скрыть пост" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <ReportProblemIcon />
                            </ListItemIcon>
                            <ListItemText primary="Пожаловаться" />
                        </ListItem>
                    </List>
                )}
                <Divider/>
            </div>
        </Popover>
    );
};


export default NotificationsPopover;