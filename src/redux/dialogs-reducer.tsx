
import {PostType} from "../components/Profile/MyPosts/Post/Post";
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

const dialogsReducer =
    (state: DialogsPageType,
     action: AddPostActionType | UpdateNewPostActionType | UpdateNewMessageBodyType | SendMessageActionType) => {
        switch (action.type) {
            case UPDATE_NEW_MESSAGE_BODY:
                state.newMessageBody = action.body;
                return state;
            case SEND_MESSAGE:
                let body = state.newMessageBody;
                state.newMessageBody = '';
                state.messages.push({id: 6, message: body});
                return state
            default:
                return state
        }
    }

export default dialogsReducer;