import React from 'react';
import Login from './component/Login';
import Profile from './component/Profile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import  store from './redux/store';
import SignUp from './component/SignUp';
import EditProfile from './component/EditProfile';
import './index.css';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/editprofile" component={EditProfile} />
    </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
