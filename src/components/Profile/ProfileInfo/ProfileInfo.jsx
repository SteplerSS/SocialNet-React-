import React from 'react';
import p from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={p.post}>
            <div>
                <div className={p.img}>
                    <img src='https://i.ytimg.com/vi/E0hnI4_egl8/maxresdefault.jpg'/>
                </div>
                <div className={p.ava}>
                    ava + discription
                </div>
            </div>
        </div>
    )
};
export default ProfileInfo;
