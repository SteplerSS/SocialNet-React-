import React from 'react';

import Post from "./Post/Post";
import s from './MyPosts.module.css'


const MyPosts = () => {

    return (
            <div>
                     MY POST
                <div>
                    <textarea></textarea>
                    <button>Add Post</button>
                </div>
               <div>
                     NEW POST
               </div>
                <div className={s.posts}>
                    <Post message='Hi, how are you?'/>
                    <Post message='It is my first post' />
                </div>

            </div>

   )
};
export default MyPosts;
