import React, { useState } from "react";
import Photo from "../../assets/photo.jpg";
import classes from "./profile.module.css";
import Posts from "../Posts/Posts";
import EditIcon from "@material-ui/icons/Edit";
import Modal from "../../UI/Modal/Modal";

const Profile = (props) => {
  let firstName = "Elon";
  let lastName = "Musk";
  let description = null

  const [show, setShow] = useState(false);
  const [desc, setDesc] = useState("Hi, This is your description box");

  const descEditHandler = () => {
    setShow(true);
  };
  const submitDescHandler = () => {
    setShow(false);
    setDesc(description)
  };
  const descChangeHandler = (event) => {
    description =  event.target.value;
  };
  return (
    <div>
      <div className={classes.HeadContainer}>
        <img src={Photo} alt="" className={classes.Image} />
        <div className={classes.EditIconContainer}>
          <EditIcon className={classes.EditIcon} style={{ fontSize: "60" }} />
        </div>
        <div className={classes.Header}>
          {firstName} {lastName}
        </div>
        <div className={classes.Desc}>
          {desc}
          <EditIcon className={classes.DescriptionEdit} onClick={descEditHandler} />
        </div>
      </div>
      <Posts />
      <Modal show={show}>
        <div>
          <textarea
            placeholder="Write your new awesome description here..."
            onChange={descChangeHandler}
            
          />
          <button onClick={submitDescHandler}>Submit</button>
        </div>
      </Modal>
    </div>
  );
};

export default Profile;
