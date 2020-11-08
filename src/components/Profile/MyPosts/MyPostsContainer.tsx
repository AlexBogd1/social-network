import React from "react";

import {
    addPostActionCreator,
    AddPostActionType,
    UpdateNewPostActionType,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ProfilePageType} from "../../../redux/state";

type MyPostsType = {
    profilePage:  ProfilePageType
    dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
}

const mapStateToProps = (store: MyPostsType) => {
    return {
        posts: store.profilePage.posts,
        messageForNewPost: store.profilePage.messageForNewPost
    }
}

const mapDispatchToProps = (dispatch: (action:  AddPostActionType | UpdateNewPostActionType) => void) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        onChangeText: (text: string) => dispatch(updateNewPostTextActionCreator(text))
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;