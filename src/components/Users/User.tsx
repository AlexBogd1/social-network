import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../images/images.png'
import {NavLink} from 'react-router-dom';
import {UsersFromApiType} from './UsersContainer'



type UserComponentType = UsersFromApiType & {followingInProgress: string[], follow: (userId: string) => void, unFollow: (userId: string) => void}

const User = (props:UserComponentType )=> {
    
    return (
        
      
       <div key={props.id}>
                    <span>
                        <NavLink to = {'/profile/' + props.id}>
                        <div>
                            <img alt ={'users'} className={styles.usersPhoto} src={props.photos.small ? props.photos.small : userPhoto}/>
                        </div>
                    </NavLink>

                        <div>
                            {props.followed
                                ? <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() =>{
                                   props.unFollow(props.id);
                                }
                                }>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => {
                                    props.follow(props.id)
                                }}>Follow</button>}

                        </div>
                    </span>
                <span>
                        <span>
                            <div>{props.name}</div>
                            <div>{props.name}</div>
                        </span>
                        <span>
                            <div>{'Mos'}</div>
                            <div>{'Mins'}</div>
                        </span>
                    </span>
            </div>)
    
}

export default User;

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