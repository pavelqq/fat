import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {Tabs, Tab, Divider, colors, Grid} from '@material-ui/core';

import Page from "../../components/Page";
import Header from "./components/Header";
import Wall from "./components/Wall";
import Friends from "./components/Friends";
import Projects from "../Overview/components/Projects";
import {useDispatch, useSelector} from "react-redux";
import {getProfileById} from "../../store/actions/userActions";
import BMI from "./components/Bio/BMI";
import BMR from "./components/Bio/BMR";
import Anthropometry from "./components/Bio/Anthropometry";


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
        marginBottom: theme.spacing(12)
    },
    innerContent: {},
    BMI: {}
}));

const Profile = props => {
    const {match, history} = props;
    const classes = useStyles();
    const {id, tab} = match.params;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfileById(id));
    }, [id])

    const handleTabsChange = (event, value) => {
        history.push(value);
    };

    const appState = useSelector(state => state);
    console.log(appState);

    const auth = useSelector(state => state.auth)
    if (!auth._id) (
        history.push('/')
    )

    const tabs = [
        {value: 'wall', label: 'Записи'},
        {value: 'friends', label: 'Друзья'},
        {value: 'projects', label: 'Проекты'},
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
            <Header/>
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
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="flex-start"
                    >
                        <Grid item xs={12} md={6} lg={5}>
                            <BMI classname={classes.BMI}/>
                            <BMR classname={classes.BMR}/>
                            <Anthropometry className={classes.anthropometry} />
                        </Grid>
                        <Grid item xs={12} md={6} lg={7}>
                            {tab === 'wall' && <Wall/>}
                            {tab === 'friends' && <Friends id={id}/>}
                            {tab === 'projects' && <Projects
                                authUserId={id}
                                fromProfilePage={true}
                                fromOverviewPage={false}
                            />}
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Page>
    );
};


export default Profile;
