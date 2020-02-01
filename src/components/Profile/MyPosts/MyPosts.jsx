import React from 'react';

import Post from "./Post/Post";
import s from './MyPosts.module.css'


const MyPosts = () => {

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
                <Post message='Hi, how are you?' likeCount='0'/>
                <Post message='It is my first post!' likeCount='23'/>
            </div>

        </div>

    )
};
export default MyPosts;
