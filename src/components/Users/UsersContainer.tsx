import React from 'react';
import {connect} from 'react-redux';
import {ReduxStoreType} from "../../redux/redux-store";
import {follow, getUsers, setCurrentPage, toggleIsFollowingInProgress, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from '../common/Preloader';


type UsersForPageType = {
    users: Array<UsersFromApiType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setCurrentPage: (pageNumber:number) => void
    toggleIsFollowingInProgress: (isFetching: boolean, userId: string) => void
    getUsers: (currentPage: number, pageSize: number) => void
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
            this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
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
    {follow, unfollow, toggleIsFollowingInProgress, setCurrentPage, getUsers})(UsersContainerComponent);