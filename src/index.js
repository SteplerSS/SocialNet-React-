import * as serviceWorker from './serviceWorker';
import {rerenderEnterTree} from "./render";
import state from "./Redux/State";


rerenderEnterTree(state);


serviceWorker.unregister();

