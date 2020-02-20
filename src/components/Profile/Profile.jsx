import React from 'react';
import p from './Profile.module.css'
// import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from './MyPosts/MyPostsConteiner';


const Profile = (props) => {
debugger;
    return (
        <div className={p.profile}>
            <ProfileInfo/>
            <MyPostsConteiner store={props.store}/>                           
        </div>
    )
};
export default Profile;
