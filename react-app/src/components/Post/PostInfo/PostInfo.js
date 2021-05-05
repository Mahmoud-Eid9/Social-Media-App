import React from "react";
import classes from "./PostInfo.module.css";
import UserData from '../../UserData/UserData'
const PostInfo = () => {
  return (
    <div >
          <UserData primary="User Name" secondary="The Date" isPost />
      <p className={classes.Context}>
        This is where the context of the post will be so stay focused cuz i will start running real
        fast, update just adding some text to see how the new line will go
      </p>
    </div>
  );
};

export default PostInfo;
