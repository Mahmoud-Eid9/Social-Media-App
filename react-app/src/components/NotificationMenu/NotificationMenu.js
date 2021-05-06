import React from "react";
import classes from "./NotificationMenu.module.css";
import { NavLink } from "react-router-dom";
import NotificationsIcon from "@material-ui/icons/Notifications";
import TextCombo from "../UserData/UserData";
import NavigationItem from '../Navigation/Navigationitems/Navigationitem/Navigationitem'

const NotificationMenu = () => {
  return (
    <div className={classes.dropdown}>
        <NavigationItem link="/notification">
      <NotificationsIcon className={classes.dropbtn} fontSize="large" />
      </NavigationItem>
      <div className={classes.dropdownContent}>
        <NavLink to="#" style={{ padding: "0" }}>
          <div className={classes.NotificationElement}>
            <TextCombo primary="Elon Musk Just Rated your Post" secondary="The Date" />
          </div>
        </NavLink>

        <NavLink to="#" style={{ padding: "0" }}>
          <div className={classes.NotificationElement}>
            <TextCombo primary="Elon Musk Just Rated your Post" secondary="The Date" />
          </div>
        </NavLink>

        <NavLink to="#" style={{ padding: "0" }}>
          <div className={classes.NotificationElement}>
            <TextCombo primary="Elon Musk Just Rated your Post" secondary="The Date" />
          </div>
        </NavLink>

        <NavLink to="#" style={{ padding: "0" }}>
          <div className={classes.NotificationElement}>
            <TextCombo primary="Elon Musk Just Rated your Post" secondary="The Date" />
          </div>
        </NavLink>

        <NavLink to="#" style={{ padding: "0" }}>
          <div className={classes.NotificationElement}>
            <TextCombo primary="Elon Musk Just Rated your Post" secondary="The Date" />
          </div>
        </NavLink>

        <NavLink to="#" style={{ padding: "0" }}>
          <div className={classes.NotificationElement}>
            <TextCombo primary="Elon Musk Just Rated your Post" secondary="The Date" />
          </div>
        </NavLink>

      </div>
    </div>
  );
};

export default NotificationMenu;
