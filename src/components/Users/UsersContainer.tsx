import React from 'react';
import {connect} from 'react-redux';
import Users, {UsersFromApiType} from "./UsersC";
import {ReduxStoreType} from "../../redux/redux-store";
import {
    followAC,
    FollowActionType, setCurrentPageAC, SetCurrentPageActionType, SetTotalCountActionType, setTotalUsersCountAC,
    setUsersAC,
    SetUsersActionType,
    unfollowAC,
    UnfollowActionType
} from "../../redux/users-reducer";


const mapStateToProps = (store: ReduxStoreType ) => {
    return {
        users: store.usersPage.users,
        pageSize: store.usersPage.pageSize,
        totalUsersCount: store.usersPage.totalUsersCount,
        currentPage: store.usersPage.currentPage
    }

}

const mapDispatchToProps = (dispatch: (action: FollowActionType | UnfollowActionType| SetUsersActionType | SetCurrentPageActionType| SetTotalCountActionType) => void) => {
    return {
        follow: (userId: string) => dispatch(followAC(userId)),
        setUsers: (users: Array<UsersFromApiType>) => dispatch(setUsersAC(users)),
        unfollow: (userId: string) => dispatch(unfollowAC(userId)),
        setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCountAC(totalCount))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Users);