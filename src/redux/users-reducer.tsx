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
    users: Array<UsersType>
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
export const setUsersAC = (users: Array<UsersType>): SetUsersActionType => {
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
    photoUrl: string
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
    users: [ ],
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
                return {...state, users: [...state.users, ...action.users]}
            default:
                return state
        }
    }
export default usersReducer;