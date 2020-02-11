import React from 'react';

import Post from "./Post/Post";
import s from './MyPosts.module.css'


const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPosts = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value='';

    };

    return (
        <div className={s.posts}>
            <h3>MY POST</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPosts}>Add Posts</button>
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
