import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./redux/redux-store";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store = {store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);

serviceWorker.unregister();







