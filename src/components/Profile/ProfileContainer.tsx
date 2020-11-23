import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../redux/redux-store";
import axios from "axios";
import {UsersPhotoApiType} from "../Users/UsersContainer";
import {setUserProfile} from "../../redux/profile-reducer";
import { withRouter, RouteComponentProps } from "react-router-dom";

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
class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then(response => {
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

type PathParamsType = {
    userID: string,
}

type PropsType = RouteComponentProps<PathParamsType> & UserProfilePageType

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);