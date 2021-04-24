import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import UserFlows from "./components/UserFlows";
import PluginsSupport from "./components/PluginsSupport";
import SourceFiles from "./components/SourceFiles";
import PresentationHeader from "./components/Header";
import FAQ from "./components/FAQ";
import Page from "./components/Page";

const useStyles = makeStyles(() => ({
    root: {}
}));

const Presentation = () => {
    const classes = useStyles();

    return (
        <Page className={classes.root}>
            <PresentationHeader/>
            <UserFlows/>
            <PluginsSupport/>
            <SourceFiles/>
            <FAQ/>
        </Page>
    );
};

export default Presentation;
