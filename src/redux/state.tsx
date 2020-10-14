import {PostType} from "../components/Profile/MyPosts/Post/Post";
import { rerenderEntireTree } from "./render";
import {DialogItemType} from "../components/Dialogs/DialogItem/DialodsItem";
import {MessageType} from "../components/Dialogs/Message/Message";

export type StateType = {
    profilePage: {
        posts: Array<PostType>,
        dialogs: Array<DialogItemType>
    },
    dialogsPage: {
        messages: Array<MessageType>
    }
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi? how are you', likesCount: 12},
            {id: 2, message: 'It is my first post', likesCount: 11},
            {id: 3, message: 'It is my second post', likesCount: 15},
        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Victor'},
            {id: 5, name: 'Alex'},
            {id: 6, name: 'Valera'},
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ],
    },

}

export let addPost = (postMessage: string) => {
    let newPost: PostType = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state, addPost)

}

export default state