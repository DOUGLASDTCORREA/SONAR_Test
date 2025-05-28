import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboards from './pages/Dashboard';
import MarketStudies from './pages/MarketStudies';
import Reports from './pages/Reports';
import Tools from './pages/Tools';
import StrategyRoom from './pages/StrategyRooms';
import Foresight from './pages/Foresight';
import DecisionRoom from './pages/DecisionRoom';
import CentralIM from './pages/CentralIM';
import ContentExample from './pages/ContentExample';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboards" component={Dashboard} />
      <Route path="/market-studies" component={MarketStudies} />
      <Route path="/reports" component={Reports} />
      <Route path="/tools" component={Tools} />
      <Route path="/strategy-room" component={StrategyRooms} />
      <Route path="/foresight" component={Foresight} />
      <Route path="/decision-room" component={DecisionRoom} />
      <Route path="/central-im" component={CentralIM} />
      <Route path="/content-example" component={ContentExample} />
    </Switch>
  );
}
