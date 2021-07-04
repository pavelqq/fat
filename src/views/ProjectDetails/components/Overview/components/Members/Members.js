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
    colors, Typography
} from '@material-ui/core';

import getInitials from "../../../../../../utils/getInitials";


const useStyles = makeStyles(theme => ({
    root: {},
    header: {
        paddingBottom: 0
    },
    content: {
        paddingTop: 0
    },
    nothing: {},
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
                    {members.length > 0 ? members.map(member => (
                        <ListItem
                            disableGutters
                            key={member._id}
                        >
                            <ListItemAvatar>
                                <Avatar
                                    alt="Author"
                                    className={classes.avatar}
                                    src={member.profilePicture}
                                >
                                    {getInitials(member.name)}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={member.name}
                                primaryTypographyProps={{variant: 'h6'}}
                                secondary={`${member.followers.length - 1} подписчиков`}
                                // не знаю нужна ли эта информация здесь про подписчиков, в будущем может удалю,
                                // щас пусть пространство хоть занимает
                            />
                        </ListItem>
                    )) : (
                        <div className={classes.nothing}>
                            <Typography variant="body1">Пока нет участников...</Typography>
                        </div>
                    )}
                </List>
            </CardContent>
            <CardActions className={classes.actions}>
                <Button disabled className={classes.manageButton}>Посмотреть всех</Button>
            </CardActions>
        </Card>
    );
};


export default Members;
