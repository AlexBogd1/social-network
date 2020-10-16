import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {DialogItemType} from "../components/Dialogs/DialogItem/DialodsItem";
import {MessageType} from "../components/Dialogs/Message/Message";

let rerenderEntireTree = () => {

}

export type StateType = {
    profilePage: {
        posts: Array<PostType>,
        newPostText: string
    },
    dialogsPage: {
        messages: Array<MessageType>
        dialogs: Array<DialogItemType>
    }
}

export let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi? how are you', likesCount: 12},
            {id: 2, message: 'It is my first post', likesCount: 11},
            {id: 3, message: 'It is my second post', likesCount: 15},
        ],
        newPostText: 'Hello from state',
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Victor'},
            {id: 5, name: 'Alex'},
            {id: 6, name: 'Valera'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ],
    },

}

export let addPost = () => {
    let newPost: PostType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree();
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}

export const subscribe = (observer: () => void) =>{
    rerenderEntireTree = observer;
}

export default state