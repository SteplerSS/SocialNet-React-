import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount:12},
    {id: 2, message: 'It is my first post!',likesCount:0},
    {id: 3, message: 'It is my ',likesCount:35},
];
let dialogs = [
    {id: 1, name: 'Dimych',},
    {id: 2, name: 'Andrey',},
    {id: 3, name: 'Sveta',},
    {id: 4, name: 'Sasha',}
];
let messages = [
    {id: 1, message: 'HI!!!',},
    {id: 2, message: 'How are you?',},
    {id: 3, message: 'Yo!!!',},
    {id: 4, message: 'WoW',}
];

ReactDOM.render(<App posts ={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
