import React from 'react';
import p from './Profile.module.css'
// import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from './MyPosts/MyPostsConteiner';


const Profile = (props) => {

    return (
        <div className={p.profile}>
            <ProfileInfo savePhoto={props.savePhoto} 
            isOwner={props.isOwner} profile={props.profile} 
            status={props.status} updateStatus={props.updateStatus}
            saveProfile={props.saveProfile}
            />
            <MyPostsConteiner/>                           
        </div>
    )
};
export default Profile;
