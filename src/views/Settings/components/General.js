import React, {useState} from 'react';
import clsx from "clsx";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {signIn, signUp} from "../../../store/actions/authActions";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import {Divider, Hidden, MenuItem, Paper} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormHelperText from "@material-ui/core/FormHelperText";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import FaceIcon from "@material-ui/icons/Face";
import PanoramaIcon from "@material-ui/icons/Panorama";
import HomeIcon from "@material-ui/icons/Home";
import PublicIcon from "@material-ui/icons/Public";
import Button from "@material-ui/core/Button";
import ProfileExample from "./ProfileExample";
import {updateUser} from "../../../store/actions/userActions";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '82%',
        margin: theme.spacing(1, '9%', 5),
    },
    profileExample: {
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, '25%', 3),
        width: '50%',
    },
    textField: {
        width: '100%'
    },
    acceptNewProfile: {
        marginTop: theme.spacing(2),
    },
    margin: {
        marginTop: theme.spacing(1)
    },
    password: {}
}));


const General = props => {
    const {id, className, ...rest} = props;

    const classes = useStyles();

    const dispatch = useDispatch();
    const authUser = useSelector(state => state.auth)

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

    const [user, setUser] = useState({
        userId: authUser._id,
        name: authUser.name,
        email: authUser.email,
        password: authUser.password,
        bio: authUser.bio,
        profilePicture: authUser.profilePicture,
        coverPicture: authUser.coverPicture,
        isAdmin: authUser.isAdmin,
        city: authUser.city,
        from: authUser.from,
        role: authUser.role,
        age: authUser.age
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser(user, authUser._id));
        dispatch(signIn(user.email, user.password))
        // setUser({
        //     userId: "",
        //     name: "",
        //     email: "",
        //     password: "",
        //     bio: "",
        //     profilePicture: "",
        //     coverPicture: "",
        //     isAdmin: "",
        //     city: "",
        //     from: "",
        //     role: "",
        //     age: ""
        // });
    };

    return (
        <Grid
            {...rest}
            container
            className={clsx(classes.root, className)}
        >
            <Grid item xs={12} sm={5} md={7} className={classes.profileExample}>
                <ProfileExample />
                <Typography variant="subtitle1" align={"center"}>
                    Чтобы изменить информацию в профиле, введите "пароль" и нажмите сохранить.
                </Typography>
            </Grid>
            <Grid item xs={12} sm={7} md={5}>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        id="name"
                        autoFocus
                        autoComplete="name"
                        value={user.name}
                        onChange={(e) => setUser({...user, name: e.target.value})}
                        helperText="Имя: от 3 до 30 символов"
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <AccountCircleIcon/>
                            </InputAdornment>,
                        }}
                    />
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
                            ...user, bio: e.target.value
                        })
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
                            ...user, profilePicture: e.target.value
                        })
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
                            ...user, coverPicture: e.target.value
                        })
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
                                    ...user, isAdmin: e.target.value
                                })
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
                                    ...user, role: e.target.value
                                })
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
                                    ...user, age: e.target.value
                                })
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
                                    ...user, city: e.target.value
                                })
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
                                    ...user, from: e.target.value
                                })
                                }
                            />
                        </Grid>
                    </Grid>
                    <Grid container className={classes.acceptNewProfile}>
                        <TextField
                            id="email"
                            helperText="Email: от 3 до 200 символов"
                            className={clsx(classes.margin, classes.textField)}
                            autoFocus
                            autoComplete="email"
                            value={user.email}
                            onChange={(e) => setUser({...user, email: e.target.value})}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <EmailIcon/>
                                </InputAdornment>,
                            }}
                        />
                        <FormControl className={clsx(classes.margin, classes.textField, classes.password)}>
                            <InputLabel htmlFor="password">Пароль</InputLabel>
                            <Input
                                id="password"
                                type={pass.showPassword ? 'text' : 'password'}
                                autoFocus
                                autoComplete="username"
                                value={user.password}
                                onChange={(e) => setUser({
                                        ...user, password: e.target.value
                                    })
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Сохранить
                        </Button>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}

export default General;