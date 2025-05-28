import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import MarketStudies from '../pages/MarketStudies';
import Reports from '../pages/Reports';
import Tools from '../pages/Tools';
import StrategyRooms from '../pages/StrategyRooms';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/market-studies" component={MarketStudies} />
                <Route path="/reports" component={Reports} />
                <Route path="/tools" component={Tools} />
                <Route path="/strategy-rooms" component={StrategyRooms} />
            </Switch>
        </Router>
    );
};

export default Routes;