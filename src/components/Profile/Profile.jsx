import React from 'react';
import p from './Profile.module.css'
// import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from './MyPosts/MyPostsConteiner';


const Profile = (props) => {

    return (
        <div className={p.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsConteiner/>                           
        </div>
    )
};
export default Profile;
