import {rerenderEnterTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It is my first post!', likesCount: 0},
            {id: 3, message: 'It is my ', likesCount: 35}],

            newPostText: '',
    },
    
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych',},
            {id: 2, name: 'Andrey',},
            {id: 3, name: 'Sveta',},
            {id: 4, name: 'Sasha',}],
        messages: [
            {id: 1, message: 'HI!!!',},
            {id: 2, message: 'How are you?',},
            {id: 3, message: 'Yo!!!',},
            {id: 4, message: 'WoW',}
        ]
    },
    sitebar: {}
};

window.state =state;

 export let addPost = () => {
     
    let newPost = {
        id: 5,
        message : state.profilePage.newPostText,
        likesCount :0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
     rerenderEnterTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText=newText;
    rerenderEnterTree(state);
};

export default state;