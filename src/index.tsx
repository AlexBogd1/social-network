import React from 'react';
import * as serviceWorker from './serviceWorker';
import {store} from './redux/redux-store'

import ReactDOM from "react-dom";
import App from "./App";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App  state={store.getState()} dispatch = {store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);

serviceWorker.unregister();







