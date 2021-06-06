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

debugger;

const Auth = props => {
    const {routes} = props;
    const classes = useStyles();

    return (
        <>
            {/*<TopBar/>*/}
            <main className={classes.content}>
                <Suspense fallback={<LinearProgress/>}>
                    {renderRoutes(routes)}
                </Suspense>
            </main>
        </>
    );
};

debugger;

export default Auth;
