import {ReduxStoreType} from "./redux-store";
import {UsersFromApiType} from "../components/Users/Users";

export const getUsers = (store: ReduxStoreType): Array<UsersFromApiType> => {
    return store.usersPage.users
}
export const getPageSize = (store: ReduxStoreType): number => {
    return store.usersPage.pageSize
}

export const getTotalUsersCount = (store: ReduxStoreType): number => {
    return store.usersPage.totalUsersCount
}
export const getCurrentPage = (store: ReduxStoreType): number => {
    return store.usersPage.currentPage
}
export const getIsFetching = (store: ReduxStoreType): boolean => {
    return store.usersPage.isFetching
}
export const getFollowingInProgress = (store: ReduxStoreType): string[] => {
    return store.usersPage.followingInProgress
}
