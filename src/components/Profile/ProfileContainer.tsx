import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../redux/redux-store";
import {UsersPhotoApiType} from "../Users/UsersContainer";
import {getStatus, setMyUserProfile, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

export type UserProfileContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
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
    userId: number
    status: string
    setMyUserProfile: (userID: string) => void
    getStatus: (userId: string) => void
    updateStatus: (newStatus: string) => void
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID && this.props.userId) {
            userID = ''+this.props.userId;
        } else if(!this.props.userId){
            userID = '2';
        }
        this.props.setMyUserProfile(userID);
        this.props.getStatus(userID)
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }

}
type PathParamsType = {
    userID: string,
}

// RouteComponentProps необходимо для оборачивания компоненты для withRouter
type PropsType = RouteComponentProps<PathParamsType> & UserProfilePageType


let mapStateToProps = (store: ReduxStoreType) => ({
    userProfile: store.profilePage.userProfile,
    userId: store.auth.userId,
    status: store.profilePage.status
})


// compose()() - принимает функции, кот оборачивают нашу комп в обр порядке и саму компоненту(т.е. наша компонента прогоняется от withAuthRedirect до посл connect и возвр HOC с результатом цепочки)
export default compose(connect(mapStateToProps, {setMyUserProfile, getStatus, updateStatus}), withRouter)(ProfileContainer) as React.ComponentType



//let RedirectAuthComponent = withAuthRedirect<PropsType>(ProfileContainer);
// let mapStateToPropsForRedirect = (store: ReduxStoreType) => ({
//     isAuth: store.auth.isAuth,
// })
//
// let RedirectComponentWithAuth = connect(mapStateToPropsForRedirect)(RedirectAuthComponent);
//export default connect(mapStateToProps, {setMyUserProfile})(WithUrlDataContainerComponent);