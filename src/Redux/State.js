const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {

    _state: {
        profilePage:
        {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'It is my first post!', likesCount: 0 },
                { id: 3, message: 'It is my ', likesCount: 35 }],

            newPostText: '',
        },

        dialogsPage: {
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
            newMessageBody: ""
        },
        sitebar: {}
    },
    _callSubsriber() { },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubsriber = observer; // pattern 'observer' --'наблюдатель'
    },


    dispatch(action) {

        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 5
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubsriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubsriber(this._state);
        }
        else if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubsriber(this._state);
        }
        else if (action.type === 'SEND_MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({ id: 6, message: body });
            this._callSubsriber(this._state);
        }
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })



window.store = store;
export default store;