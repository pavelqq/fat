import React from 'react';
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
    }
}));

const Holder = props => {
    const {project, className, ...rest} = props;

    const classes = useStyles();

    return (
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
                        src={project.author.avatar}
                        to="/profile/1/timeline"
                    >
                        {getInitials(project.author.name)}
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
                        {project.author.name}
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
                        <Typography variant="subtitle2">Дата окончания проекта</Typography>
                        <Typography variant="h6">
                            {moment(project.deadline).format('DD MMM YYYY')}
                        </Typography>
                    </ListItem>
                    <ListItem
                        className={classes.listItem}
                        disableGutters
                        divider
                    >
                        <Typography variant="subtitle2">Участников</Typography>
                        <Typography variant="h6">
                            {project.price} {project.currency}
                        </Typography>
                    </ListItem>
                    <ListItem
                        className={classes.listItem}
                        disableGutters
                        divider
                    >
                        <Typography variant="subtitle2">Теги</Typography>
                        <Label color={project.tags[0].color}>{project.tags[0].text}</Label>
                    </ListItem>
                    <ListItem
                        className={classes.listItem}
                        disableGutters
                        divider
                    >
                        <Typography variant="subtitle2">Последнее обновление</Typography>
                        <Typography variant="h6">
                            {moment(project.updated_at).format('DD MMM YYYY')}
                        </Typography>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
};


export default Holder;
