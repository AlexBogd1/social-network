import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


// export type ProfileType = {
//     profilePage:  ProfilePageType
//     dispatch: (action:
//                    AddPostActionType | UpdateNewPostActionType|
//                    UpdateNewMessageBodyType|SendMessageActionType) => void
// }

const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;