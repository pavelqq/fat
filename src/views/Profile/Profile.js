import React from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';

import Page from "../../components/Page";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import Connections from "./components/Connections";
import Projects from "../Overview/components/Projects";



const useStyles = makeStyles(theme => ({
  root: {},
  inner: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

const Profile = props => {
  const { match, history } = props;
  const classes = useStyles();
  const { id, tab } = match.params;

  const handleTabsChange = (event, value) => {
    history.push(value);
  };

  const tabs = [
    { value: 'timeline', label: 'Записи' },
    { value: 'connections', label: 'Друзья' },
    { value: 'projects', label: 'Планы' },
    { value: 'reviews', label: 'Ревью' }
  ];

  if (!tab) {
    return <Redirect to={`/profile/${id}/timeline`} />;
  }

  if (!tabs.find(t => t.value === tab)) {
    return <Redirect to="/errors/error-404" />;
  }

  return (
    <Page
      className={classes.root}
      title="Profile"
    >
      <Header />
      <div className={classes.inner}>
        <Tabs
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
        <Divider className={classes.divider} />
        <div className={classes.content}>
          {tab === 'timeline' && <Timeline />}
          {tab === 'connections' && <Connections />}
          {tab === 'projects' && <Projects />}
          {/*{tab === 'reviews' && <Reviews />}*/}
        </div>
      </div>
    </Page>
  );
};


export default Profile;
