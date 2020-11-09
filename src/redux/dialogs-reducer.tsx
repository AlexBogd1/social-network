
import {DialogsPageType} from "./state";
import {AddPostActionType, UpdateNewPostActionType} from "./profile-reducer";


export type UpdateNewMessageBodyType = {
    type: 'UPDATE_NEW_MESSAGE_BODY'
    body: string
}
export type SendMessageActionType = {
    type: 'SEND_MESSAGE'
}

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessageCreator = (): SendMessageActionType => {
    return {
        type: SEND_MESSAGE,
    }
}
export const updateNewMessageBodyCreator = (body: string): UpdateNewMessageBodyType => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body,
    }
}


let initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Alex'},
        {id: 6, name: 'Valera'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ],
    newMessageBody: '',
}

const dialogsReducer =
    (state = initialState,
     action: AddPostActionType | UpdateNewPostActionType | UpdateNewMessageBodyType | SendMessageActionType) => {
        let stateCopy;
        switch (action.type) {
            case UPDATE_NEW_MESSAGE_BODY:
                stateCopy = {
                    ...state,
                    newMessageBody: action.body
                };
                return stateCopy;
            case SEND_MESSAGE:
                let body = state.newMessageBody;
                stateCopy ={
                    ...state,
                    newMessageBody: '',
                    messages: [...state.messages,{id: 6, message: body} ]
                };
                return stateCopy
            default:
                return state
        }
    }

export default dialogsReducer;