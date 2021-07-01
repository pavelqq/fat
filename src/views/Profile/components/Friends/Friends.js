import React, {useState, useEffect} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {
    Avatar,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Input,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    colors
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import DoneOutlineOutlinedIcon from "@material-ui/icons/DoneOutlineOutlined";
import {useDispatch, useSelector} from "react-redux";
import {followUser, unfollowUser} from "../../../../store/actions/userActions";
import {getFriends} from "../../../../store/actions/usersListActions";
import _ from "lodash";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";


const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2)
    },
    content: {
        paddingTop: 0
    },
    search: {
        padding: theme.spacing(2, 3),
        display: 'flex',
        alignItems: 'center'
    },
    searchIcon: {
        color: theme.palette.text.secondary
    },
    searchInput: {
        marginLeft: theme.spacing(1),
        color: theme.palette.text.secondary,
        fontSize: '14px'
    },
    avatar: {
        height: 60,
        width: 60
    },
    listItem: {
        flexWrap: 'wrap'
    },
    listItemText: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(1)
    },
    sendButton: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    actionButtons: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2),
        color: theme.palette.white,
        backgroundColor: colors.green[600],
        '&:hover': {
            backgroundColor: colors.green[900]
        }
    },
    buttonIcon: {
        marginRight: theme.spacing(1)
    },
}));

const Friends = props => {
    const {id, className, ...rest} = props;

    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFriends(id));
    }, [id])

    const currentUser = useSelector((state) => state.userById);
    const AuthedUser = useSelector(state => state.auth)
    const friendsList = useSelector(state => state.usersList)

    let followBool = Boolean(AuthedUser.followings.indexOf(currentUser?._id))
    const [followed, setFollowed] = useState(
        followBool
    );

    const handleFollowUser = async () => {
        try {
            if (followed) {
                dispatch(unfollowUser(AuthedUser._id, currentUser._id))
            } else {
                dispatch(followUser(AuthedUser._id, currentUser._id))
            }
            setFollowed(!followed);
        } catch (error) {
            console.log(error)
        }
    }

    const [value, setValue] = useState("");

    const onChangeHandler = (event) => {
        const { target } = event;
        const val = target.value;
        setValue(val);
    };

    const filterByNames = (friendsList, inputValue) => {
        return friendsList.filter(user => user.name === inputValue);
    }

    const results = !value ? friendsList : filterByNames(friendsList, value);

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <CardHeader title="Друзья"/>
            <Divider/>
            <div className={classes.search}>
                <SearchIcon
                    className={classes.searchIcon}
                    color="inherit"
                />
                <Input
                    className={classes.searchInput}
                    color="inherit"
                    disableUnderline
                    placeholder="Введите полное имя друга"
                    type="text"
                    value={value}
                    onChange={onChangeHandler}
                />
            </div>
            <Divider/>
            <CardContent className={classes.content}>
                <div>
                    <List disablePadding>
                        {results.map((friend, i) => (
                            <ListItem
                                className={classes.listItem}
                                divider={i < results.length - 1}
                                key={friend._id}
                                alignItems="flex-start"
                            >
                                <ListItemAvatar>
                                    <Avatar
                                        alt="Аватарка"
                                        className={classes.avatar}
                                        component={RouterLink}
                                        src={friend.profilePicture}
                                        to={`/profile/${friend._id}/wall`}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    className={classes.listItemText}
                                    primary={friend.name}
                                    secondary={`${friend.followers.length - 1} друзей`}
                                />
                                <Button
                                    color="secondary"
                                    component={RouterLink}
                                    to="/chat"
                                    variant="contained"
                                    className={classes.sendButton}
                                >
                                    <ChatIcon className={classes.buttonIcon}/>
                                    Отправить сообщение
                                </Button>
                                <Button
                                    className={classes.actionButtons}
                                    color="primary"
                                    variant="contained"
                                    onClick={handleFollowUser}
                                >
                                    {followed ? <DoneOutlineOutlinedIcon className={classes.buttonIcon}/>
                                        : <PersonAddIcon className={classes.buttonIcon}/>}
                                    {followed ? "Вы подписаны" : "Подписаться"}
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </CardContent>
        </Card>
    );
};


export default Friends;
