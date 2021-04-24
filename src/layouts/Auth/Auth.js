import React, {Suspense} from 'react';
import {renderRoutes} from 'react-router-config';
import {makeStyles} from "@material-ui/core/styles";
import {LinearProgress} from '@material-ui/core';
import TopBar from "../Dashboard/components/TopBar";

const useStyles = makeStyles(theme => ({
    content: {
        height: '100%',
    }
}));

const Auth = props => {
    const {route} = props;

    const classes = useStyles();

    return (
        <>
            <TopBar/>
            <main className={classes.content}>
                <Suspense fallback={<LinearProgress/>}>
                    {renderRoutes(route.routes)}
                </Suspense>
            </main>
        </>
    );
};

export default Auth;
