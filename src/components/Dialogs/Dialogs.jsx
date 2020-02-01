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
        {id: 1, messages: 'HI!!!',},
        {id: 2, messages: 'How are you?',},
        {id: 3, messages: 'Yo!!!',},
        {id: 4, messages: 'WoW',}
    ];


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].messages}/>
                <Message message={messagesData[1].messages}/>
            </div>
        </div>
    )
};
export default Dialogs;