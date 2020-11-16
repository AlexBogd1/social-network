import React from 'react';
import styles from './Users.module.css'
import {UsersPageType} from "../../redux/users-reducer";
import axios from 'axios'
import userPhoto from '../../images/images.png'

type UsersForPageType = {
    users: UsersPageType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UsersFromApiType>) => void
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

    getUsers = () => {
        if (this.props.users.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                // debugger
                this.props.setUsers(response.data.items);
            })
        }
    }


    render () {
        return (<div>
            <button onClick={this.getUsers}>Get Users</button>
            {
                this.props.users.users.map(u => <div key={u.id}>
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