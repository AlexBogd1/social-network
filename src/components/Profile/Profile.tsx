import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfilePageType,UserProfileType} from "./ProfileContainer";


const Profile = (props: UserProfilePageType & {isOwner: boolean, savePhoto: (e: File) => void, saveProfile:(profile: UserProfileType)=>void} ) => {
    
    return (
        <div>
            <ProfileInfo profile = {props.userProfile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner = {props.isOwner}
                         saveProfile ={props.saveProfile}
                         savePhoto = {props.savePhoto}
                         />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;