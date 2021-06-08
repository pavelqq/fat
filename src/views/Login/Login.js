import React, {useRef, useState} from 'react';
import clsx from "clsx";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Redirect} from "react-router";
import {login} from "../../redux/actions/auth";
import {useDispatch, useSelector} from "react-redux";
import {clearMessage} from "../../redux/actions/messages";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Копирайт © '}
            <Link color="inherit" href="http://localhost:3000/">
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
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = props => {

    const {className, ...rest} = props;
    const classes = useStyles();
    const { from } = props.location.state || { from: {pathname: '/' } }

    const form = useRef();
    // const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(true);

        dispatch(login(username, password))
            .then(() => {
                props.history.push("/profile/1/wall");
            })

        setLoading(false);

        dispatch(clearMessage());

        //form.current.validateAll();

        // if (checkBtn.current.context._errors.length === 0) {
        //     dispatch(login(username, password))
        //         .then(() => {
        //             props.history.push("/profile");
        //             window.location.reload();
        //         })
        //         .catch(() => {
        //             setLoading(false);
        //         });
        // } else {
        //     setLoading(false);
        // }
    };

    // if (isLoggedIn) {
    //     return <Redirect to="/profile" />;
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
                    <Typography component="h1" variant="h5">
                        Авторизация
                    </Typography>
                    <Typography align="center">Чтобы посмотреть эту страничку: {from.pathname}, тебе надо авторизоваться</Typography>
                    <form className={classes.form} noValidate onSubmit={handleLogin} ref={form}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Эмейл"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={onChangeUsername}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={onChangePassword}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Запомнить меня"
                            disabled
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={loading}
                        >
                            {loading && (
                                "загрузка..."
                            )}
                            Войти
                        </Button>
                        {message && (
                            <div>
                                {message}
                            </div>
                        )}
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Забыли пароль?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/auth/register" variant="body2">
                                    Нету аккаунта? Зарегистрируйтесь
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    )
}

export default Login;