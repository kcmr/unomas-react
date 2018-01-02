import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../views/NotFoundPage';
import LoginPage from '../views/LoginPage';
import TodayPage from '../views/TodayPage';
import DatePage from '../views/DatePage';
import GraphBar from '../components/GraphBar';

const AppRouter = () => (
  <BrowserRouter>
    <div className="wrapper">
      <div className="content">
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <Route path="/today" component={TodayPage} />
          <Route path="/date" component={DatePage} exact />
          <Route path="/date/:day" component={DatePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <GraphBar />
    </div>
  </BrowserRouter>
);

export default AppRouter;
