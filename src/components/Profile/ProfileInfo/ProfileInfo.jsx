import React, {useState} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
//import icon from '../../assets/images/icon.png';
import icon from '../../../assets/images/icon.png';
import ProfileDataForm   from "./ProfileDataForm";



const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);



    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }

    }

    const onSubmit =(formData) => {
        props.saveProfile(formData).then(
            ()=>{
                   setEditMode(false);
            }
        );
      
     }
    
   

    return (
        <div className={s.post}>
            <div>
                {/* <div className={s.img}>
                    <img src='https://i.ytimg.com/vi/E0hnI4_egl8/maxresdefault.jpg'/>
                </div> */}
                <div className={s.ava}>
                    <div>
                        <span>ID  </span>
                    </div>
                    <div>
                        <img src={props.profile.photos.large || icon} className={s.mainPhoto} />
                    </div>
                    <div>
                        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                    </div>

                    {editMode ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> : 
                    <ProfileData goToEditMode={ () => {setEditMode(true)}} profile={props.profile} isOwner={props.isOwner}/> }
                    

                    <div>
                        <b>Contacts</b> : {Object.keys(props.profile.contacts).map(key => {
                            return <Contact contactTitle={key} contactValue={props.profile.contacts[key]} />
                        })}
                    </div>

                </div>

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>

        </div>
    )
};

const ProfileData = (props) => {
    return (
        <div >
            {props.isOwner && <div><button onClick ={props.goToEditMode}>EDIT</button></div>}
            <div>
                <b>Full name: {props.profile.fullName}</b>
            </div>
            <div>
                <b>Looking for a job: {props.profile.lookingForAJob ? "YES" : "NO"}</b>
            </div>
            {props.profile.lookingForAJob &&
                <div>
                    <b>My professional skils: {props.profile.lookingForAJobDescription}</b>
                </div>
            }
            <div>
                <b>About me: {props.profile.aboutMe}</b>
            </div>
        </div>
    )
}


const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}


export default ProfileInfo;
