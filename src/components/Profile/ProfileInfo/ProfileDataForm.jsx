import React from "react";
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import { reduxForm } from "redux-form";
import s from './ProfileInfo.module.css'
import style from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <button>SAVE</button>

                {props.error &&
                <div className={style.formSummaryError}>
                    {props.error}
                </div>
            }
                <div>
                    <b>Full name</b> : {createField("Full name", "fullName", [], Input)}
                </div>
                <div>
                    <b>Looking for a job</b> : {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}

                </div>

                <div>
                    <b>My professional skils</b> : {createField("My professional skils", "lookingForAJobDescription", [], Textarea)}
                </div>

                <div>
                    <b>About me: {props.profile.aboutMe}</b>
                    {createField("About me", "aboutMe", [], Textarea)}
                </div>
                <div>
                    <b>Contacts</b> : {Object.keys(props.profile.contacts).map(key => {
                        return  <div  key={key} className={s.contact}>
                            <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                            </div>
                    

                    })}
                </div>

            </form>
        </div>
    )
};

const ProfileDataFormReduxForm = reduxForm({ form: 'editProfile' })(ProfileDataForm)


export default ProfileDataFormReduxForm;