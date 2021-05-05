import React from "react";
import classes from "./Navigationitems.module.css";
import NavigationItem from "./Navigationitem/Navigationitem";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NotificationMenu from "../../NotificationMenu/NotificationMenu";
import * as actions from '../../../Store/actions/auth'
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'

const NavigationItems = props => {


    return (
        <div className={classes.Container}>
            <div className={classes.NavigationItems}>
                <NavigationItem link="/home" exact>
                    <p className={classes.Title}>Home</p>
                    <HomeIcon fontSize="large" className={classes.Icon} />
                </NavigationItem>

                <div className={classes.Hline} />
                <NavigationItem link="/profile" exact>
                    <p className={classes.Title}>Profile</p>
                    <PersonIcon fontSize="large" className={classes.Icon} />
                </NavigationItem>

                <div className={classes.Hline} />
                <div className={classes.NotificationContainer}>
                    <div className={classes.NotificationContainerAnchor}>
                        <p className={classes.Title}>Notifications</p>
                        <span className={classes.badge} />
                        <NotificationMenu className={classes.Icon} />
                    </div>
                </div>
            </div>

            <div className={classes.NotificationContainer}>
                <div
                    className={classes.NotificationContainerAnchor}
                    onClick={props.onLogout}
                >
                    <p className={classes.Title}>Log-out</p>
                    <ExitToAppIcon fontSize="large" className={classes.Icon} />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        //   loading: state.auth.loading,
        //   error: state.auth.error,
        //   isAuthenticated: state.auth.token !== null,
        //   buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationItems));
