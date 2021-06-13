import React, {Suspense, useState} from 'react';
import {renderRoutes} from 'react-router-config';
//import renderRoutes from '../../renderRoutes';
import {makeStyles} from '@material-ui/core/styles';
import {LinearProgress} from '@material-ui/core';

import {NavBar, TopBar} from './components';
import ChatBar from "./components/ChatBar";

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
    const {route, currentUser} = props;
    // const authed = false;
    // const authPath = '/auth/login';

    debugger;

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
                currentUser={currentUser}
            />
            <div className={classes.container}>
                {currentUser && <NavBar
                    className={classes.navBar}
                    onMobileClose={handleNavBarMobileClose}
                    openMobile={openNavBarMobile}
                    currentUser={currentUser}
                />}
                <main className={classes.content}>
                    <Suspense fallback={<LinearProgress/>}>
                        {renderRoutes(route.routes, {currentUser: currentUser})}
                    </Suspense>
                </main>
            </div>
            <ChatBar />
        </div>
    );
};

export default Dashboard;
