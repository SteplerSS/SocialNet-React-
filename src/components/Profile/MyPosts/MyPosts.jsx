import React from 'react';

import Post from "./Post/Post";


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
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>

   )
};
export default MyPosts;
