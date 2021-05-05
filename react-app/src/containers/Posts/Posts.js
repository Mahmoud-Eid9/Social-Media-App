import React from 'react';
import classes from './Posts.module.css'
import Post from '../../components/Post/Post'
import NewPost from '../../components/NewPost/NewPost'

const Posts = (props) => {
    return (
        <div className={classes.Posts}>
            <NewPost />
            <Post id='1' />
            <Post id='2'/>
            <Post id='3'/>
        </div>
    );
}

export default Posts;