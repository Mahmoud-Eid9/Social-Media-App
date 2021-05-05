import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    boxSizing: 'border-box',
    margin: 'auto 0',
    width: '50%',
  },
  Rating: {
    margin: 'auto'
  },
});

const HoverRating = (props) => {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const ratingHandler = newValue => {
    setValue(newValue);
    props.clicked(newValue)
  }
  return (
    <div className={classes.root}>
      <Rating
        className={classes.Rating}
        name={props.name}
        value={value}
        precision={0.5}
        onChange={(event, newValue) => ratingHandler(newValue)}
      />
    </div>
  );
}

export default HoverRating
