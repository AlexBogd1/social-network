import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfilePageType} from "./ProfileContainer";


const Profile = (props: UserProfilePageType & {isOwner: boolean, savePhoto: (e: File) => void}) => {
    
    return (
        <div>
            <ProfileInfo profile = {props.userProfile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner = {props.isOwner}
                         savePhoto = {props.savePhoto}
                         />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;