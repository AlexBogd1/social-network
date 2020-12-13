import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../redux/redux-store";
import {UsersPhotoApiType} from "../Users/UsersContainer";
import {setMyUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withArrowFuncAuthRedirect, withAuthRedirect} from "../../hoc/withAuthRedirect";
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
    setMyUserProfile: (userID: string) => void
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = '2';
        }
        this.props.setMyUserProfile(userID)
    }

    render() {
        console.log({...this.props})
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
})



// compose()() - принимает функции, кот оборачивают нашу комп в HOC в обр порядке и саму компоненту
export default compose(connect(mapStateToProps, {setMyUserProfile}), withRouter,withAuthRedirect)(ProfileContainer) as React.ComponentType



//let RedirectAuthComponent = withAuthRedirect<PropsType>(ProfileContainer);
// let mapStateToPropsForRedirect = (store: ReduxStoreType) => ({
//     isAuth: store.auth.isAuth,
// })
//
// let RedirectComponentWithAuth = connect(mapStateToPropsForRedirect)(RedirectAuthComponent);
//export default connect(mapStateToProps, {setMyUserProfile})(WithUrlDataContainerComponent);