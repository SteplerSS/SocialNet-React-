import React from 'react';
import p from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/Preloader';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
   
    return (
        <div className={p.post}>
            <div>
                <div className={p.img}>
                    <img src='https://i.ytimg.com/vi/E0hnI4_egl8/maxresdefault.jpg'/>
                </div>
                <div className={p.ava}>
                    <img src ={props.profile.photos.large}/>
                    ava + discription
                </div>
            </div>
        </div>
    )
};
export default ProfileInfo;
