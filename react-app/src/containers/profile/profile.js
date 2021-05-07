import React, { useState, useRef } from "react";
import Photo from "../../assets/photo.jpg";
import classes from "./profile.module.css";
import Posts from "../Posts/Posts";
import EditIcon from "@material-ui/icons/Edit";
import Modal from "../../UI/Modal/Modal";
import Button from "@material-ui/core/Button";

const Profile = () => {
  let firstName = "Elon";
  let lastName = "Musk";
  let description = null;
  const [image, setImage] = useState(Photo);
  const [file, setFile] = useState(null);
  const [show, setShow] = useState(false);
  const [desc, setDesc] = useState("Hi, This is your description box");
  const fileInput = useRef(null);

  const fileSelectHandler = event => {
    console.log(event);
    let reader = new FileReader();
    let file = event.target.files[0];
    if (file == null) {
        return;
    }
    reader.onloadend = () => {
        setImage(reader.result);
        setFile(file);
    };
    reader.readAsDataURL(file);
};

const editImageHanler = () => {
  fileInput.current.click();
};

  const descEditHandler = () => {
    setShow(true);
  };
  const submitDescHandler = () => {
    setShow(false);
    setDesc(description);
  };
  const descChangeHandler = (event) => {
    description = event.target.value;
  };
  const cancelDescHandler = () =>{
    setShow(false)
  }
  return (
    <div>
      <div className={classes.HeadContainer}>
        <img src={image} alt="" className={classes.Image} />
        <input
                    style={{ display: "none" }}
                    type="file"
                    name="file"
                    onChange={event => fileSelectHandler(event)}
                    ref={fileInput}
                    accept=".jpeg,.jpg,.png"
                />
        <div className={classes.EditIconContainer}>
          <EditIcon className={classes.EditIcon}  onClick={editImageHanler} style={{ fontSize: "60" }} />
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
        <div className={classes.ModalContainer}>
          <textarea
            placeholder="Write your new awesome description here..."
            onChange={descChangeHandler}
            className={classes.TextArea}
          />
          <div className={classes.ButtonsContainer}>
            <Button color="secondary" variant="outlined" onClick={cancelDescHandler}>
              CANCEL
            </Button>
            <Button color="secondary" variant="outlined" onClick={submitDescHandler}>
              SUBMIT
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Profile;
