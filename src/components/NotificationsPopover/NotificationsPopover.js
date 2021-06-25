import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {
    Popover,
    CardHeader,
    CardActions,
    Divider,
    Button,
    colors
} from '@material-ui/core';

import {NotificationList, EmptyList} from './components';

const useStyles = makeStyles(() => ({
    root: {
        width: 350,
        maxWidth: '100%'
    },
    actions: {
        backgroundColor: colors.grey[50],
        justifyContent: 'center'
    }
}));

const NotificationsPopover = props => {
    const {notifications, anchorEl, ...rest} = props;

    const classes = useStyles();

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
                <CardHeader title="Notifications"/>
                <Divider/>
                {notifications.length > 0 ? (
                    <NotificationList notifications={notifications}/>
                ) : (
                    <EmptyList/>
                )}
                <Divider/>
                <CardActions className={classes.actions}>
                    <Button
                        component={RouterLink}
                        size="small"
                        to="#"
                    >
                        See all
                    </Button>
                </CardActions>
            </div>
        </Popover>
    );
};


export default NotificationsPopover;
