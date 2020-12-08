import {usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = "UNFOLLOW";


export type SetUserDataActionType = {
    type: 'SET_USER_DATA'
    data: {userId: number, email: string, login: string}
}


export const setAuthUserData = (userId: number, email: string, login: string): SetUserDataActionType => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login }
    }
}

export const setAuthenticationUserData = () => (dispatch: (action: SetUserDataActionType) => void) => {
    usersAPI.auth()
        .then(data => {
            if(data.resultCode === 0){
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id, email, login));
            }
        })
}

export type AuthType = {
    userId: number|null,
    email: string|null,
    login: string|null,
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