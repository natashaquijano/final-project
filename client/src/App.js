import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import 'normalize-scss';
import './App.scss';

import { isAuthenticated } from '../src/helper/Index';


import Event from './pages/Event';
import FriendProfile from './pages/FriendProfile';
import Home from './pages/Home';
// import Landing from './pages/Landing';
import Profile from './pages/Profile';
import ShoppingCart from './pages/ShoppingCart';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';



const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest} render={(props) => (isAuthenticated() ? <Component {...props} /> : <Redirect to="/" />)}
  />
);


const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/" component={Landing} /> */}
      <Route path="/signin" component={SignIn} />
      <Route path="/event" component={Event} />
      <Route path="/friendprofile" component={FriendProfile} />
      <Route path="/signup" component={SignUp} />
      <Route path="/about" component={ShoppingCart} />
      <AuthenticatedRoute path="/profile/:userId" component={Profile} />
    </Switch>
    <Footer />
  </div>
);

export default App;
