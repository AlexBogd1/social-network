import React, {useRef} from "react";
import style from './MyPosts.module.css';
import Post, {PostType} from "./Post/Post";

import {
    addPostActionCreator,
    AddPostActionType,
    UpdateNewPostActionType,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
}




const MyPostsContainer = (props: MyPostsType) => {

    const newPostElement = useRef<HTMLTextAreaElement>(null)

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    const onChangeText = (text: string) => {
            props.dispatch(updateNewPostTextActionCreator(text));

    }

    return (<MyPosts posts={props.posts} newPostText={props.newPostText} addPost = {addPost} onChangeText={onChangeText}/>)

       }

export default MyPostsContainer;