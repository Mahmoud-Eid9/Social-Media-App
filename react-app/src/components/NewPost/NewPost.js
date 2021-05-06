import React, { useRef, useState } from "react";
import classes from "./NewPost.module.css";
import UserData from "../UserData/UserData";
import PhotoIcon from "@material-ui/icons/Photo";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const NewPost = () => {
    const [image, setImage] = useState(null);
    const [file, setFile] = useState(null);
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
    const onButtonClick = () => {
        fileInput.current.click();
    };
    const closeImageHandler = () => {
        preview = null
        setImage(null)
        setFile(null)
    };
    let preview = null;
    if (image != null) {
        preview = (
            <div className={classes.ImageContainer}>
                <img src={image} className={classes.Image} alt="" />
                <CloseIcon
                    className={classes.CloseIcon}
                    style={{ fontSize: "45" }}
                    onClick={closeImageHandler}
                />
            </div>
        );
    }
    console.log(preview);
    return (
        <div className={classes.NewPost}>
            <UserData
                primary="User Name"
                secondary="The Date"
                className={classes.UserData}
                isPost
            />
            <textarea
                className={classes.Input}
                placeholder="Get Something Reviewed..."
            ></textarea>
            {preview}
            <div className={classes.Foot}>
                <input
                    style={{ display: "none" }}
                    type="file"
                    name="file"
                    onChange={event => fileSelectHandler(event)}
                    ref={fileInput}
                    accept=".jpeg,.jpg,.png"
                />
                <Button
                    endIcon={<PhotoIcon />}
                    className={classes.Button}
                    size="large"
                    onClick={onButtonClick}
                >
                    Attach Photo
                </Button>
                <div className={classes.Line} />
                <Button
                    endIcon={<PostAddIcon />}
                    className={classes.Button}
                    size="large"
                >
                    Post
                </Button>
            </div>
        </div>
    );
};

export default NewPost;
