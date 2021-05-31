import React from 'react';
import clsx from "clsx";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    root: {}
}));

const Login = props => {

    const {className, ...rest} = props;
    const classes = useStyles();
    const { from } = props.location.state || { from: {pathname: '/' } }

    return(
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <p>Чтобы посмотреть эту страничку: {from.pathname}, тебе надо авторизоваться</p>
            <button>Зайти</button>
        </div>
    )
}

export default Login;