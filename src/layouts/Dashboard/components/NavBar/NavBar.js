import React, {useEffect} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
// import { useSelector } from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import {Drawer, Divider, Paper, Avatar, Typography} from '@material-ui/core';
import {Hidden} from '@material-ui/core';
import navigationConfig from './navigationConfig';
import Navigation from "../../../../components/Navigation";
import useRouter from "../../../../utils/useRouter";
import PerfectScrollbar from 'react-perfect-scrollbar';


const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        overflow: 'hidden',
    },
    content: {
        padding: theme.spacing(2)
    },
    profile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'fit-content'
    },
    avatar: {
        width: 80,
        height: 80
    },
    name: {
        marginTop: theme.spacing(1)
    },
    divider: {
        marginTop: theme.spacing(1)
    },
    navigation: {
        marginTop: theme.spacing(1),
    }
}));

const NavBar = props => {
    const {openMobile, onMobileClose, className, ...rest} = props;

    const classes = useStyles();
    const router = useRouter();
    // const session = useSelector(state => state.session);
    useEffect(() => {
        if (openMobile) {
            onMobileClose && onMobileClose();
        }
    }, [router.location.pathname]);

    const navbarContent = (
        <div className={classes.content}>
            <div className={classes.profile}>
                <Avatar
                    alt="Person"
                    className={classes.avatar}
                    component={RouterLink}
                    // src={session.user.avatar}
                    src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
                    to="/profile/1/wall"
                />
                <Typography
                    className={classes.name}
                    variant="h4"
                >
                    {/*{session.user.first_name} {session.user.last_name}*/}
                    Павел Буре
                </Typography>
                <Typography variant="body2">
                    {/*{session.user.bio}*/}
                    Лох какой-то
                </Typography>
            </div>
            <Divider className={classes.divider}/>
            <nav className={classes.navigation}>
                {navigationConfig.map(list => (
                    <Navigation
                        component="div"
                        key={list.title}
                        pages={list.pages}
                        title={list.title}
                    />
                ))}
            </nav>
        </div>
    );

    return (
        <>
            <Hidden lgUp>
                <Drawer
                    anchor="left"
                    onClose={onMobileClose}
                    open={openMobile}
                    variant="temporary"
                >
                    <div
                        {...rest}
                        className={clsx(classes.root, className)}
                    >
                        <PerfectScrollbar>
                            {navbarContent}
                        </PerfectScrollbar>
                    </div>
                </Drawer>
            </Hidden>
            <Hidden mdDown>
                <Paper
                    {...rest}
                    className={clsx(classes.root, className)}
                    elevation={0}
                    square
                >
                    <PerfectScrollbar>
                        {navbarContent}
                    </PerfectScrollbar>
                </Paper>
            </Hidden>
        </>
    );
};

export default NavBar;
