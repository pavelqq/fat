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
import {signIn} from "../../store/actions/authActions";


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

    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [creds, setCreds] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(creds.email, creds.password));
        setCreds({ email: "", password: "" });
    };

    if (auth._id) return props.history.push(`/profile/${auth._id}/wall`);

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
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
                            value={creds.email}
                            onChange={(e) => setCreds({ ...creds, email: e.target.value })}
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
                            value={creds.password}
                            onChange={(e) => setCreds({ ...creds, password: e.target.value })}
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
                        >
                            Войти
                        </Button>
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