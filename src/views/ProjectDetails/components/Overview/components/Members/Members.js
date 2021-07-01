import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    colors
} from '@material-ui/core';

import getInitials from "../../../../../../utils/getInitials";

const useStyles = makeStyles(() => ({
    root: {},
    header: {
        paddingBottom: 0
    },
    content: {
        paddingTop: 0
    },
    actions: {
        backgroundColor: colors.grey[50]
    },
    manageButton: {
        width: '100%'
    }
}));

const Members = props => {
    const {members, className, ...rest} = props;

    const classes = useStyles();

    

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <CardHeader
                className={classes.header}
                title="Участники проекта"
                titleTypographyProps={{
                    variant: 'overline'
                }}
            />
            <CardContent className={classes.content}>
                <List>
                    {members && members.map(member => (
                        <ListItem
                            disableGutters
                            key={member.id}
                        >
                            <ListItemAvatar>
                                <Avatar
                                    alt="Author"
                                    className={classes.avatar}
                                    src={member.avatar}
                                >
                                    {getInitials(member.name)}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={member.name}
                                primaryTypographyProps={{variant: 'h6'}}
                                secondary={member.bio}
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
            <CardActions className={classes.actions}>
                <Button className={classes.manageButton}>Посмотреть всех</Button>
            </CardActions>
        </Card>
    );
};


export default Members;
