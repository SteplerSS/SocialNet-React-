import React from 'react';
import p from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div className={p.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} 
                            newPostText={props.profilePage.newPostText}
                            dispatch={props.dispatch}/>                           
        </div>
    )
};
export default Profile;
