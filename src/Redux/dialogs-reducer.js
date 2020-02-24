
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

const dialogsReducer = (state = initialState, action) => {
   

    let stateCopy;
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy = {
                ...state,
                newMessageBody: action.body
            }

            stateCopy.newMessageBody = action.body;
            return stateCopy;


        case SEND_MESSAGE:
            let body = state.newMessageBody;
            stateCopy = {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }]
            }

            return stateCopy;

        default:
            return state;

    }

};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;