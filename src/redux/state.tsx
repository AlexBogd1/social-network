import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {DialogItemType} from "../components/Dialogs/DialogItem/DialodsItem";
import {MessageType} from "../components/Dialogs/Message/Message";


export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostType>
}
export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogItemType>
}
export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: StateType
    // addPost: () => void
    getState: () => StateType
    // updateNewPostText: (newText: string) => void
    _rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
}
export type AddPostActionType = {
    type: "ADD-POST"
}
export type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi? how are you', likesCount: 12},
                {id: 2, message: 'It is my first post', likesCount: 11},
                {id: 3, message: 'It is my second post', likesCount: 15},
            ],
            messageForNewPost: 'Hello from state',
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

    },
    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    _rerenderEntireTree() {
        console.log('hello');
    },

    dispatch(action) { // { type: 'ADD-POST' }
        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: 5,
                message: this._state.profilePage.messageForNewPost,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.messageForNewPost = "";
            this._rerenderEntireTree();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.messageForNewPost = action.newText;
            this._rerenderEntireTree();
        }
    }

}

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

export default store