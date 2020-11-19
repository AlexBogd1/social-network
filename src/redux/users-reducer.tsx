import {UsersFromApiType} from "../components/Users/Users";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

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
export type SetCurrentPageActionType = {
    type: "SET_CURRENT_PAGE"
    pageNumber: number
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
export const setCurrentPageAC = (pageNumber: number): SetCurrentPageActionType => {
    return {
        type: SET_CURRENT_PAGE,
        pageNumber
    }
}

export type UsersPageType = {
    users: Array<UsersFromApiType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

let initialState: UsersPageType = {
    users: [ ],
    pageSize: 4,
    totalUsersCount: 21,
    currentPage: 1
}

const usersReducer =
    (state = initialState, action: FollowActionType | UnfollowActionType| SetUsersActionType| SetCurrentPageActionType) => {
        switch (action.type) {
            case FOLLOW:
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
                return {...state, users: [...action.users]}

            case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            }
            default:
                return state
        }
    }
export default usersReducer;