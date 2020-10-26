import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {ProfilePageType} from "./state";
import {SendMessageActionType, UpdateNewMessageBodyType} from "./dialogs-reducer";


export type AddPostActionType = {
    type: "ADD-POST"
}
export type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = (): AddPostActionType => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

const profileReducer =
    (state: ProfilePageType,
     action: AddPostActionType
         | UpdateNewPostActionType
         | UpdateNewMessageBodyType
         | SendMessageActionType) => {

        switch (action.type) {
            case ADD_POST:
                let newPost: PostType = {
                    id: 5,
                    message: state.messageForNewPost,
                    likesCount: 0,
                };
                state.posts.push(newPost);
                state.messageForNewPost = "";
                return state;
            case UPDATE_NEW_POST_TEXT:
                state.messageForNewPost = action.newText;
                return state
            default:
                return state
        }
    }
export default profileReducer;