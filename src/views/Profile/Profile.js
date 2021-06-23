import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {Tabs, Tab, Divider, colors } from '@material-ui/core';

import Page from "../../components/Page";
import Header from "./components/Header";
import Wall from "./components/Wall";
import Friends from "./components/Friends";
import Plans from "../Overview/components/Plans";
import {useDispatch, useSelector} from "react-redux";
import {getProfileById} from "../../store/actions/userActions";
import {signIn} from "../../store/actions/authActions";


const useStyles = makeStyles(theme => ({
    root: {},
    inner: {
        width: theme.breakpoints.values.lg,
        maxWidth: '100%',
        margin: '0 auto',
    },
    divider: {
        backgroundColor: colors.grey[400]
    },
    tabs: {},
    content: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(6)
    },
    innerContent: {

    }
}));

const Profile = props => {
    const {match, history} = props;
    const classes = useStyles();
    const {id, tab} = match.params;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfileById(id));
    }, [id])

    debugger

    const handleTabsChange = (event, value) => {
        history.push(value);
    };

    const appState = useSelector((state) => state);
    console.log(appState);
    const currentUser = useSelector((state) => state.auth);

    const tabs = [
        {value: 'wall', label: 'Фото и Записи'},
        {value: 'friends', label: '35 Друзей'},
        {value: 'plans', label: 'Планы'},
    ];

    if (!tab) {
        return <Redirect to={`/profile/${id}/wall`}/>;
    }

    if (!tabs.find(t => t.value === tab)) {
        return <Redirect to="/errors/error-404"/>;
    }

    return (
        <Page
            className={classes.root}
            title="Profile"
        >
            <Header currentUser={currentUser}/>
            <div className={classes.inner}>
                <Tabs
                    className={classes.tabs}
                    onChange={handleTabsChange}
                    scrollButtons="auto"
                    value={tab}
                    variant="scrollable"
                >
                    {tabs.map(tab => (
                        <Tab
                            key={tab.value}
                            label={tab.label}
                            value={tab.value}
                        />
                    ))}
                </Tabs>
                <Divider className={classes.divider}/>
                <div className={classes.content}>
                    <div className={classes.innerContent}>
                    {tab === 'wall' && <Wall currentUser={currentUser}/>}
                    {tab === 'friends' && <Friends/>}
                    {tab === 'plans' && <Plans/>}
                    </div>
                </div>
            </div>
        </Page>
    );
};


export default Profile;
