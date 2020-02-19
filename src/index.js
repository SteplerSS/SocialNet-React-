import * as serviceWorker from './serviceWorker';
import store from "./Redux/redux-store";
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
   
store.subscribe(() => {
    let state =store.getState();
    rerenderEnterTree(state);
});


serviceWorker.unregister();

