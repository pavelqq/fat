import React from 'react';
import clsx from "clsx";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    root: {}
}));

const Register = props => {

    const {className, ...rest} = props;
    const classes = useStyles();

    return(
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            Register
        </div>
    )
}

export default Register;