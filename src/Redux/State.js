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
            ]
        },
        sitebar: {}
    },
    getState() {
        return this._state;
    },

    _callSubsriber() { },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubsriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubsriber(this._state);
    },
    subscribe(observer) {
        this._callSubsriber = observer; // pattern 'observer' --'наблюдатель'
    }
};




window.store = store;
export default store;