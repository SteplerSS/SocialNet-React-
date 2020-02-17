import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer ";
import sidebarReducer from "./sidebar-reducer";


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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sitebar = sidebarReducer(this._state.sitebar, action);

        this._callSubsriber(this._state);


},
}


window.store = store;
export default store;