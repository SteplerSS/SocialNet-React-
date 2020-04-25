import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "./../../../components/common/FormsControls/FormsControls";

 
let MyPosts = React.memo(props => {

    let postsElements = props.posts.map(p => <Post key={p.key} message={p.message} likeCount={p.likesCount} />);

    // let newPostElement =React.createRef();

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
}
)


const maxLength = maxLengthCreator(50);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={Textarea} placeholder={"Text message"}
                    validate={[required, maxLength]} />
            </div>
            <div>
                <button >Add Posts</button>
            </div>
        </form>
    )
};

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

export default MyPosts;
