import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import TodayPage from '../components/TodayPage';
import DatePage from '../components/DatePage';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/today" component={TodayPage} />
        <Route path="/date" component={DatePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
