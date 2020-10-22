import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from './redux/state'

import ReactDOM from "react-dom";
import App from "./App";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App addPost={store.addPost.bind(store)} state={store.getState()} updatePostText={store.updateNewPostText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);

serviceWorker.unregister();







