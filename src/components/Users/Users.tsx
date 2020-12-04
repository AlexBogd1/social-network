import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../images/images.png'
import {NavLink} from 'react-router-dom';
import {usersAPI} from "../../api/api";

type UsersForPageType = {
    users: Array<UsersFromApiType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: string[]
    onPageChanged:(page: number) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
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

const Users = (props: UsersForPageType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div>
        <div>
            {pages.map(p =>
                <span
                    key={p}
                    className={props.currentPage === p ? styles.selectedPage : ''}
                    onClick = {(e) => {  props.onPageChanged(p); }}
                >
                    {p}
                </span>)}
        </div>


        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <NavLink to = {'/profile/' + u.id}>
                        <div>
                            <img className={styles.usersPhoto} src={u.photos.small ? u.photos.small : userPhoto}/>
                        </div>
                    </NavLink>

                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() =>{
                                   props.unfollow(u.id);
                                }
                                }>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id == u.id)} onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}

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

export default Users;

// [ {
//     id: 1,
//     photoUrl: 'https://daks2k3a4ib2z.cloudfront.net/56cf5dcdd3b4fc4579d08bef/56cf5dced3b4fc4579d08bf8_BomberMario-icon-300x300.jpg',
//     fallowed: true,
//     fullName: 'Dmitry',
//     status: 'I am a boss',
//     location: {city: 'Minsk', country: 'Belarus'}
// },
//     {
//         id: 2,
//         photoUrl: 'https://daks2k3a4ib2z.cloudfront.net/56cf5dcdd3b4fc4579d08bef/56cf5dced3b4fc4579d08bf8_BomberMario-icon-300x300.jpg',
//         fallowed: false,
//         fullName: 'Alex',
//         status: 'I am a boss',
//         location: {city: 'Moscow', country: 'Russia'}
//     },
//     {
//         id: 3,
//         photoUrl: 'https://daks2k3a4ib2z.cloudfront.net/56cf5dcdd3b4fc4579d08bef/56cf5dced3b4fc4579d08bf8_BomberMario-icon-300x300.jpg',
//         fallowed: true,
//         fullName: 'Andrew',
//         status: 'I am a boss',
//         location: {city: 'Kiev', country: 'Ukraine'}
//     },]