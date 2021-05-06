import React from "react";

import {DataProvider} from "./views/Register/DataContext";

import {BrowserRouter as Router} from "react-router-dom";
import routes from "./routes";

import ScrollReset from "./components/ScrollReset";
import {renderRoutes} from 'react-router-config';

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import ruLocale from "date-fns/locale/ru";
import DateFnsUtils from "@date-io/date-fns";

import './mock';
import './mixins/prismjs';


function App() {
    return (
        <>
            {/*<ThemeProvider theme={theme}>*/}
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
                    <Router>
                        <ScrollReset/>
                        {renderRoutes(routes)}
                    </Router>
                </MuiPickersUtilsProvider>
            {/*</ThemeProvider>*/}
        </>
    );
}

export default App;
