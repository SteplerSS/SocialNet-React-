import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import { Field, reduxForm } from "redux-form";



const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />);

 
    let onAddPosts = (values) => {
        props.addPosts(values.newPostText);
    };

    return (
        <div className={s.posts}>
            <h3>MYPOSTS</h3>
            <AddNewPostFormRedux onSubmit={onAddPosts} />
            <div>
                NEW POST
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>

    )
};



let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component="textarea" />
            </div>
            <div>
                <button >Add Posts</button>
            </div>
        </form>
    )
};

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);


export default MyPosts;
