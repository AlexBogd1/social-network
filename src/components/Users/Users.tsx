import React from 'react';
import styles from './Users.module.css'
import {setUsersAC, UsersPageType, UsersType} from "../../redux/users-reducer";
import axios from 'axios'

type UsersForPageType = {
    users: UsersPageType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}

const Users = (props: UsersForPageType) => {

if(props.users.users.length === 0) {
    props.setUsers([ {
        id: 1,
        photoUrl: 'https://daks2k3a4ib2z.cloudfront.net/56cf5dcdd3b4fc4579d08bef/56cf5dced3b4fc4579d08bf8_BomberMario-icon-300x300.jpg',
        fallowed: true,
        fullName: 'Dmitry',
        status: 'I am a boss',
        location: {city: 'Minsk', country: 'Belarus'}
    },
        {
            id: 2,
            photoUrl: 'https://daks2k3a4ib2z.cloudfront.net/56cf5dcdd3b4fc4579d08bef/56cf5dced3b4fc4579d08bf8_BomberMario-icon-300x300.jpg',
            fallowed: false,
            fullName: 'Alex',
            status: 'I am a boss',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://daks2k3a4ib2z.cloudfront.net/56cf5dcdd3b4fc4579d08bef/56cf5dced3b4fc4579d08bf8_BomberMario-icon-300x300.jpg',
            fallowed: true,
            fullName: 'Andrew',
            status: 'I am a boss',
            location: {city: 'Kiev', country: 'Ukraine'}
        },])
}

    // axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    //     props.setUsers(response.data.items);
    // })

    return (
        <div>
            {
                props.users.users.map(u => <div key = {u.id}>
                    <span>
                        <div>
                            <img className ={styles.usersPhoto} src ={u.photoUrl} />
                        </div>
                        <div>
                            {u.fallowed
                                ? <button onClick={() => props.unfollow(u.id)} >Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button> }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;