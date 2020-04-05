import React from 'react';
import { Switch, Router } from 'react-router-dom';
import Home from '../pages/home';
import Route from './Route';
import history from '../services/history';

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route path={`/`} exact component={ Home } />
            </Switch>
        </Router>        
    )
}