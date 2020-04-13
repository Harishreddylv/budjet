import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Login from '../src/prelogin/Login';
import Register from '../src/prelogin/Register';
import ChangePassword from '../src/postlogin/home/ChangePassword';
import HomePage from '../src/postlogin/home/HomePage';
import Income from '../src/postlogin/income/Income';
import { SCREENS } from '../src/common/Constants';

import Authorized from './sharedComponents/Authorized'

import '../src/assets/scss/Global.scss'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={SCREENS.LOGIN} exact component={Login} />
          <Route path={SCREENS.REGISTER} exact component={Register} />
          <Route path={SCREENS.CHANGE_PASSWORD} exact component={ChangePassword} />
          <Authorized path={SCREENS.HOME} component={HomePage} />
          <Redirect to={SCREENS.LOGIN} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
