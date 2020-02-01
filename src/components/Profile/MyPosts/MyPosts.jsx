import React from 'react';

import Post from "./Post/Post";
import s from './MyPosts.module.css'


const MyPosts = () => {

        let posts = [
            {id: 1, message: 'Hi, how are you?', likesCount:12},
            {id: 2, message: 'It is my first post!',likesCount:0},
            {id: 3, message: 'It is my ',likesCount:35},
        ];

        let postsElements =
            posts.map ( posts =>  <Post message={posts.message} likeCount={posts.likesCount}/> );

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
                {postsElements}
            </div>

        </div>

    )
};
export default MyPosts;
