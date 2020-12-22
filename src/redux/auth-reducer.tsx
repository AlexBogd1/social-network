import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = "UNFOLLOW";
const LOGIN = 'LOGIN'

export type SetUserDataActionType = {
    type: typeof SET_USER_DATA
    data: { userId: number| null, email: string| null, login: string| null, isAuth: boolean }
}
export type LoginActionType = ReturnType<typeof loginActionCreator>
export type SetAuthenticationActionType = ReturnType<typeof setAuthenticationUserData>
export type AuthActionsTypes = SetUserDataActionType|LoginActionType|SetAuthenticationActionType;


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
export const login = (email: string, password: string, rememberMe: boolean ) => (dispatch: (action: AuthActionsTypes) => void) => {
    authAPI.login(email,password,rememberMe).then(res => {
        if(res.data.resultCode ===0){
           dispatch(setAuthenticationUserData())
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

                }


            default:
                return state
        }
    }
export default authReducer;