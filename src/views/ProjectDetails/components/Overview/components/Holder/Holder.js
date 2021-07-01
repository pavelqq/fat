import React, {useEffect} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import {makeStyles} from '@material-ui/core/styles';
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    List,
    ListItem,
    Typography
} from '@material-ui/core';

import getInitials from "../../../../../../utils/getInitials";
import Label from "../../../../../../components/Label";
import {generateRandomColor} from "../../../../../../utils/generateRandomColor";
import {useDispatch, useSelector} from "react-redux";
import {getProjectById} from "../../../../../../store/actions/projectActions";
import {getProfileById} from "../../../../../../store/actions/userActions";
import {generateTagsWithId} from "../../../../../../utils/generateTagsWithId";

const useStyles = makeStyles(theme => ({
    root: {},
    header: {
        paddingBottom: 0
    },
    content: {
        paddingTop: 0
    },
    listItem: {
        padding: theme.spacing(2, 0),
        justifyContent: 'space-between'
    },
    tags: {
        padding: theme.spacing(0, 1, 0, 1),
        '& > * + *': {
            marginLeft: theme.spacing(0.5)
        }
    },
}));

const Holder = props => {
    const {projectId, userId, className, ...rest} = props;

    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjectById(projectId));
    }, [projectId])

    useEffect(() => {
        dispatch(getProfileById(userId));
    }, [userId])

    const project = useSelector(state => state.projectById);
    const author = useSelector(state => state.userById);

    return (
        <>
            {(project._id && author.name !== null) ? (
                <>
                    <Card
                        {...rest}
                        className={clsx(classes.root, className)}
                    >
                        <CardHeader
                            avatar={
                                <Avatar
                                    alt="Автор"
                                    className={classes.avatar}
                                    component={RouterLink}
                                    src={author.profilePicture}
                                    to="/profile/1/timeline"
                                >
                                    {getInitials(author.name)}
                                </Avatar>
                            }
                            className={classes.header}
                            disableTypography
                            subheader={
                                <Typography
                                    component={RouterLink}
                                    to="/profile/1/timeline"
                                    variant="h5"
                                >
                                    {author.name}
                                </Typography>
                            }
                            title={
                                <Typography
                                    display="block"
                                    variant="overline"
                                >
                                    Автор проекта
                                </Typography>
                            }
                        />
                        <CardContent className={classes.content}>
                            <List>
                                <ListItem
                                    className={classes.listItem}
                                    disableGutters
                                    divider
                                >
                                    <Typography variant="subtitle2">Дата старта проекта</Typography>
                                    <Typography variant="h6">
                                        {moment(project.startDate).format('DD MMM YYYY')}
                                    </Typography>
                                </ListItem>
                                <ListItem
                                    className={classes.listItem}
                                    disableGutters
                                    divider
                                >
                                    <Typography variant="subtitle2">Дата окончания проекта</Typography>
                                    <Typography variant="h6">
                                        {moment(project.endDate).format('DD MMM YYYY')}
                                    </Typography>
                                </ListItem>
                                <ListItem
                                    className={classes.listItem}
                                    disableGutters
                                    divider
                                >
                                    <Typography variant="subtitle2">Участников</Typography>
                                    <Typography variant="h6">
                                        {project.members.length}
                                    </Typography>
                                </ListItem>
                                <ListItem
                                    className={classes.listItem}
                                    disableGutters
                                    divider
                                >
                                    <div className={classes.tags}>
                                        {generateTagsWithId(project.tags.text).map(tag => (
                                            <Label
                                                color={generateRandomColor()}
                                                key={tag.id}
                                            >
                                                {tag.text}
                                            </Label>
                                        ))}
                                    </div>
                                </ListItem>
                                {/*<ListItem*/}
                                {/*    className={classes.listItem}*/}
                                {/*    disableGutters*/}
                                {/*    divider*/}
                                {/*>*/}
                                {/*    <Typography variant="subtitle2">Теги</Typography>*/}
                                {/*    <Label color={generateRandomColor()}>*/}
                                {/*        {project.tags.text.map((text) => {text + ' '})}*/}
                                {/*    </Label>*/}
                                {/*</ListItem>*/}
                                <ListItem
                                    className={classes.listItem}
                                    disableGutters
                                    divider
                                >
                                    <Typography variant="subtitle2">Последнее обновление</Typography>
                                    <Typography variant="h6">
                                        {moment(project.date).format('DD MMM YYYY')}
                                    </Typography>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </>
            ) : (
                <div>Загрузка...</div>
            )}
        </>
    );
};


export default Holder;
