import React from 'react';
import p from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={p.profile}>
            <div>
                <img src='https://i.ytimg.com/vi/E0hnI4_egl8/maxresdefault.jpg'/>
            </div>
            <div>
                ava + discription
            </div>
            <MyPosts/>
        </div>
    )
};
export default Profile;
