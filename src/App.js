import React, {useEffect, useState} from "react";

import {BrowserRouter as Router} from "react-router-dom";
import routes from "./routes";
import {renderRoutes} from 'react-router-config';

import ScrollReset from "./components/ScrollReset";
import {ThemeProvider} from '@material-ui/core/styles';
import {MuiPickersUtilsProvider} from "@material-ui/pickers";

import theme from './theme';
import './mixins/moment';
import './mixins/prismjs';
import './mock';
import './assets/scss/index.scss';

import MomentUtils from "@date-io/moment";
import moment from "moment";
import 'moment/locale/ru';

import {useDispatch, useSelector} from 'react-redux';

import {createBrowserHistory} from 'history';

import {logout} from "./redux/actions/auth";
import {clearMessage} from "./redux/actions/messages";

const history = createBrowserHistory();
moment.locale('ru');


function App() {

    // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
// const [showAdminBoard, setShowAdminBoard] = useState(false);

    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage());
        });
    }, [dispatch]);

    useEffect(() => {
        if (currentUser) {
            // setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
            // setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
        }
    }, [currentUser]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
                    <Router history={history}>
                        <ScrollReset/>
                        {renderRoutes(routes)}
                    </Router>
                </MuiPickersUtilsProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
