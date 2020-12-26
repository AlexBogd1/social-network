import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_INITIALIZED = 'SET_INITIALIZED';


export const initializeUserAC = (initialized: boolean) => {
    return {
        type: SET_INITIALIZED,
        initialized
    }
}

export type InitializedAppACType = ReturnType<typeof initializeUserAC>


export type AuthType = typeof initialState

let initialState = {
    initialized: false
}

const appReducer =
    (state = initialState, action: InitializedAppACType): AuthType => {
        switch (action.type) {
            case "SET_INITIALIZED":
                return {
                    ...state,
                    initialized: action.initialized
                }
            default:
                return state
        }
    }
export default appReducer;