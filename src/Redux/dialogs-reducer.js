const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Dimych', },
        { id: 2, name: 'Andrey', },
        { id: 3, name: 'Sveta', },
        { id: 4, name: 'Sasha', }],
    messages: [
        { id: 1, message: 'HI!!!', },
        { id: 2, message: 'How are you?', },
        { id: 3, message: 'Yo!!!', },
        { id: 4, message: 'WoW', }
    ],
    newMessageBody: "Stepler"
};

const dialogsReducer = (state=initialState, action) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:{
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        };
    
        case SEND_MESSAGE:{
            let stateCopy = {...state}
            let body = stateCopy.newMessageBody;
            stateCopy.newMessageBody = '';

            stateCopy.messages.push({ id: 6, message: body });
            return stateCopy;
        }
        default:
            return state;

    }


};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;