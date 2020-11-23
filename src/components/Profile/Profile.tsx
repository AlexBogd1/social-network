import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfilePageType} from "./ProfileContainer";


const Profile = (props: UserProfilePageType) => {

    return (
        <div>
            <ProfileInfo profile = {props.userProfile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;