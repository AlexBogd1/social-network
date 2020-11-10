const FOLLOW = 'FOLLOW';
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export type FollowActionType = {
    type: 'FOLLOW'
    userId: number
}
export type UnfollowActionType = {
    type: 'UNFOLLOW'
    userId: number
}
export type SetUsersActionType = {
    type: "SET_USERS"
    users: UsersPageType
}


export const followAC = (userId: number): FollowActionType => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollowAC = (userId: number): UnfollowActionType => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersAC = (users: UsersPageType): SetUsersActionType => {
    return {
        type: SET_USERS,
        users
    }
}

export type UsersPageType = {
    users: Array<UsersType>
}
export type UsersType = {
    id: number
    fallowed: boolean
    fullName: string
    status: string
    location: LocationType
}
type LocationType = {
    city: string
    country: string
}

let initialState: UsersPageType = {
    users: [
        {
            id: 1,
            fallowed: true,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            fallowed: false,
            fullName: 'Alex',
            status: 'I am a boss',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            fallowed: true,
            fullName: 'Andrew',
            status: 'I am a boss',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
    ],
}

const usersReducer =
    (state = initialState, action: FollowActionType | UnfollowActionType| SetUsersActionType) => {
        switch (action.type) {
            case FOLLOW:
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, fallowed: true}
                        }
                        return u;
                    })
                }
                break
            case UNFOLLOW:
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, fallowed: false}
                        }
                        return u;
                    })
                }
                break
            case SET_USERS:
                return {...state, users: [...state.users, ...action.users.users]}
            default:
                return state
        }
    }
export default usersReducer;