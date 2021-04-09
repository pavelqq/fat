import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Header} from "./components/auth/authComponents/Header";
import {Step1} from "./components/auth/Step1";
import {Step2} from "./components/auth/Step2";
import {Step3} from "./components/auth/Step3";
import {Result} from "./components/auth/Result";

function App() {
  return (
      <>
          <Header />
          <Router>
              <Switch>
                  <Route exact path="/" component={Step1} />
                  <Route path="/step2" component={Step2} />
                  {/*<Route path="/step3" component={Step3} />*/}
                  <Route path="/result" component={Result} />
              </Switch>
          </Router>
      </>
  );
}

export default App;
