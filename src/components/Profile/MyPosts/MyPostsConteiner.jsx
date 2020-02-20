import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../Redux/profile-reducer'
import MyPosts from './MyPosts';



const MyPostsConteiner = (props) => {

    let state = props.store.getState();
    let addPosts = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };

    return (<MyPosts updateNewPostText={onPostChange}
        addPosts={addPosts}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText} />)
};
export default MyPostsConteiner;
