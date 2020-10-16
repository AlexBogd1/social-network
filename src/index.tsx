import React from 'react';
import * as serviceWorker from './serviceWorker';
import state, {addPost, StateType, subscribe, updateNewPostText} from './redux/state'

import ReactDOM from "react-dom";
import App from "./App";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App addPost={addPost} state={state} updatePostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();







