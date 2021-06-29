import React, {useState} from 'react';
import clsx from "clsx";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import {signUp} from "../../store/actions/authActions";
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import FaceIcon from '@material-ui/icons/Face';
import PanoramaIcon from '@material-ui/icons/Panorama';
import PublicIcon from '@material-ui/icons/Public';
import HomeIcon from '@material-ui/icons/Home';
import {MenuItem, Paper} from '@material-ui/core'


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


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(2, 2),
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    textField: {
        width: '100%'
    },
    margin: {
        marginBottom: theme.spacing(1)
    }
}));


const Register = props => {

    const {className, ...rest} = props;
    const classes = useStyles();

    const [pass, setPass] = useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setPass({...pass, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setPass({...pass, showPassword: !pass.showPassword});
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleForgotPassword = (event) => {
        event.preventDefault();
    }

    const isAdminCurrencies = [
        {
            value: 'true',
            label: 'Да',
        },
        {
            value: 'false',
            label: 'Нет',
        },
    ];

    const roleCurrencies = [
        {
            value: '1',
            label: 'не указано',
        },
        {
            value: '2',
            label: 'Тренер',
        },
        {
            value: '3',
            label: 'Пользователь',
        },
    ];

    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        bio: "",
        profilePicture: "",
        coverPicture: "",
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
            isAdmin: "",
            city: "",
            from: "",
            role: "",
            age: ""
        });
    };

    if (auth._id) return props.history.push(`/profile/${auth._id}/wall`);

    return (
        <Grid
            {...rest}
            container
            className={clsx(classes.root, className)}
        >
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Регистрация
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <Typography variant="subtitle2">
                            Обязательно заполни:
                        </Typography>
                        <TextField
                            label="Имя"
                            id="name"
                            required
                            autoFocus
                            autoComplete="name"
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                            helperText="от 3 до 30 символов"
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <AccountCircleIcon/>
                                </InputAdornment>,
                            }}
                        />
                        <TextField
                            label="Почта"
                            id="email"
                            helperText="от 3 до 200 символов"
                            className={clsx(classes.margin, classes.textField)}
                            required
                            autoFocus
                            autoComplete="email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <EmailIcon/>
                                </InputAdornment>,
                            }}
                        />
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                            <InputLabel htmlFor="password">Пароль</InputLabel>
                            <Input
                                id="password"
                                type={pass.showPassword ? 'text' : 'password'}
                                required
                                autoFocus
                                autoComplete="username"
                                value={user.password}
                                onChange={(e) => setUser({
                                    ...user, password: e.target.value })
                                    && handleChange('password')
                                }
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {pass.showPassword ? <Visibility/> : <VisibilityOff/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <FormHelperText id="helperText">от 6 до 200 символов</FormHelperText>
                        </FormControl>
                        <Typography variant="subtitle2">
                            Можно заполнить позже:
                        </Typography>
                        <TextField
                            label="Био..."
                            id="bio"
                            multiline
                            rows={4}
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <FingerprintIcon/>
                                </InputAdornment>,
                            }}
                            autoFocus
                            value={user.bio}
                            onChange={(e) => setUser({
                                ...user, bio: e.target.value })
                            }
                            variant="filled"
                            helperText="До 50 символов"
                        />
                        <TextField
                            label="Аватарка"
                            id="profilePicture"
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <FaceIcon/>
                                </InputAdornment>,
                            }}
                            variant="filled"
                            helperText="Пока что ссылка на фотку"
                            autoFocus
                            value={user.profilePicture}
                            onChange={(e) => setUser({
                                    ...user, profilePicture: e.target.value })
                            }
                        />
                        <TextField
                            label="Кавер профиля"
                            id="coverPicture"
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <PanoramaIcon/>
                                </InputAdornment>,
                            }}
                            variant="filled"
                            helperText="Тоже ссылочка"
                            autoFocus
                            value={user.coverPicture}
                            onChange={(e) => setUser({
                                ...user, coverPicture: e.target.value })
                            }
                        />
                        <Grid container>
                            <Grid xs={12} sm={4} spacing={2}>
                                <TextField
                                    id="isAdmin"
                                    select
                                    label="Админ?"
                                    className={clsx(classes.margin, classes.textField)}
                                    helperText="Нет!)"
                                    fullwidth
                                    value={user.isAdmin}
                                    onChange={(e) => setUser({
                                        ...user, isAdmin: e.target.value })
                                    }
                                >
                                    {isAdminCurrencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid xs={12} sm={4} spacing={2}>
                                <TextField
                                    id="role"
                                    select
                                    label="Ваша роль?"
                                    className={clsx(classes.margin, classes.textField)}
                                    helperText="один из трех..."
                                    fullwidth
                                    value={user.role}
                                    onChange={(e) => setUser({
                                        ...user, role: e.target.value })
                                    }
                                >
                                    {roleCurrencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid xs={12} sm={4} spacing={2}>
                                <TextField
                                    id="age"
                                    label="Дата рождения"
                                    type="date"
                                    className={clsx(classes.margin, classes.textField)}
                                    defaultValue={Date.now()}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={user.age}
                                    onChange={(e) => setUser({
                                        ...user, age: e.target.value })
                                    }
                                />
                            </Grid>
                            <Grid xs={12} sm={6} spacing={2}>
                                <TextField
                                    id="city"
                                    label="Город?"
                                    className={clsx(classes.margin, classes.textField)}
                                    helperText="До 30 символов"
                                    fullwidth
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">
                                            <HomeIcon/>
                                        </InputAdornment>,
                                    }}
                                    value={user.city}
                                    onChange={(e) => setUser({
                                        ...user, city: e.target.value })
                                    }
                                />
                            </Grid>
                            <Grid xs={12} sm={6} spacing={2}>
                                <TextField
                                    id="from"
                                    label="Страна?"
                                    className={clsx(classes.margin, classes.textField)}
                                    helperText="До 30 символов"
                                    fullwidth
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">
                                            <PublicIcon/>
                                        </InputAdornment>,
                                    }}
                                    value={user.from}
                                    onChange={(e) => setUser({
                                        ...user, from: e.target.value })
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Зарегистрироваться
                            </Button>
                            <Grid item xs>
                                <Link href="#" variant="subtitle1" onClick={handleForgotPassword} disabled>
                                    Забыли пароль?
                                </Link>
                            </Grid>
                            <Grid item justify="flex-end">
                                <Grid item>
                                    <Link href="/auth/login" variant="subtitle1">
                                        Уже есть аккаунт? Авторизуйтесь
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright/>
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
}

export default Register;