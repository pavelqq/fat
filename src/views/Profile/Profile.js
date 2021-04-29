import React from 'react';
import {Redirect} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {Tabs, Tab, Divider, colors, Button} from '@material-ui/core';

import Page from "../../components/Page";
import Header from "./components/Header";
import Wall from "./components/Wall";
import Friends from "./components/Friends";
import Plans from "../Overview/components/Plans";
// import AddPhotoIcon from "@material-ui/core/SvgIcon/SvgIcon";


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
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
}));

const Profile = props => {
    const {match, history} = props;
    const classes = useStyles();
    const {id, tab} = match.params;

    const handleTabsChange = (event, value) => {
        history.push(value);
    };

    const tabs = [
        {value: 'wall', label: 'Фото и Записи'},
        {value: 'friends', label: '35 Друзей'},
        {value: 'plans', label: 'Планы'},
        // { value: 'reviews', label: 'Ревью' }
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
                    {/*<Button*/}
                    {/*    className={classes.changeButton}*/}
                    {/*    variant="contained"*/}
                    {/*>*/}
                    {/*    <AddPhotoIcon className={classes.addPhotoIcon}/>*/}
                    {/*    Изменить фон*/}
                    {/*</Button>*/}
                    {tab === 'wall' && <Wall/>}
                    {tab === 'friends' && <Friends/>}
                    {tab === 'plans' && <Plans/>}
                    {/*{tab === 'reviews' && <Reviews />}*/}
                </div>
            </div>
        </Page>
    );
};


export default Profile;
