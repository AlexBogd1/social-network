import {
    AddPostActionType,
    ProfilePageType,
    SendMessageActionType,
    UpdateNewMessageBodyType,
    UpdateNewPostActionType
} from "./state";
import {PostType} from "../components/Profile/MyPosts/Post/Post";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer =
    (state: ProfilePageType,
     action: AddPostActionType
         | UpdateNewPostActionType
         | UpdateNewMessageBodyType
         | SendMessageActionType) => {

        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: 5,
                message: state.messageForNewPost,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.messageForNewPost = "";

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            state.messageForNewPost = action.newText;

        }

        return state;
    }