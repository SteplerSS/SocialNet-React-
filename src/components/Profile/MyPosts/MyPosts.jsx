import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import Profile from '../Profile';



const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPosts = () => {
        props.addPosts();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.posts}>
            <h3>MYPOSTS</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                        value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPosts}>Add Posts</button>
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
