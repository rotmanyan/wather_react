import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";

class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route path="/details" component={Details}/>
                <Redirect to="/dashboard"/>
            </Switch>
        );
    }
}

export default App;
