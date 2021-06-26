/* eslint-disable no-unused-vars */
import React, {useState, useRef, useEffect} from 'react';
import {Link as RouterLink, useHistory} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {
    AppBar,
    Badge,
    Button,
    IconButton,
    Toolbar,
    Hidden,
    Input,
    colors,
    Popper,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ClickAwayListener
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/LockOutlined';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import useRouter from "../../../../utils/useRouter";
import Typography from "@material-ui/core/Typography";
import AndroidOutlinedIcon from '@material-ui/icons/AndroidOutlined';
import axios from "../../../../utils/axios";
import PricingModal from "../../../../components/PricingModal";
import NotificationsPopover from "../../../../components/NotificationsPopover";
import BreadcrumbsNav from "../../../../components/Breadcrumbs";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../../redux/actions/auth";
import {signOut} from "../../../../store/actions/authActions";


const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: 'none',
        color: 'white',
        padding: '0 3.5%',
    },
    title: {
        color: "white"
    },
    flexGrow: {
        flexGrow: 1
    },
    search: {
        backgroundColor: 'rgba(255,255,255, 0.1)',
        borderRadius: 4,
        flexBasis: 300,
        height: 40,
        padding: theme.spacing(0, 2),
        display: 'flex',
        alignItems: 'center',
        marginLeft: theme.spacing(3)
    },
    searchIcon: {
        marginRight: theme.spacing(2),
        color: 'inherit'
    },
    searchInput: {
        flexGrow: 1,
        color: 'inherit',
        '& input::placeholder': {
            opacity: 1,
            color: 'inherit'
        }
    },
    searchPopper: {
        zIndex: theme.zIndex.appBar + 100
    },
    searchPopperContent: {
        marginTop: theme.spacing(1)
    },
    trialButton: {
        marginLeft: theme.spacing(2),
        color: theme.palette.white,
        backgroundColor: colors.green[600],
        '&:hover': {
            backgroundColor: colors.green[900]
        }
    },
    trialIcon: {
        marginRight: theme.spacing(1)
    },
    notificationsButton: {
        marginLeft: theme.spacing(1)
    },
    notificationsBadge: {
        backgroundColor: colors.orange[600]
    },
    logoutButton: {
        marginLeft: theme.spacing(1)
    },
    logoutIcon: {
        marginRight: theme.spacing(1)
    },
    breadcrumbsNav: {},
}));

const TopBar = props => {
    const {onOpenNavBarMobile, className, ...rest} = props;

    const currentUser = useSelector((state) => state.auth);

    const classes = useStyles();
    const {history} = useRouter();
    const searchRef = useRef(null);
    const dispatch = useDispatch();
    const notificationsRef = useRef(null);
    const [pricingModalOpen, setPricingModalOpen] = useState(false);
    const [openSearchPopover, setOpenSearchPopover] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [notifications, setNotifications] = useState([]);
    const [openNotifications, setOpenNotifications] = useState(false);

    useEffect(() => {
        let mounted = true;

        const fetchNotifications = () => {
            axios.get('/api/account/notifications').then(response => {
                if (mounted) {
                    setNotifications(response.data.notifications);
                }
            });
        };

        fetchNotifications();

        return () => {
            mounted = false;
        };
    }, []);

    const handleLogout = () => {
        dispatch(logout());
        history.push('/auth/login');
    };

    const handlePricingOpen = () => {
        setPricingModalOpen(true);
    };

    const handlePricingClose = () => {
        setPricingModalOpen(false);
    };

    const handleNotificationsOpen = () => {
        setOpenNotifications(true);
    };

    const handleNotificationsClose = () => {
        setOpenNotifications(false);
    };

    const handleSearchChange = event => {
        setSearchValue(event.target.value);

        if (event.target.value) {
            if (!openSearchPopover) {
                setOpenSearchPopover(true);
            }
        } else {
            setOpenSearchPopover(false);
        }
    };

    const handleSearchPopverClose = () => {
        setOpenSearchPopover(false);
    };

    const popularSearches = [
        'Скинуть 10 кг',
        'Набрать 10 кг мяса',
        'Убрать бока',
        'Накачать банки',
        'Диета'
    ];

    const handleSignOut = () => {
        dispatch(signOut());
        history.push("auth/login");
    };

    return (
        <AppBar
            {...rest}
            className={classes.root}
        >
            <Toolbar>
                <RouterLink to="/">
                  <Typography className={classes.title} component="h1" variant="h1">
                    FAT
                  </Typography>
                </RouterLink>
                <div className={classes.flexGrow}/>
                <Hidden mdDown>
                    <div
                        className={classes.search}
                        ref={searchRef}
                    >
                        <SearchIcon className={classes.searchIcon}/>
                        <Input
                            className={classes.searchInput}
                            disableUnderline
                            onChange={handleSearchChange}
                            placeholder="Поиск..."
                            value={searchValue}
                        />
                    </div>
                    <Popper
                        anchorEl={searchRef.current}
                        className={classes.searchPopper}
                        open={openSearchPopover}
                        transition
                    >
                        <ClickAwayListener onClickAway={handleSearchPopverClose}>
                            <Paper
                                className={classes.searchPopperContent}
                                elevation={3}
                            >
                                <List>
                                    {popularSearches.map(search => (
                                        <ListItem
                                            button
                                            key={search}
                                            onClick={handleSearchPopverClose}
                                        >
                                            <ListItemIcon>
                                                <SearchIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary={search}/>
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                        </ClickAwayListener>
                    </Popper>
                </Hidden>
                <Hidden mdDown>
                    <IconButton
                        className={classes.notificationsButton}
                        color="inherit"
                        onClick={handleNotificationsOpen}
                        ref={notificationsRef}
                    >
                        <Badge
                            badgeContent={notifications.length}
                            classes={{badge: classes.notificationsBadge}}
                            variant="dot"
                        >
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                    <Button
                        className={classes.logoutButton}
                        color="inherit"
                        onClick={handleSignOut}
                    >
                        <InputIcon className={classes.logoutIcon}/>
                        {currentUser.name
                            ? <>
                                {currentUser.name} Выйти
                            </>
                            : <>
                                Вход
                            </>
                        }
                    </Button>
                </Hidden>
                <Hidden lgUp>
                    <Button
                        className={classes.logoutButton}
                        color="inherit"
                        onClick={handleLogout}
                    >
                        <InputIcon className={classes.logoutIcon}/>
                        {currentUser.name
                            ? <>
                                {currentUser.name} Выйти
                            </>
                            : <>
                                Вход
                            </>
                        }
                    </Button>
                    <IconButton
                        color="inherit"
                        onClick={onOpenNavBarMobile}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Hidden>
            </Toolbar>
            <PricingModal
                onClose={handlePricingClose}
                open={pricingModalOpen}
            />
            <NotificationsPopover
                anchorEl={notificationsRef.current}
                notifications={notifications}
                onClose={handleNotificationsClose}
                open={openNotifications}
            />
        </AppBar>
    );
};


export default TopBar;
