import {UsersFromApiType} from "../components/Users/Users";
import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE_IS_FOLLOWING_IN_PROGRESS";

export type FollowActionType = {
    type: typeof FOLLOW
    userId: string
}
export type UnfollowActionType = {
    type: typeof UNFOLLOW
    userId: string
}
export type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UsersFromApiType>
}
export type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    pageNumber: number
}
export type SetTotalCountActionType = {
    type: typeof SET_TOTAL_COUNT
    totalUsersCount: number
}
export type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export type ToggleIsFollowingInProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_IN_PROGRESS
    isFetching: boolean
    userId: string
}


export const follow = (userId: string): FollowActionType => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollow = (userId: string): UnfollowActionType => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsers = (users: Array<UsersFromApiType>): SetUsersActionType => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPage = (pageNumber: number): SetCurrentPageActionType => {
    return {
        type: SET_CURRENT_PAGE,
        pageNumber
    }
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalCountActionType => {
    return {
        type: SET_TOTAL_COUNT,
        totalUsersCount
    }
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
export const toggleIsFollowingInProgress = (isFetching: boolean,userId: string): ToggleIsFollowingInProgressActionType => {
    return {
        type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
        isFetching,
        userId
    }
}

export const getUsers = (currentPage: number, pageSize: number) => (dispatch:(action:ActionsType)=> void) =>{
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    })
}
export const followUser = (userId: string) => (dispatch:(action:ActionsType)=> void) => {
    dispatch(toggleIsFollowingInProgress(true, userId));

    usersAPI.follow(userId).then(data => {
        if(data.resultCode == 0) {
            dispatch(follow(userId))
        }
        dispatch(toggleIsFollowingInProgress(false, userId))
    })
}
export const unFollowUser = (userId: string) => (dispatch:(action:ActionsType)=> void) => {
    dispatch(toggleIsFollowingInProgress(true, userId));

    usersAPI.unFollow(userId).then(data => {
        if(data.resultCode == 0) {
            dispatch(unfollow(userId))
        }
        dispatch(toggleIsFollowingInProgress(false, userId))
    })
}

type ActionsType = FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalCountActionType
    | ToggleIsFetchingActionType
    | ToggleIsFollowingInProgressActionType

export type UsersPageType = {
    users: Array<UsersFromApiType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}

let initialState: UsersPageType = {
    users: [ ],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer =
    (state = initialState, action: ActionsType) => {
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

            case SET_TOTAL_COUNT:
                return {
                    ...state,
                    totalUsersCount: action.totalUsersCount
                }

            case TOGGLE_IS_FETCHING:
                return {...state, isFetching: action.isFetching}

            case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
                return {
                    ...state,
                    followingInProgress:
                        action.isFetching ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id != action.userId)
                }
            default:
                return state
        }
    }
export default usersReducer;