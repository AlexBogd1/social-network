import React from 'react';
import {connect} from 'react-redux';
import Users, {UsersFromApiType} from "./UsersC";
import {ReduxStoreType} from "../../redux/redux-store";
import {
    followAC,
    FollowActionType,
    setUsersAC,
    SetUsersActionType,
    unfollowAC,
    UnfollowActionType
} from "../../redux/users-reducer";


const mapStateToProps = (store: ReduxStoreType ) => {
    return {
        users: store.usersPage
    }

}

const mapDispatchToProps = (dispatch: (action: FollowActionType | UnfollowActionType| SetUsersActionType) => void) => {
    return {
        follow: (userId: string) => dispatch(followAC(userId)),
        setUsers: (users: Array<UsersFromApiType>) => dispatch(setUsersAC(users)),
        unfollow: (userId: string) => dispatch(unfollowAC(userId)),


    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Users);