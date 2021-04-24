import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {}
}));

const Login = () => {
    const classes = useStyles();

    return(
        <Typography className={classes.root}>Login</Typography>
    )
};

export default Login;
