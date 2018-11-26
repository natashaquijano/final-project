import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import 'normalize-scss';
import './App.scss';

import { isAuthenticated } from '../src/helper/Index';


// import About from './pages/About';
// import Event from './pages/Event';
// import FriendProfile from './pages/FriendProfile';
import Home from './pages/Home';
// import Landing from './pages/Landing';
import Profile from './pages/Profile';
// import ShoppingCart from './pages/ShoppingCart';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';



const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest} render={(props) => (isAuthenticated() ? <Component {...props} /> : <Redirect to="/" />)}
  />
);


const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <AuthenticatedRoute path="/profile/:userId" component={Profile} />
    </Switch>
  </Router>
)

export default App;
