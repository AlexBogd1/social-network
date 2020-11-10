import React from 'react';
import styles from './Users.module.css'
import {UsersPageType} from "../../redux/users-reducer";

type UsersType = {
    users: UsersPageType
}

const Users = (props: UsersType) => {
    return (
        <div>
            {
                props.users.users.map(u => <div key = {u.id}>
                    <span>
                        <div>
                            <img className ={styles.usersPhoto} src ={u.photoUrl} />
                        </div>
                        <div>
                            <button>Follow</button>
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