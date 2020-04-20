import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
//import icon from '../../assets/images/icon.png';
import icon from '../../../assets/images/icon.png';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }

    }




    return (
        <div className={s.post}>
            <div>
                {/* <div className={p.img}>
                    <img src='https://i.ytimg.com/vi/E0hnI4_egl8/maxresdefault.jpg'/>
                </div> */}
                <div className={s.ava}>
                    <div>
                        <span> Id </span>
                    </div>
                    <div>
                        <img src={props.profile.photos.large || icon} className={s.mainPhoto} />
                    </div>
                    <div>
                        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                    </div>

                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                </div>
            </div>
        </div>
    )
};
export default ProfileInfo;
