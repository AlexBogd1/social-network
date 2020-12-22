import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = "UNFOLLOW";
const LOGIN = 'LOGIN'

export type SetUserDataActionType = {
    type: typeof SET_USER_DATA
    data: { userId: number, email: string, login: string }
}
export type LoginActionType = ReturnType<typeof loginActionCreator>
export type AuthActionsTypes = SetUserDataActionType|LoginActionType;


export const loginActionCreator = (email: string, password: string, rememberMe: boolean) => {
    return {
        type: LOGIN,
        email,
        password,
        rememberMe
    }
}
export const setAuthUserData = (userId: number, email: string, login: string): SetUserDataActionType => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}
    }
}
export const setAuthenticationUserData = () => (dispatch: (action: SetUserDataActionType) => void) => {
    authAPI.auth()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id, email, login));
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean ) => (dispatch: (action: AuthActionsTypes) => void) => {
    authAPI.login(email,password,rememberMe).then(res => console.log(res));
    authAPI.auth().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data
            dispatch(setAuthUserData(id, email, login));
        }
    })

}

export type AuthType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

let initialState: AuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false

}

const authReducer =
    (state = initialState, action: SetUserDataActionType) => {
        switch (action.type) {
            case SET_USER_DATA:
                return {
                    ...state,
                    ...action.data,
                    isAuth: true
                }


            default:
                return state
        }
    }
export default authReducer;