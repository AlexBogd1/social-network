import {AddPostActionType, UpdateNewPostActionType} from "./profile-reducer";
import {ProfilePageType} from "./state";
import {UpdateNewMessageBodyType, SendMessageActionType} from "./dialogs-reducer";


const sidebarReducer =
    (state: ProfilePageType,
     action: AddPostActionType
         | UpdateNewPostActionType
         | UpdateNewMessageBodyType
         | SendMessageActionType) => {


        return state;
    }

    export default sidebarReducer;