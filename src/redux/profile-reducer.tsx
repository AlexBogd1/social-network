import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {ProfilePageType} from "./state";
import {SendMessageActionType} from "./dialogs-reducer";
import {UserProfileType} from "../components/Profile/ProfileContainer";
import {profileAPI, usersAPI} from "../api/api";


export type AddPostActionType = {
    type: "ADD-POST"
    post: string
}
export type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type SetUserProfileType = {
    type: "SET-USER-PROFILE"
    userProfile: UserProfileType
}
export type SetStatusType = {
    type: "SET-STATUS"
    status: string
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";


export const addPostActionCreator = (post: string): AddPostActionType => {
    return {
        type: ADD_POST,
        post
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
export const setMyUserProfile = (userID: string) => (dispatch: (action: ActionsType) => void) => {
    usersAPI.setUser(userID).then(data => {
        dispatch(setUserProfile(data));
    })
}
export const setStatus = (status: string)  => {
    return {
    type: SET_STATUS,
    status
} as const
}
export const getStatus = (userId: string) => (dispatch: (action: ActionsType) => void) => {
    profileAPI.getStatus(userId).then(response => dispatch(setStatus(response.data)))
}
export const updateStatus = (newStatus: string) => (dispatch: (action: ActionsType) => void) =>{
    profileAPI.updateStatus(newStatus).then(
        response => {
            if(response.data.resultCode === 0){
                dispatch(setStatus(newStatus))
            }
        })
}


type ActionsType = AddPostActionType
    | UpdateNewPostActionType
    | SendMessageActionType
    | SetUserProfileType
    | SetStatusType

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi? how are you', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 11},
        {id: 3, message: 'It is my second post', likesCount: 15},
    ],
    messageForNewPost: 'Hello from state',
    userProfile: null,
    status: ''
}

const profileReducer =
    (state = initialState,
     action: ActionsType) => {

        switch (action.type) {
            case ADD_POST:
                let newPost: PostType = {
                    id: 5,
                    message: action.post,
                    likesCount: 0,
                };

                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    messageForNewPost: "",
                };

            case UPDATE_NEW_POST_TEXT:
                return {
                    ...state,
                    messageForNewPost: action.newText,
                };
            case SET_USER_PROFILE:
                return {...state, userProfile: action.userProfile};

            case SET_STATUS:
                return {
                    ...state,
                    status: action.status
                }
            default:
                return state
        }
    }
export default profileReducer;