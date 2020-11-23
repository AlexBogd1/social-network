import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {ProfilePageType} from "./state";
import {SendMessageActionType, UpdateNewMessageBodyType} from "./dialogs-reducer";
import {UserProfileType} from "../components/Profile/ProfileContainer";


export type AddPostActionType = {
    type: "ADD-POST"
}
export type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type SetUserProfileType = {
    type: "SET-USER-PROFILE"
    userProfile: UserProfileType
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

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
export const setUserProfile = (userProfile: UserProfileType): SetUserProfileType => {
    return {
        type: SET_USER_PROFILE,
        userProfile
    }
}


let initialState: ProfilePageType =  {
    posts: [
        {id: 1, message: 'Hi? how are you', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 11},
        {id: 3, message: 'It is my second post', likesCount: 15},
    ],
    messageForNewPost: 'Hello from state',
    userProfile: null
}

const profileReducer =
    (state = initialState,
     action: AddPostActionType
         | UpdateNewPostActionType
         | UpdateNewMessageBodyType
         | SendMessageActionType
         | SetUserProfileType) => {

        switch (action.type) {
            case ADD_POST:
                let newPost: PostType = {
                    id: 5,
                    message: state.messageForNewPost,
                    likesCount: 0,
                };

                return {
                    ...state,
                    posts: [...state.posts,newPost],
                    messageForNewPost: "",
                };

            case UPDATE_NEW_POST_TEXT:
                return {
                    ...state,
                    messageForNewPost: action.newText,
                };
            case "SET-USER-PROFILE":
                return {...state, userProfile: action.userProfile }
            default:
                return state
        }
    }
export default profileReducer;