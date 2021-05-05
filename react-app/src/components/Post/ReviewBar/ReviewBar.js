import React, { useState } from "react";
import classes from "./ReviewBar.module.css";
import RatingStars from '../../../UI/RatingStars/RatingStar'
import Comment from '../Comment/Comment'

import { Button } from "@material-ui/core";
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';;

const ReviewBar = (props) => {
  const [commenting, setCommenting] = useState(false)
  const [rating, setRating] = useState(null)
  const commentHandler = () => {
    setCommenting(true)
  }
  const ratingHandler = (rating) => {
    setRating(rating);
  }
  const usedClasses = [classes.ReviewBar]
  if(commenting){
    usedClasses.push(classes.CommentingReviewBar)
  }
  return (
    <div>
    <div className={usedClasses.join(' ')}>
      <RatingStars clicked={ratingHandler} name={props.id} />
      <div className={classes.Vline} />
      <Button onClick={commentHandler} className={classes.Comment} size="large" endIcon={<ModeCommentOutlinedIcon/>} >Comment</Button>
    </div>
      {commenting? (<Comment disable={rating} />) : null}
    </div>
  );
};

export default ReviewBar;
