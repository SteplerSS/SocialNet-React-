import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )

};

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Dimych',},
        {id: 2, name: 'Andrey',},
        {id: 3, name: 'Sveta',},
        {id: 4, name: 'Sasha',}
    ];
    let messagesData = [
        {id: 1, message: 'HI!!!',},
        {id: 2, message: 'How are you?',},
        {id: 3, message: 'Yo!!!',},
        {id: 4, message: 'WoW',}
    ];

    let dialogsElements = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messages = messagesData.map(message => <Message message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    )
};
export default Dialogs;