import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";
import {addPost} from "../../redux/state";


type ProfileType = {
    profilePage: {
        posts: Array<PostType>,
        newPostText: string,
    }
    addPost: (postMessage: string) => void
    updatePostText: (newText: string) => void
}


const Profile = (props: ProfileType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} updatePostText ={props.updatePostText}/>
        </div>
    )
}

export default Profile;