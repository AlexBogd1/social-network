import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {DialogItemType} from "../components/Dialogs/DialogItem/DialodsItem";
import {MessageType} from "../components/Dialogs/Message/Message";
import profileReducer, {AddPostActionType, UpdateNewPostActionType} from "./profile-reducer";
import dialogsReducer, {SendMessageActionType} from "./dialogs-reducer";
import {UserProfileType} from "../components/Profile/ProfileContainer";


export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostType>
    userProfile: UserProfileType | null
    status: string
}

export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogItemType>
    newMessageBody: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action:
                   AddPostActionType | UpdateNewPostActionType
                   | SendMessageActionType) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi? how are you', likesCount: 12},
                {id: 2, message: 'It is my first post', likesCount: 11},
                {id: 3, message: 'It is my second post', likesCount: 15},
            ],
            messageForNewPost: 'Hello from state',
            userProfile: null,
            status: ''
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
            newMessageBody: '',
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
        //this._state.profilePage = profileReducer(this._state.profilePage, action)
        //this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._rerenderEntireTree();
    }
}

export default store