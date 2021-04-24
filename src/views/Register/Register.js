import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {}
}));

const Register = () => {
    const classes = useStyles();

    return(
        <Typography className={classes.root}>Register</Typography>
    )
};

export default Register;
