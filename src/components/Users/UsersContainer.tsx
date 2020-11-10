import React from 'react';
import {connect} from 'react-redux';
import Users from "./Users";
import {ReduxStoreType} from "../../redux/redux-store";
import {
    followAC,
    FollowActionType,
    setUsersAC,
    SetUsersActionType,
    unfollowAC,
    UnfollowActionType, UsersPageType
} from "../../redux/users-reducer";

type UsersType = {

}

const mapStateToProps = (store: ReduxStoreType ) => {
    return {
        users: store.usersPage
    }

}

const mapDispatchToProps = (dispatch: (action: FollowActionType | UnfollowActionType| SetUsersActionType) => void) => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        setUsers: (users: UsersPageType) => dispatch(setUsersAC(users)),
        unfollow: (userId: number) => dispatch(unfollowAC(userId)),


    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Users);