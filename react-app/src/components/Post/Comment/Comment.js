import React, { useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import classes from "./Comment.module.css";
import IconButton from '@material-ui/core/IconButton';

const Comment = (props) => {
  const [comment, setComment] = useState(null);
  const [submit, setSubmit] = useState(null);
  const submitHandler = () => {
    setSubmit(true);
  };
  let warning = null
  console.log(props.disable);
  if(submit){
    
   warning = props.disable ? null : (
    <p style={{ color: "red", marginTop: '0 ' }}>
      GIVE A RATING FIRST
    </p>
  );
  }
  return (
    <div className={classes.Container}>
      <div className={classes.smallContainer}>
        <input
          onChange={(event) => {setComment(event.target.value);}}
          type="text"
          className={classes.Input}
          style={{borderColor: warning ? "red" : null}}
          placeholder="Write a comment..."
        />
        <IconButton disabled={!comment} color="primary" onClick={submitHandler} className={classes.Icon}>
        <SendIcon fontSize="large"  />
        </IconButton>
      </div>
      {warning}
    </div>
  );
};

export default Comment;
