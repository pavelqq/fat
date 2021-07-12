import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Paper} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    image: {
        width: '100vh',
        backgroundImage: `url(/images/404/404.png)`
    }
}));

const Error404 = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container component={Paper} className={classes.image} />
        </>
    )
};

export default Error404;
