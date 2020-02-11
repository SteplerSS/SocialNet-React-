import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let message = props.state.messages.map(message => <Message message={message.message}/>)

    let newMessage = React.createRef();

    let sendMessage = () =>{
        let text =newMessage.current.value;
        alert(text);
        newMessage.current.value = '';
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {message}
            </div>
            <div>
                <textarea ref={newMessage}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>send message</button>
            </div>
        </div>
    )
};
export default Dialogs;