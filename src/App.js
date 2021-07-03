import React, {useEffect, useState} from "react";

import {BrowserRouter as Router} from "react-router-dom";
import routes from "./routes";
import {renderRoutes} from 'react-router-config';

import ScrollReset from "./components/ScrollReset";
import {ThemeProvider} from '@material-ui/core/styles';
import {MuiPickersUtilsProvider} from "@material-ui/pickers";

import theme from './theme';
import './mixins/moment';
import './mock';
import './assets/scss/index.scss';

import MomentUtils from "@date-io/moment";
import moment from "moment";
import 'moment/locale/ru';

import {useDispatch} from 'react-redux';

import {createBrowserHistory} from 'history';


import {loadUser} from "./store/actions/authActions";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const history = createBrowserHistory();
moment.locale('ru');


function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
                    <Router history={history}>
                        <ToastContainer autoClose={7000}/>
                        <ScrollReset/>
                        {renderRoutes(routes)}
                    </Router>
                </MuiPickersUtilsProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
