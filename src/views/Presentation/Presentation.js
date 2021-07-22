import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Community from "./components/Community";
import Functions from "./components/Functions";
import Details from "./components/Details";
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
            {/*<Community/>*/}
            {/*<Functions/>*/}
            {/*<Details/>*/}
            {/*<FAQ/>*/}
        </Page>
    );
};

export default Presentation;
