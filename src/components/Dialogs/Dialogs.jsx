import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from "redux-form";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let message = state.messages.map(message => <Message message={message.message} />)
 

    let addNewMessage = (values) => {

      props.sendMessage(values.newMessageBody)

    };

    if (!props.isAuth) return <Redirect to="/login" />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{message}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>

            <div><button>send message</button></div>
        </form>

    )
};

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;

