import {SetAuthenticationActionType, setAuthenticationUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


export type InitializedAppACType = ReturnType<typeof initializedSuccess>


export type AuthType = typeof initialState

let initialState = {
    initialized: false
}

const appReducer =
    (state = initialState, action: InitializedAppACType): AuthType => {
        switch (action.type) {
            case INITIALIZED_SUCCESS:
                return {
                    ...state,
                    initialized: true
                }
            default:
                return state
        }
    }

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    }
}
export const initializeApp = () => (dispatch: (action: InitializedAppACType | SetAuthenticationActionType) => void) => {

    let promise = dispatch(setAuthenticationUserData());

    Promise.all([promise])
        .then(()=>{
            dispatch(initializedSuccess())
        })


}
export default appReducer;