import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import UserFlows from "./components/UserFlows";
import PluginsSupport from "./components/PluginsSupport";
import SourceFiles from "./components/SourceFiles";
import PresentationHeader from "./components/Header";
import FAQ from "./components/FAQ";
import Page from "./components/Page";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
    root: {}
}));

const Presentation = props => {

    const {className, ...rest} = props;

    const classes = useStyles();

    return (
        <Page
            {...rest}
            className={clsx(classes.root, className)}
        >
            <PresentationHeader/>
            {/*<Concept />*/}
            <UserFlows/>
            <PluginsSupport/>
            <SourceFiles/>
            <FAQ/>
        </Page>
    );
};

export default Presentation;
