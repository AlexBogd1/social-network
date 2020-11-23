import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../redux/redux-store";
import axios from "axios";
import {UsersPhotoApiType} from "../Users/UsersContainer";
import {setUserProfile} from "../../redux/profile-reducer";

export type UserProfileContactsType = {
    facebook:	string | null
    website:	string | null
    vk:	        string | null
    twitter:	string | null
    instagram:	string | null
    youtube:	string | null
    github:	    string | null
    mainLink:	string | null
}
export type UserProfileType = {
    aboutMe: string
    contacts: UserProfileContactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: UsersPhotoApiType
    userId: number
}

export type UserProfilePageType = {
    userProfile: UserProfileType | null
    setUserProfile: (userProfile:UserProfileType) => void
}
class ProfileContainer extends React.Component<UserProfilePageType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            debugger
            this.props.setUserProfile(response.data);
        })
    }

    render(){
        return (
            <Profile {...this.props} />
        )
    }

}

let mapStateToProps = (store: ReduxStoreType) => ({
    userProfile: store.profilePage.userProfile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);