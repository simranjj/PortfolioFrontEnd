import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../component/profile/login/Login';
import Profile from '../component/profile/Profile';
import SignUp from '../component/profile/signup/SignUp';
import EditProfile from '../component/edit_profile/EditProfile';
import DedicatedLogin from '../component/profile/dedicated_login/DedicatedLogin';

const Routes = () => {
  return (
    <BrowserRouter >
    <Switch>
    <Route exact path="/" component={DedicatedLogin} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/editprofile" component={EditProfile} />
    <Route component={Profile} />
    </Switch>
    </BrowserRouter>
  );
};

export default Routes;
