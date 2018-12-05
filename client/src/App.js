import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import 'normalize-scss';
import './App.scss';

import { isAuthenticated } from '../src/helper/Index';


import Event from './components/Event/Event';
import FriendProfile from './pages/FriendProfile';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ShoppingCart from './pages/ShoppingCart';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Footer from './components/Footer/Footer';
import Landing from './pages/Landing';
import Success from './pages/Success';
import EventPage from './pages/EventPage';
import Suggestions from './pages/Suggestions';



const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest} render={(props) => (isAuthenticated() ? <Component {...props} /> : <Redirect to="/landing" />)}
  />
);

const App = () => (
  <div>

    <Router>
      <Switch>
        <AuthenticatedRoute exact path="/" component={Home} />
        {/* <Route exact path="/" component={Landing} /> */}
        <Route path="/landing" component={Landing} />
        <Route path="/signin" component={SignIn} />
        <Route path="/event" component={Event} />
        <Route path="/friendprofile" component={FriendProfile} />
        <Route path="/signup" component={SignUp} />
        <Route path="/shoppingcart" component={ShoppingCart} />
        <Route path="/success" component={Success} />
        <AuthenticatedRoute path="/profile/:userId" component={Profile} />
        <AuthenticatedRoute path="/suggestions" component={Suggestions} />
        <AuthenticatedRoute path="/eventpage" component={EventPage} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </Router>
    <Footer />
  </div>
);

export default App;
