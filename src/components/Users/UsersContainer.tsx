import React from 'react';
import {connect} from 'react-redux';
import {ReduxStoreType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingInProgress,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from '../common/Preloader';
import {usersAPI} from "../../api/api";


type UsersForPageType = {
    users: Array<UsersFromApiType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UsersFromApiType>) => void
    setCurrentPage: (pageNumber:number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingInProgress: (isFetching: boolean, userId: string) => void
}
export type UsersPhotoApiType = {
    large: string
    small: string
}
export type UsersFromApiType = {
    name: string
    id: string
    photos: UsersPhotoApiType
    followed: boolean
}


class UsersContainerComponent extends React.Component<UsersForPageType> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        })
    }
    render() {

        return  <>
            { this.props.isFetching ? <Preloader/> :
            <Users users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      followingInProgress={this.props.followingInProgress}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged = {this.onPageChanged}
                      toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
        />}
        </>
    }
}

const mapStateToProps = (store: ReduxStoreType ) => {
    return {
        users: store.usersPage.users,
        pageSize: store.usersPage.pageSize,
        totalUsersCount: store.usersPage.totalUsersCount,
        currentPage: store.usersPage.currentPage,
        isFetching: store.usersPage.isFetching,
        followingInProgress: store.usersPage.followingInProgress
    }

}

// const mapDispatchToProps = (dispatch: (action: FollowActionType | UnfollowActionType| SetUsersActionType | SetCurrentPageActionType| SetTotalCountActionType|ToggleIsFetchingActionType) => void) => {
//     return {
//         follow: (userId: string) => dispatch(follow(userId)),
//         setUsers: (users: Array<UsersFromApiType>) => dispatch(setUsers(users)),
//         unfollow: (userId: string) => dispatch(unfollow(userId)),
//         setCurrentPage: (pageNumber: number) => dispatch(setCurrentPage(pageNumber)),
//         setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCount(totalCount)),
//         toggleIsFetching: (ifFetching: boolean) => dispatch(toggleIsFetching(ifFetching))
//     }
// }


export default connect(mapStateToProps,
    {follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount,toggleIsFetching, toggleIsFollowingInProgress})(UsersContainerComponent);