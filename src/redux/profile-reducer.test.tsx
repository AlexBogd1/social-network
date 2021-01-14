import { profileAPI } from "../api/api";
import {profileReducer, ProfilePageTypeForm, updateStatus, setStatus, getStatus} from "./profile-reducer"


let initialState: ProfilePageTypeForm ;

beforeEach(() => {
    let initialState: ProfilePageTypeForm = {
        posts: [
            {id: 1, message: 'Hi? how are you', likesCount: 12},
            {id: 2, message: 'It is my first post', likesCount: 11},
            {id: 3, message: 'It is my second post', likesCount: 15},
        ],
        userProfile: null,
        status: ''
    }
})

it('post length must be 4 after adding', () => {
   
    const post = 'It is my second post'
    
    let state = profileReducer(initialState, {
        type: 'ADD-POST',
        post
    })

    expect(state.posts).toHaveLength(4);
    expect(state.posts[3]).toEqual({id: 5, message:'It is my second post', likesCount: 0 });
    expect(state.posts).toContainEqual({id: 5, message:'It is my second post', likesCount: 0 });
})

