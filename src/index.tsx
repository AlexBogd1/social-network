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

serviceWorker.unregister();







