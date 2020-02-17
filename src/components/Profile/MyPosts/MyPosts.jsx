import React from 'react';

import Post from "./Post/Post";
import s from './MyPosts.module.css';

import {updateNewPostTextActionCreator, addPostActionCreator}  from '../../../Redux/State'


const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPosts = () => {
        props.dispatch(addPostActionCreator()); 
       
    };

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);

    };

    return (
        <div className={s.posts}>
            <h3>MY POST</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} 
                              value={props.newPostText}/>
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
