import React, { useState, Fragment } from "react";

import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDarwer/SideDrawer";
import Posts from '../Posts/Posts'
import Profile from '../Profile/Profile'
import { Redirect, Route, Switch } from "react-router-dom";


const Layout = props => {

const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
 const  sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };
const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  const routes = (
    <Switch>
      <Route path="/home" component={Posts} />
      <Route path="/profile" component={Profile}/>
      <Redirect to="/home" />
    </Switch>

  );


    return (
      <Fragment>
        <Toolbar
          drawerToggleClicked={sideDrawerToggleHandler}
        />
        <SideDrawer
          isAuth={props.isAuthenticated}
          open={sideDrawerIsVisible}
          closed={sideDrawerClosedHandler}
        />
        <main className={classes.Content}>  
          {routes}
          </main>
      </Fragment>
    );
}



export default Layout;
