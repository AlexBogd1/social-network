import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { act } from "react-dom/test-utils";

const SET_USER_DATA = 'redux/auth-reducer/SET_USER_DATA'
const LOGIN = 'redux/auth-reducer/LOGIN'
const GET_CAPTCHA_URL_SUCCESS = 'redux/auth-reducer/GET_CAPTCHA_URL_SUCCESS'


export type GetCaptchaUrlType = { type: typeof GET_CAPTCHA_URL_SUCCESS, captchaUrl: string }
export type SetUserDataActionType = {
    type: typeof SET_USER_DATA
    data: { userId: number | null, email: string | null, login: string | null, isAuth: boolean }
}
export type LoginActionType = ReturnType<typeof loginActionCreator>
export type GetCaptchaType = ReturnType<typeof getCaptcha>;
export type SetAuthenticationActionType = ReturnType<typeof setAuthenticationUserData>
export type ValidationLoginFormType = ReturnType<typeof stopSubmit>
export type AuthActionsTypes = SetUserDataActionType | LoginActionType | SetAuthenticationActionType| GetCaptchaUrlType | ValidationLoginFormType | GetCaptchaType;


export const loginActionCreator = (email: string, password: string, rememberMe: boolean) => {
    return {
        type: LOGIN,
        email,
        password,
        rememberMe
    }
}


const authReducer =
    (state = initialState, action: SetUserDataActionType | GetCaptchaUrlType): AuthType => {
        switch (action.type) {
            case SET_USER_DATA:
                return {
                    ...state,
                    ...action.data,
                }
            case GET_CAPTCHA_URL_SUCCESS:
                debugger 
                   return {
                       ...state,
                       captchaUrl: action.captchaUrl
                   } 
            default:
                return state
        }
    }


export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataActionType => {
    return {
        type: SET_USER_DATA,
        data: { userId, email, login, isAuth }
    }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    captchaUrl
})

export const setAuthenticationUserData = () => async (dispatch: (action: SetUserDataActionType) => void) => {
    let responce = await authAPI.auth();
    if (responce.resultCode === 0) {
        let { id, login, email } = responce.data
        dispatch(setAuthUserData(id, email, login, true));
    }

}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string|null = null) => async (dispatch: (action: AuthActionsTypes) => void) => {
    let res = await authAPI.login(email, password, rememberMe, captcha);
    if (res.data.resultCode === 0) {
        dispatch(setAuthenticationUserData())
    }  else {
        if(res.data.resultCode === 10){
            dispatch(getCaptcha())
        }
        const message = res.data.messages.length > 0 ? res.data.messages[0] : "some error"
        dispatch(stopSubmit('login', { _error: message }));
    }

}

export const getCaptcha = () => async (dispatch: (action: GetCaptchaUrlType) => void) => {
    const res = await securityAPI.getCaptcha();
    const captcha = res.data.url;
    debugger 
    dispatch(getCaptchaUrlSuccess(captcha));
}



export const logout = () => async (dispatch: (action: AuthActionsTypes) => void) => {
    let res = await authAPI.logout();
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
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
    isAuth: false,
    captchaUrl: null as string | null
}


export default authReducer;