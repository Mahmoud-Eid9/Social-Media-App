import React from "react";
import Photo from "../../assets/photo.jpg";
import classes from './profile.module.css'
import Posts from "../Posts/Posts"
import EditIcon from '@material-ui/icons/Edit';

const profile = props => {
    let firstName = "Elon";
    let lastName = "Musk";
    let description = "Hi, This is your description box"
    return (
        <div >
        <div className={classes.HeadContainer}>
                <img src={Photo} alt="" className={classes.Image} />
                <div className={classes.EditIconContainer}>
                <EditIcon className={classes.EditIcon} style={{fontSize: "60"}} />
                </div>
                <div className={classes.Header}>{firstName} {lastName}</div>
                <div className={classes.Desc}>
                    {description}
                </div>
        </div>
        <Posts/>
        </div>
    );
};

export default profile;
