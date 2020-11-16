import {UsersFromApiType} from "../components/Users/Users";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export type FollowActionType = {
    type: 'FOLLOW'
    userId: string
}
export type UnfollowActionType = {
    type: 'UNFOLLOW'
    userId: string
}
export type SetUsersActionType = {
    type: "SET_USERS"
    users: Array<UsersFromApiType>
}


export const followAC = (userId: string): FollowActionType => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollowAC = (userId: string): UnfollowActionType => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersAC = (users: Array<UsersFromApiType>): SetUsersActionType => {
    return {
        type: SET_USERS,
        users
    }
}

export type UsersPageType = {
    users: Array<UsersFromApiType>
}
// export type UsersType = {
//     id: number
//     photoUrl: string
//     fallowed: boolean
//     fullName: string
//     status: string
//     location: LocationType
// }
// type LocationType = {
//     city: string
//     country: string
// }

let initialState: UsersPageType = {
    users: [ ],
}

const usersReducer =
    (state = initialState, action: FollowActionType | UnfollowActionType| SetUsersActionType) => {
        switch (action.type) {
            case FOLLOW:
                debugger
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u;
                    })
                }
                break
            case UNFOLLOW:
                debugger
                return {
                    ...state,
                    users: state.users.map(u => {
                        debugger
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u;
                    })
                }
                break
            case SET_USERS:
                return {...state, users: [...state.users, ...action.users]}
            default:
                return state
        }
    }
export default usersReducer;