import React from 'react';
import {connect} from 'react-redux';
import {ReduxStoreType} from "../../redux/redux-store";
import {
    followUser,
    requestUsers,
    setCurrentPage,
    toggleIsFollowingInProgress,
    unFollowUser
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from '../common/Preloader';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/user-selectors";


type UsersForPageType = {
    users: Array<UsersFromApiType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
    followUser: (userId: string) => void
    unFollowUser: (userId: string) => void
    setCurrentPage: (pageNumber: number) => void
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
        const {currentPage, pageSize } = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        const {currentPage, pageSize } = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> :
                <Users users={this.props.users}
                       follow={this.props.followUser}
                       unFollow={this.props.unFollowUser}
                       followingInProgress={this.props.followingInProgress}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                />}
        </>
    }
}

const mapStateToProps = (store: ReduxStoreType) => {
    return {
        users: getUsers(store),
        pageSize: getPageSize(store),
        totalUsersCount: getTotalUsersCount(store),
        currentPage: getCurrentPage(store),
        isFetching: getIsFetching(store),
        followingInProgress: getFollowingInProgress(store)
    }

}


// compose()() - принимает функции, кот оборачивают нашу комп в обр порядке и саму компоненту(т.е. наша компонента прогоняется от withAuthRedirect до посл connect и возвр HOC с результатом цепочки)
export default compose(withAuthRedirect,
    connect(mapStateToProps, {followUser, unFollowUser, toggleIsFollowingInProgress, setCurrentPage, getUsers: requestUsers})
    )(UsersContainerComponent) as React.ComponentType




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

// export default connect(mapStateToProps,
//     {followUser, unFollowUser, toggleIsFollowingInProgress, setCurrentPage, getUsers})(UsersContainerComponent);