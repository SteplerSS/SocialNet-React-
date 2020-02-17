import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {updateNewMessageBodyCreator, sendMessageCreator}  from '../../Redux/dialogs-reducer '

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let message = state.messages.map(message => <Message message={message.message} />)
    
    let newMessageBody = state.newMessageBody;

   

    let onSendMessageClick= () => {
        props.store.dispatch(sendMessageCreator())  
    };

    let onNewMessageClick = (e) => {
       let body = e.target.value;
       props.store.dispatch(updateNewMessageBodyCreator(body))
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{message}</div>
                <div>
                    <textarea value={newMessageBody} 
                    onChange={onNewMessageClick}
                    placeholder='enter your message'></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>send message</button>
                </div>
            </div>
        </div>
    )
};
export default Dialogs;

