import * as serviceWorker from './serviceWorker';
import state from "./Redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {subscribe, addPost, updateNewPostText} from "./Redux/State";


let rerenderEnterTree = (state) =>{
ReactDOM.render(
    <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </BrowserRouter>, document.getElementById('root'));
};


rerenderEnterTree(state);

subscribe(rerenderEnterTree);


serviceWorker.unregister();

