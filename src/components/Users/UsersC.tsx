import React from 'react';
import styles from './Users.module.css'
import {UsersPageType} from "../../redux/users-reducer";
import axios from 'axios'
import userPhoto from '../../images/images.png'

type UsersForPageType = {
    users: Array<UsersFromApiType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UsersFromApiType>) => void
    setCurrentPage: (pageNumber:number) => void
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


class Users extends React.Component<UsersForPageType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            // debugger
            this.props.setUsers(response.data.items);
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

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (<div>
            <div>
                {pages.map(p =>
                    <span
                    key={p}
                    className={this.props.currentPage === p ? styles.selectedPage : ''}
                    onClick = {(e) => {  this.onPageChanged(p); }}
                    >
                    {p}
                </span>)}
            </div>


            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.usersPhoto} src={u.photos.small ? u.photos.small : userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.name}</div>
                        </span>
                        <span>
                            <div>{'Mos'}</div>
                            <div>{'Mins'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>)
    }
}

export default Users;

