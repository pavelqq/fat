import React from "react";

import {DataProvider} from "./views/Register/DataContext";

import {BrowserRouter as Router} from "react-router-dom";
import routes from "./routes";

import ScrollReset from "./components/ScrollReset";
import { renderRoutes } from 'react-router-config';

function App() {
    return (
        <>
            <DataProvider>
                <Router>
                    <ScrollReset/>
                    {renderRoutes(routes)}
                </Router>
            </DataProvider>
        </>
    );
}

export default App;
