import React, {Suspense, useState} from 'react';
import {renderRoutes} from 'react-router-config';
import {makeStyles} from '@material-ui/core/styles';
import {LinearProgress} from '@material-ui/core';
import {NavBar, TopBar, ChatBar} from './components';
import {useSelector} from "react-redux";

const useStyles = makeStyles(() => ({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
    },
    topBar: {
        zIndex: 2,
        position: 'relative'
    },
    container: {
        paddingTop: '60px',
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
    },
    navBar: {
        zIndex: 3,
        width: 256,
        minWidth: 256,
        flex: '0 0 auto',
    },
    content: {
        overflowY: 'auto',
        flex: '1 1 auto',
    }
}));

const Dashboard = props => {
    const {route} = props;

    const user = useSelector(state => state.auth);

    const classes = useStyles();
    const [openNavBarMobile, setOpenNavBarMobile] = useState(false);

    const handleNavBarMobileOpen = () => {
        setOpenNavBarMobile(true);
    };

    const handleNavBarMobileClose = () => {
        setOpenNavBarMobile(false);
    };

    return (
        <div className={classes.root}>
            <TopBar
                className={classes.topBar}
                onOpenNavBarMobile={handleNavBarMobileOpen}
            />
            <div className={classes.container}>
                {user._id && <NavBar
                    className={classes.navBar}
                    onMobileClose={handleNavBarMobileClose}
                    openMobile={openNavBarMobile}
                />}
                <main className={classes.content}>
                    <Suspense fallback={<LinearProgress/>}>
                        {renderRoutes(route.routes)}
                    </Suspense>
                </main>
            </div>
            <ChatBar />
        </div>
    );
};

export default Dashboard;
