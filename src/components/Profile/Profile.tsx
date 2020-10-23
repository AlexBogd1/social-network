import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";
import {AddPostActionType, ProfilePageType, UpdateNewPostActionType} from "../../redux/state";


type ProfileType = {
    profilePage:  ProfilePageType
    dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
}


const Profile = (props: ProfileType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.messageForNewPost}
                     dispatch ={props.dispatch}/>
        </div>
    )
}

export default Profile;