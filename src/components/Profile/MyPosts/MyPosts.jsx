import React from 'react';

import Post from "./Post/Post";
import s from './MyPosts.module.css'


const MyPosts = () => {

        let postData = [
            {id: 1, message: 'Hi, how are you?', likesCount:12},
            {id: 2, message: 'It is my first post!',likesCount:0},
        ];

    return (
        <div className={s.posts}>
            <h3>MY POST</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div>
                NEW POST
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likeCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likeCount={postData[1].likesCount}/>
            </div>

        </div>

    )
};
export default MyPosts;
