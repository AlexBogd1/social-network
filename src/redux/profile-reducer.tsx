import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {SendMessageActionType} from "./dialogs-reducer";
import { UserProfileType} from "../components/Profile/ProfileContainer";
import {profileAPI, usersAPI} from "../api/api";
import { UsersPhotoApiType } from "../components/Users/UsersContainer";

export type ProfilePageTypeForm = {
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

export type SetPhotosSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: UsersPhotoApiType
}

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS"

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
    } as const
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


export const savePhotoSuccess = (photos: UsersPhotoApiType) => ( {
    type: SAVE_PHOTO_SUCCESS,
    photos  
  } as const)

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


export const saveProfile = (profile: UserProfileType) => async (dispatch: (action: ActionsType) => void , getState: () => ProfilePageTypeForm ) =>{
    const userId = '4'
    if(getState().userProfile?.userId) {
        const userId = getState().userProfile?.userId
    } 
   
    let response = await profileAPI.saveProfile(profile)
            if(response.data.resultCode === 0){
               getStatus(userId)
            }    
}

export const savePhoto = (photo: File) => async (dispatch: (action: ActionsType) => void) =>{
    let response = await profileAPI.savePhoto(photo)
            if(response.data.resultCode === 0){
                dispatch(savePhotoSuccess(response.data.data.photos))
            }    
}




type ActionsType = AddPostActionType
    | SendMessageActionType
    | SetUserProfileType
    | SetStatusType
    | SetPhotosSuccessType

let initialState: ProfilePageTypeForm = {
    posts: [
        {id: 1, message: 'Hi? how are you', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 11},
        {id: 3, message: 'It is my second post', likesCount: 15},
    ],
    userProfile: null,
    status: '',
   
}

export const profileReducer =
    (state = initialState,
     action: ActionsType): ProfilePageTypeForm => {

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
                };

            case SET_USER_PROFILE:
                return {...state, userProfile: action.userProfile};
             
                case SAVE_PHOTO_SUCCESS:
                    return {...state, userProfile: {...state.userProfile, photos: action.photos}};
        

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