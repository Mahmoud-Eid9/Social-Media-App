import React from "react";
import LoginCard from "./LoginCard/LoginCard";
import SignupCard from "./SignupCard/SignupCard";
import classes from "./LoginPage.module.css";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../Store/actions/auth";

const AuthPage = props => {
    return (
        <div className={classes.LoginPage}>
            <Switch>
                <Route path="/signup" component={SignupCard} />
                <Route path="/" render={() => <LoginCard />} />
            </Switch>
        </div>
    );
};


const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.login(email, password))
    };
};

export default connect(null, mapDispatchToProps)(AuthPage);
