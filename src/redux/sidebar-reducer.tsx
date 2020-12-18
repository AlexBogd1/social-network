import {AddPostActionType, UpdateNewPostActionType} from "./profile-reducer";
import {ProfilePageType} from "./state";
import { SendMessageActionType} from "./dialogs-reducer";


const sidebarReducer =
    (state: ProfilePageType,
     action: AddPostActionType
         | UpdateNewPostActionType
         | SendMessageActionType) => {


        return state;
    }

    export default sidebarReducer;