import React from 'react';
import {connect} from 'react-redux';
import {ReduxStoreType} from "../../redux/redux-store";
import {
    followAC,
    FollowActionType, setCurrentPageAC, SetCurrentPageActionType, SetTotalCountActionType, setTotalUsersCountAC,
    setUsersAC,
    SetUsersActionType,
    unfollowAC,
    UnfollowActionType
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";


type UsersForPageType = {
    users: Array<UsersFromApiType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UsersFromApiType>) => void
    setCurrentPage: (pageNumber:number) => void
    setTotalUsersCount: (totalCount: number) => void
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            // debugger
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            // debugger
            this.props.setUsers(response.data.items);
        })
    }
    render() {



        return <Users users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged = {this.onPageChanged}
        />
    }
}

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


export default connect(mapStateToProps,mapDispatchToProps)(UsersContainerComponent);