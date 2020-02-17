import * as serviceWorker from './serviceWorker';
import store from "./Redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


let rerenderEnterTree = (state) => {
ReactDOM.render(
    <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
    </BrowserRouter>, document.getElementById('root'));
};


rerenderEnterTree(store.getState());
   
store.subscribe(rerenderEnterTree);


serviceWorker.unregister();

