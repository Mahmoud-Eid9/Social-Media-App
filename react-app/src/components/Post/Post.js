import React from 'react';
import classes from './Post.module.css'
import Photo from '../../assets/photo.jpg'
import ReviewBar from './ReviewBar/ReviewBar'
import PostInfo from './PostInfo/PostInfo'

const Post = (props) => {
    return (
        <div className={classes.Post}>
            <PostInfo />
            <div className={classes.MediaContainer}>
                <img src={Photo} alt="" className={classes.Media}/>
            </div>
            <ReviewBar id={props.id} />
        </div>
    );
}

export default Post;