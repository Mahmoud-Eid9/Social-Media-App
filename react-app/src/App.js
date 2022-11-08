import React, { useEffect } from 'react';
import classes from './App.module.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import AuthPage from './Auth/AuthPage';
import { connect } from 'react-redux';
import * as actions from './Store/actions/auth';

const App = (props) => {
  const { checkLogIn } = props;
  useEffect(() => {
    checkLogIn();
  }, [checkLogIn]);

  let routes = null;

  console.log(props.isLoggedIn);

  // if (props.isLoggedIn) {
  routes = (
    <Switch>
      <Route exact path="/home" component={Layout} />
      <Route path="/" component={Layout} />
      <Redirect to="/home" />
    </Switch>
  );
  // } else {
  //     routes = (
  //         <Switch>
  //             <Route path="/signup" component={AuthPage} />
  //             <Route path="/login" component={AuthPage} />
  //             <Redirect to="/login" />
  //         </Switch>
  //     );
  // }

  return (
    <BrowserRouter>
      <div className={classes.App}>{routes}</div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkLogIn: () => dispatch(actions.checkLoggedin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
