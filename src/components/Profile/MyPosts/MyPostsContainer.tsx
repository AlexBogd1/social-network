import React from "react";
import {addPostActionCreator, AddPostActionType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ProfilePageType} from "../../../redux/state";
import {ReduxStoreType} from "../../../redux/redux-store";

type MyPostsContainerType = {
    profilePage:  ProfilePageType
    dispatch: (action: AddPostActionType) => void
}

const mapStateToProps = (store: ReduxStoreType) => {
    return {
        posts: store.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch: (action:  AddPostActionType) => void) => {
    return {
        addPost: (post: string) => dispatch(addPostActionCreator(post)),
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;