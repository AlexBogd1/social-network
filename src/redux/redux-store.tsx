import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
})

export let store = createStore(reducers);