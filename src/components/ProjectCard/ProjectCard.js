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

import getInitials from "../../utils/getInitials";
import Label from "../Label";
import moment from 'moment';


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
        padding: theme.spacing(2, 3, 1, 3)
    },
    tags: {
        padding: theme.spacing(0, 3, 1, 3),
        '& > * + *': {
            marginLeft: theme.spacing(1)
        }
    },
    learnMoreButton: {
        marginLeft: theme.spacing(2)
    },
    likedButton: {
        color: colors.red[600]
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

    const id = props.project.id;

    const classes = useStyles();

    const [liked, setLiked] = useState(project.liked);

    const handleLike = () => {
        setLiked(true);
    };

    const handleUnlike = () => {
        setLiked(false);
    };

    debugger;

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <CardHeader
                avatar={
                    <Avatar
                        alt="Author"
                        src={project.author.avatar}
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
                            to="/profile/1/timeline"
                            variant="h6"
                        >
                            {project.author.name}
                        </Link>{' '}
                        | Обновлен: {moment(project.updated_at).fromNow()}
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
                    <Typography
                        colo="textSecondary"
                        variant="subtitle2"
                    >
                        {project.description}
                    </Typography>
                </div>
                <div className={classes.tags}>
                    {project.tags.map(tag => (
                        <Label
                            color={tag.color}
                            key={tag.text}
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
                        spacing={3}
                    >
                        <Grid item>
                            <Typography variant="h5">{project.duration} месяцев</Typography>
                            <Typography variant="body2">Длительность плана</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">{project.difficult}</Typography>
                            <Typography variant="body2">Сложность</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">{project.type}</Typography>
                            <Typography variant="body2">Тип плана</Typography>
                        </Grid>
                        <Grid item>
                            {liked ? (
                                <Tooltip title="Дизлайк">
                                    <IconButton
                                        className={classes.likedButton}
                                        onClick={handleUnlike}
                                        size="small"
                                    >
                                        <FavoriteIcon/>
                                    </IconButton>
                                </Tooltip>
                            ) : (
                                <Tooltip title="Лайк">
                                    <IconButton
                                        className={classes.likeButton}
                                        onClick={handleLike}
                                        size="small"
                                    >
                                        <FavoriteBorderIcon/>
                                    </IconButton>
                                </Tooltip>
                            )}
                            <Tooltip title="Отправить">
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
