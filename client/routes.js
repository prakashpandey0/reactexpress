import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import App from './component/App';

export const Routes = () => (
  <Switch>
      <Route path="/" component={App} exact={true}/>
  </Switch>
)


export default Routes;
