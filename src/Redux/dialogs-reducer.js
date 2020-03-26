
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

};

const dialogsReducer = (state = initialState, action) => {


    let stateCopy;
    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            stateCopy = {
                ...state,

                messages: [...state.messages, { id: 6, message: body }]
            }

            return stateCopy;

        default:
            return state;

    }

};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer;