import React, {useContext, useEffect, useRef, useState} from 'react';
import clsx from "clsx";
import {makeStyles} from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";
import {AuthContext} from "../../context/AuthContext";
import {CircularProgress} from "@material-ui/core";
import axios from "axios";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Копирайт © '}
            <Link color="inherit" href="*">
                Фэт
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    root: {},
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(2, 0, 0),
    },
    title: {
        marginBottom: theme.spacing(2)
    }
}));

const Login = props => {

    const {className, ...rest} = props;
    const classes = useStyles();
    const { from } = props.location.state || { from: {pathname: '/' } }
    const email = useRef();
    const password = useRef();
    const { isFetching, dispatch } = useContext(AuthContext);

    const loginCall = async (userCredential, dispatch) => {
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", userCredential);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err });
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        );
    };
    // const auth = useContext(AuthContext)
    // const message = useMessage();
    // const {loading, request, error, clearError} = useHttp()
    // const [form, setForm] = useState({
    //     email: '', password: ''
    // })
    //
    // useEffect(() => {
    //     message(error)
    //     clearError()
    // }, [error, message, clearError])
    //
    // const changeHandler = event => {
    //     setForm({ ...form, [event.target.name]: event.target.value })
    // }
    //
    // const registerHandler = async () => {
    //     try{
    //         const data = await request('/api/auth/register', 'POST', {...form})
    //         message(data.message)
    //     } catch (e) {}
    // }
    //
    // const loginHandler = async () => {
    //     try{
    //         const data = await request('/api/auth/login', 'POST', {...form})
    //         auth.login(data.token, data.userId)
    //         // message(data.message)
    //     } catch (e) {}
    // }

    return(
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography className={classes.title} component="h1" variant="h5">
                        Выполнить вход
                    </Typography>
                    <Typography component="h4" variant="subtitle2" align="center">
                        Нужна авторизация для просмотра:
                    </Typography>
                    <Typography component="h4" variant="body2">fat.com{from.pathname}</Typography>
                    <form className={classes.form} onSubmit={handleClick}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Эмейл"
                                    name="email"
                                    autoComplete="email"
                                    type="email"
                                    ref={email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Пароль"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    ref={password}
                                    minLength="6"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={isFetching}
                        >
                            {isFetching ? (
                                <CircularProgress color="red" size="20px" />
                            ) : (
                                "Войти"
                            )}
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                        >
                            {isFetching ? (
                                <CircularProgress color="white" size="20px" />
                            ) : (
                                "Создать новый аккаунт"
                            )}
                        </Button>
                        {/*<Button*/}
                        {/*    type="submit"*/}
                        {/*    fullWidth*/}
                        {/*    variant="contained"*/}
                        {/*    color="primary"*/}
                        {/*    className={classes.submit}*/}
                        {/*    onClick={loginHandler}*/}
                        {/*    disabled={loading}*/}
                        {/*>*/}
                        {/*    Войти*/}
                        {/*</Button>*/}
                        {/*<Button*/}
                        {/*    type="submit"*/}
                        {/*    fullWidth*/}
                        {/*    variant="contained"*/}
                        {/*    color="secondary"*/}
                        {/*    className={classes.submit}*/}
                        {/*    onClick={registerHandler}*/}
                        {/*    disabled={loading}*/}
                        {/*>*/}
                        {/*    Зарегистрироваться*/}
                        {/*</Button>*/}
                        {/*<Grid container justify="flex-end">*/}
                        {/*    <Grid item>*/}
                        {/*        <Link href="#" variant="body2">*/}
                        {/*            Нету аккаунта? Зарегистрируйтесь!*/}
                        {/*        </Link>*/}
                        {/*    </Grid>*/}
                        {/*</Grid>*/}
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    )
}

export default Login;