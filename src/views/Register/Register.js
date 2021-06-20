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
import {signUp} from "../../store/actions/authActions";


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

    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        bio: "",
        profilePicture: "",
        coverPicture: "",
        followers: "",
        followings: "",
        projects: "",
        isAdmin: "",
        city: "",
        from: "",
        role: "",
        age: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp(user));
        setUser({
            name: "",
            email: "",
            password: "",
            bio: "",
            profilePicture: "",
            coverPicture: "",
            followers: "",
            followings: "",
            projects: "",
            isAdmin: "",
            city: "",
            from: "",
            role: "",
            age: ""
        });
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
                        Регистрация
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={1}>
                            <Grid item xs={16} sm={9}>
                                <TextField
                                    autoComplete="username"
                                    name="username"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Имя"
                                    autoFocus
                                    value={user.name}
                                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                                />
                            </Grid>
                            {/*<Grid item xs={16} sm={3}>*/}
                            {/*    <TextField*/}
                            {/*        name="age"*/}
                            {/*        variant="outlined"*/}
                            {/*        required*/}
                            {/*        fullWidth*/}
                            {/*        id="age"*/}
                            {/*        label="Возраст"*/}
                            {/*        autoFocus*/}
                            {/*        value={user.age}*/}
                            {/*        onChange={(e) => setUser({ ...user, age: e.target.value })}*/}
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
                                    value={user.email}
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
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
                                    value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                />
                            </Grid>
                            {/*<Grid item xs={12} sm={6}>*/}
                            {/*    <TextField*/}
                            {/*        variant="outlined"*/}
                            {/*        required*/}
                            {/*        fullWidth*/}
                            {/*        id="from"*/}
                            {/*        label="Страна"*/}
                            {/*        name="from"*/}
                            {/*        value={user.from}*/}
                            {/*        onChange={(e) => setUser({ ...user, from: e.target.value })}*/}
                            {/*    />*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs={12} sm={6}>*/}
                            {/*    <TextField*/}
                            {/*        variant="outlined"*/}
                            {/*        required*/}
                            {/*        fullWidth*/}
                            {/*        id="city"*/}
                            {/*        label="Город"*/}
                            {/*        name="city"*/}
                            {/*        value={user.city}*/}
                            {/*        onChange={(e) => setUser({ ...user, city: e.target.value })}*/}
                            {/*    />*/}
                            {/*</Grid>*/}
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