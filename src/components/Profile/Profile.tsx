import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";
import {addPost} from "../../redux/state";


type ProfileType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}


const Profile = (props: ProfileType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} posts={props.posts}/>
        </div>
    )
}

export default Profile;