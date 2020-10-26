import {
    AddPostActionType,
    ProfilePageType,
    SendMessageActionType,
    UpdateNewMessageBodyType,
    UpdateNewPostActionType
} from "./state";




const sidebarReducer =
    (state: ProfilePageType,
     action: AddPostActionType
         | UpdateNewPostActionType
         | UpdateNewMessageBodyType
         | SendMessageActionType) => {


        return state;
    }