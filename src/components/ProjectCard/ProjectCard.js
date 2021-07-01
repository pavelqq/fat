import React, {useState} from 'react';
import {Link as RouterLink, Redirect} from 'react-router-dom';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {
    Avatar,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    IconButton,
    Link,
    Tooltip,
    Typography,
    colors
} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { Editor, EditorState, convertFromRaw } from "draft-js";

import getInitials from "../../utils/getInitials";
import Label from "../Label";
import moment from 'moment';
import {generateRandomColor} from "../../utils/generateRandomColor";
import {useDispatch, useSelector} from "react-redux";
import {likeDislikePost} from "../../store/actions/postActions";
import {memberingProject} from "../../store/actions/projectActions";


const useStyles = makeStyles(theme => ({
    root: {},
    header: {
        paddingBottom: 0
    },
    content: {
        padding: 0,
        '&:last-child': {
            paddingBottom: 0
        }
    },
    description: {
        padding: theme.spacing(2, 2, 1, 3),
    },
    tags: {
        padding: theme.spacing(1, 3, 1, 3),
        '& > * + *': {
            marginLeft: theme.spacing(1)
        }
    },
    tagsText: {
        color: "#FFFFFF",
    },
    learnMoreButton: {
        marginLeft: theme.spacing(2)
    },
    likedButton: {
        color: colors.red[900]
    },
    dislikedButton: {
        color: colors.red[200]
    },
    shareButton: {
        marginLeft: theme.spacing(1)
    },
    details: {
        padding: theme.spacing(1, 3)
    }
}));

const ProjectCard = props => {
    const {project, className, ...rest} = props;

    const id = props.project._id;

    const classes = useStyles();

    // const [liked, setLiked] = useState(true);
    //
    // const handleLike = () => {
    //     setLiked(true);
    // };
    //
    // const handleUnlike = () => {
    //     setLiked(false);
    // };

    const dispatch = useDispatch();
    const authUserId = useSelector(state => state.auth._id)

    function likedByUser(userId) {
        return userId === authUserId;
    }

    const [membering, setMembering] = useState(project.members.length);
    const [isMembering, setIsMembering] = useState(project.members.some(likedByUser));

    const memberingHandler = () => {
        try {
            dispatch(memberingProject(project._id, authUserId))
        } catch (err) {
        }
        setMembering(isMembering ? membering - 1 : membering + 1);
        setIsMembering(!isMembering);
    };

    function generateTagsWithId() {
        let tagsWithId = [];

        for (let i = 0; i < project.tags.text.length; i++) {
            tagsWithId[i] = {
                text: project.tags.text[i],
                id: i,
            }
        }

        return tagsWithId;
    }

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <CardHeader
                avatar={
                    <Avatar
                        alt="Author"
                        src={project.author.profilePicture}
                    >
                        {getInitials(project.author.name)}
                    </Avatar>
                }
                className={classes.header}
                disableTypography
                subheader={
                    <Typography variant="body2">
                        от{' '}
                        <Link
                            color="textPrimary"
                            component={RouterLink}
                            to={`/profile/${project.author.uid}/wall`}
                            variant="h6"
                        >
                            {project.author.name}
                        </Link>{' '}
                        | Обновлен: {moment(project.date).fromNow()}
                    </Typography>
                }
                title={
                    <Link
                        color="textPrimary"
                        component={RouterLink}
                        to={`/projects/${id}/overview`}
                        variant="h5"
                    >
                        {project.title}
                    </Link>
                }
            />
            <CardContent className={classes.content}>
                <div className={classes.description}>
                    <Editor
                        editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(project.description)))}
                        readOnly={true}
                    />
                </div>
                <div className={classes.tags}>
                    {generateTagsWithId().map(tag => (
                        <Label
                            color={generateRandomColor()}
                            key={tag.id}
                        >
                            {tag.text}
                        </Label>
                    ))}
                </div>
                <Divider/>
                <div className={classes.details}>
                    <Grid
                        alignItems="center"
                        container
                        justify="space-between"
                        spacing={1}
                    >
                        <Grid item>
                            <Typography variant="h5">{project.difficult} баллов</Typography>
                            <Typography variant="body2">Сложность</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">{project.members.length}</Typography>
                            <Typography variant="body2">Участники проекта</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">{moment(`${project.startDate}`).format("Do MMM YY")}</Typography>
                            <Typography variant="body2">Начало проекта</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">{moment(`${project.endDate}`).format("Do MMM YY")}</Typography>
                            <Typography variant="body2">Конец проекта</Typography>
                        </Grid>
                        <Grid item>
                            {isMembering ? (
                                <Tooltip title="Покинуть проект">
                                    <IconButton
                                        className={classes.likedButton}
                                        onClick={memberingHandler}
                                        size="small"
                                    >
                                        Вы участвуете!
                                        <FavoriteIcon/>
                                    </IconButton>
                                </Tooltip>
                            ) : (
                                <Tooltip title="Участвовать в проекте">
                                    <IconButton
                                        className={classes.dislikedButton}
                                        onClick={memberingHandler}
                                        size="small"
                                    >
                                        Принять участие?
                                        <FavoriteBorderIcon/>
                                    </IconButton>
                                </Tooltip>
                            )}
                            <Tooltip title="Поделится">
                                <IconButton
                                    className={classes.shareButton}
                                    size="small"
                                >
                                    <ShareIcon/>
                                </IconButton>
                            </Tooltip>
                            <Button
                                className={classes.learnMoreButton}
                                component={RouterLink}
                                size="small"
                                to={`/projects/${id}/overview`}
                            >
                                Подробнее
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </CardContent>
        </Card>
    );
};


export default ProjectCard;
