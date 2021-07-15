import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {Tabs, Tab, Divider, colors } from '@material-ui/core';

import Page from "../../components/Page";
import {useDispatch, useSelector} from "react-redux";
import {getProfileById} from "../../store/actions/userActions";
import {General, Access} from "./components";


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    },
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

const Settings = props => {
    const {match, history} = props;
    const classes = useStyles();
    const {tab} = match.params;

    const id = useSelector(state => state.auth._id)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfileById(id));
    }, [id])

    const handleTabsChange = (event, value) => {
        history.push(value);
    };

    const appState = useSelector((state) => state);
    console.log(appState);

    const auth = useSelector(state => state.auth)
    if (!auth._id) (
        history.push('/')
    )

    const tabs = [
        {value: 'general', label: 'Редактировать профиль'},
        {value: 'access', label: 'Приватность'},
    ];

    if (!tabs.find(t => t.value === tab)) {
        return <Redirect to="/errors/error-404"/>;
    }

    return (
        <Page
            className={classes.root}
            title="Settings"
        >
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
                    {tab === 'general' && <General id={id}/>}
                    {tab === 'access' && <Access/>}
                    </div>
                </div>
            </div>
        </Page>
    );
};


export default Settings;
