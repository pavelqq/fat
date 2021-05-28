import React from "react";

import {BrowserRouter as Router} from "react-router-dom";
import routes from "./routes";
import { createBrowserHistory } from 'history';

import ScrollReset from "./components/ScrollReset";
import {renderRoutes} from 'react-router-config';

import { ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import ruLocale from "date-fns/locale/ru";
import DateFnsUtils from "@date-io/date-fns";

import MomentUtils from "@date-io/moment";
import moment from "moment";
import 'moment/locale/ru';

import theme from './theme';
// import './mixins/chartjs';
import './mixins/moment';
import './mixins/prismjs';
import './mock';
import './assets/scss/index.scss';

moment.locale('ru');
const history = createBrowserHistory();

function App() {
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
