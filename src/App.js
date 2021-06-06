import React, {useContext} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import ScrollReset from "./components/ScrollReset";
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

import {renderRoutes} from 'react-router-config';
import routes from "./routes"

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
