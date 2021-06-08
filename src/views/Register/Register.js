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
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../redux/actions/auth";


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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Register = props => {

    const {className, ...rest} = props;
    const classes = useStyles();

    const form = useRef();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);

    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setSuccessful(false);
        dispatch(register(username, email, password))
            .then(() => {
                setSuccessful(true);
            })
            .catch(() => {
                setSuccessful(false);
            });
    };

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
                        Регистрация
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={handleRegister} ref={form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    autoComplete="username"
                                    name="username"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Имя"
                                    autoFocus
                                    value={username}
                                    onChange={onChangeUsername}
                                />
                            </Grid>
                            {/*<Grid item xs={12} sm={6}>*/}
                            {/*    <TextField*/}
                            {/*        variant="outlined"*/}
                            {/*        required*/}
                            {/*        fullWidth*/}
                            {/*        id="lastName"*/}
                            {/*        label="Last Name"*/}
                            {/*        name="lastName"*/}
                            {/*        autoComplete="lname"*/}
                            {/*    />*/}
                            {/*</Grid>*/}
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Эмейл"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={onChangeEmail}
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
                                    value={password}
                                    onChange={onChangePassword}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="Я хочу получать новости проекта и уведомления на почту"
                                    disabled
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Зарегистрироваться
                        </Button>
                        {!successful && (
                            <div>
                                {message}
                            </div>
                        )}
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/auth/login" variant="body2">
                                    Уже есть аккаунт? Авторизуйтесь
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    )
}

export default Register;