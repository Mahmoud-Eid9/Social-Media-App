import React from "react";
import classes from "./UserData.module.css";
import Picture from "../../assets/photo.jpg";


const UserData = props => {
    let style = null
    if(props.isPost){
       style = {margin: '10px', padding:'10px'}
    }
    return (
        <div className={classes.PostInfo} style={style}>
            <img src={Picture} alt="" className={classes.Image} />
            <div className={classes.Container}>
                <h4 className={classes.Text}>{props.primary}</h4>
                <p className={classes.Date}>{props.secondary}</p>
            </div>
        </div>
    );
};

export default UserData;
