import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";
import { ProfilePageType} from "../../redux/state";


type ProfileType = {
    profilePage:  ProfilePageType
    addPost: () => void
    updatePostText: (newText: string) => void
}


const Profile = (props: ProfileType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} posts={props.profilePage.posts} newPostText={props.profilePage.messageForNewPost} updatePostText ={props.updatePostText}/>
        </div>
    )
}

export default Profile;