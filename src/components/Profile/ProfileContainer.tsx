import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../redux/redux-store";
import {UsersPhotoApiType} from "../Users/UsersContainer";
import {getStatus, setMyUserProfile, updateStatus,savePhoto,saveProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
    aboutMe?: string
    contacts?: UserProfileContactsType
    fullName?: string
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    photos?: UsersPhotoApiType
    userId?: string
}

export type UserProfilePageType = {
    userProfile: UserProfileType | null
    userId: number
    isAuth: boolean
    status: string
    setMyUserProfile: (userID: string) => void
    getStatus: (userId: string) => void
    updateStatus: (newStatus: string) => void
}

class ProfileContainer extends React.Component<PropsType & {savePhoto: (photo: File) => void, saveProfile:(profile: UserProfileType)=>void}> {

    
    
    refreshProfile(){
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = ''+this.props.userId;
            if(!userID) {
                this.props.history.push('/login')
            }
        }

        this.props.setMyUserProfile(userID);
        this.props.getStatus(userID)
    }

    componentDidMount() {
       this.refreshProfile();
    }

    componentDidUpdate(prevProps:PropsType) {
        if(this.props.match.params.userID !== prevProps.match.params.userID){
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props} isOwner = {!this.props.match.params.userID} savePhoto={this.props.savePhoto} saveProfile={this.props.saveProfile}/>
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
    isAuth: store.auth.isAuth,
    userId: store.auth.userId,
    status: store.profilePage.status
})


// compose()() - принимает функции, кот оборачивают нашу комп в обр порядке и саму компоненту(т.е. наша компонента прогоняется от withAuthRedirect до посл connect и возвр HOC с результатом цепочки)
export default compose(connect(mapStateToProps, {setMyUserProfile, getStatus, updateStatus, savePhoto, saveProfile}), withRouter,withAuthRedirect)(ProfileContainer) as React.ComponentType



//let RedirectAuthComponent = withAuthRedirect<PropsType>(ProfileContainer);
// let mapStateToPropsForRedirect = (store: ReduxStoreType) => ({
//     isAuth: store.auth.isAuth,
// })
//
// let RedirectComponentWithAuth = connect(mapStateToPropsForRedirect)(RedirectAuthComponent);
//export default connect(mapStateToProps, {setMyUserProfile})(WithUrlDataContainerComponent);