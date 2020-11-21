import React from 'react';
import {connect} from 'react-redux';
import {ReduxStoreType} from "../../redux/redux-store";
import {
    followAC,
    FollowActionType, setCurrentPageAC, SetCurrentPageActionType, SetTotalCountActionType, setTotalUsersCountAC,
    setUsersAC,
    SetUsersActionType, toggleIsFetchingAC, ToggleIsFetchingActionType,
    unfollowAC,
    UnfollowActionType
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import preLoader from '../../images/Preloader.gif'
import Preloader from '../common/Preloader';


type UsersForPageType = {
    users: Array<UsersFromApiType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UsersFromApiType>) => void
    setCurrentPage: (pageNumber:number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
type UsersPhotoApiType = {
    small: string
    large: string
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        })
    }
    render() {

        return  <>
            { this.props.isFetching ? <Preloader/> :
            <Users users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged = {this.onPageChanged}
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
        isFetching: store.usersPage.isFetching
    }

}

const mapDispatchToProps = (dispatch: (action: FollowActionType | UnfollowActionType| SetUsersActionType | SetCurrentPageActionType| SetTotalCountActionType|ToggleIsFetchingActionType) => void) => {
    return {
        follow: (userId: string) => dispatch(followAC(userId)),
        setUsers: (users: Array<UsersFromApiType>) => dispatch(setUsersAC(users)),
        unfollow: (userId: string) => dispatch(unfollowAC(userId)),
        setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCountAC(totalCount)),
        toggleIsFetching: (ifFetching: boolean) => dispatch(toggleIsFetchingAC(ifFetching))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(UsersContainerComponent);