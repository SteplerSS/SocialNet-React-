import React from 'react';
import p from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost} from "../../Redux/State";

const Profile = (props) => {

    return (
        <div className={p.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={addPost}/>
        </div>
    )
};
export default Profile;
