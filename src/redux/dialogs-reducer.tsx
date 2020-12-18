

import {AddPostActionType, UpdateNewPostActionType} from "./profile-reducer";
import {MessageType} from "../components/Dialogs/Message/Message";
import {DialogItemType} from "../components/Dialogs/DialogItem/DialodsItem";


export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogItemType>
}

export type SendMessageActionType = {
    type: 'SEND_MESSAGE'
    message: string
}


const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessageCreator = (message: string): SendMessageActionType => {
    return {
        type: SEND_MESSAGE,
        message
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

}

const dialogsReducer =
    (state = initialState,
     action: AddPostActionType | UpdateNewPostActionType | SendMessageActionType) => {

        switch (action.type) {

            case SEND_MESSAGE:
                let body = action.message;
                return {
                    ...state,
                    messages: [...state.messages,{id: 6, message: body} ]
                }

            default:
                return state
        }
    }

export default dialogsReducer;