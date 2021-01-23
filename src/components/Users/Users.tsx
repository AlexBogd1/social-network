import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../images/images.png'
import {NavLink} from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator'
import User from './User'


type UsersForPageType = {
    users: Array<UsersFromApiType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: string[]
    onPageChanged:(page: number) => void
    follow: (userId: string) => void
    unFollow: (userId: string) => void
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
    
    return (<div>
        
        <Paginator currentPage={props.currentPage} pageSize={props.pageSize} totalUsersCount={props.totalUsersCount} onPageChanged={props.onPageChanged} />
        {
            props.users.map(u => <User key={u.id} name={u.name} id={u.id} photos={u.photos} followed={u.followed} follow={props.follow} unFollow={props.unFollow} followingInProgress={props.followingInProgress} />)
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