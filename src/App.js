import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import routes from "./routes";
import ScrollReset from "./components/ScrollReset";
import {renderRoutes} from 'react-router-config';
import {ThemeProvider} from '@material-ui/core/styles';
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import 'moment/locale/ru';
import theme from './theme';
import './mixins/moment';
import './mixins/prismjs';
import './mock';
import './assets/scss/index.scss';
import {createBrowserHistory} from 'history';
import {connect} from 'react-redux';

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

export default connect(

)(App);
