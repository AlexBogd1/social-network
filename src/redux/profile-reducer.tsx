import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {SendMessageActionType} from "./dialogs-reducer";
import {UserProfileType} from "../components/Profile/ProfileContainer";
import {profileAPI, usersAPI} from "../api/api";

type ProfilePageTypeForm = {
    posts: Array<PostType>
    userProfile: UserProfileType | null
    status: string
}

export type AddPostActionType = {
    type: typeof ADD_POST
    post: string
}
export type UpdateNewPostActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
export type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    userProfile: UserProfileType
}
export type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = (post: string): AddPostActionType => {
    return {
        type: ADD_POST,
        post
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
    | SendMessageActionType
    | SetUserProfileType
    | SetStatusType

let initialState: ProfilePageTypeForm = {
    posts: [
        {id: 1, message: 'Hi? how are you', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 11},
        {id: 3, message: 'It is my second post', likesCount: 15},
    ],
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