import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const LOGIN = 'LOGIN'

export type SetUserDataActionType = {
    type: typeof SET_USER_DATA
    data: { userId: number| null, email: string| null, login: string| null, isAuth: boolean }
}
export type LoginActionType = ReturnType<typeof loginActionCreator>
export type SetAuthenticationActionType = ReturnType<typeof setAuthenticationUserData>
export type AuthActionsTypes = SetUserDataActionType|LoginActionType|SetAuthenticationActionType;
export type ValidationLoginFormType = ReturnType<typeof stopSubmit>

export const loginActionCreator = (email: string, password: string, rememberMe: boolean) => {
    return {
        type: LOGIN,
        email,
        password,
        rememberMe
    }
}
export const setAuthUserData = (userId: number| null, email: string| null, login: string| null, isAuth: boolean): SetUserDataActionType => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login,isAuth}
    }
}
export const setAuthenticationUserData = () => (dispatch: (action: SetUserDataActionType) => void) => {
    authAPI.auth()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
}
export const login = (email: string, password: string, rememberMe: boolean ) => (dispatch: (action: AuthActionsTypes | ValidationLoginFormType) => void) => {
    authAPI.login(email,password,rememberMe).then(res => {
        if(res.data.resultCode ===0){
           dispatch(setAuthenticationUserData())
        } else {
            const message = res.data.messages.length > 0 ? res.data.messages[0]: "some error"
            dispatch(stopSubmit('login', {_error: message}));
        }
    });


}
export const logout = ( ) => (dispatch: (action: AuthActionsTypes) => void) => {
    authAPI.logout().then(res => {
        if(res.data.resultCode ===0){
            dispatch(setAuthUserData(null, null, null, false))
        }
    });


}

// export type AuthType = {
//     userId: number | null,
//     email: string | null,
//     login: string | null,
//     isAuth: boolean
// }

export type AuthType = typeof initialState

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false

}

const authReducer =
    (state = initialState, action: SetUserDataActionType): AuthType => {
        switch (action.type) {
            case SET_USER_DATA:
                return {
                    ...state,
                    ...action.data,
                }
            default:
                return state
        }
    }
export default authReducer;