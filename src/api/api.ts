import axios from "axios";


const istance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": 'd77a6d97-4f2e-437e-9116-ca68d9731287'},
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return istance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    setUser(userId: string) {
        return istance.get('profile/' + userId).then(response => response.data)
    },

    unFollow(id: string) {
        return istance.delete(`follow/${id}`)
            .then(response => response.data)
    },

    follow(id: string) {
        return istance.post(`follow/${id}`).then(response => response.data)
    },

    getProfile(userId: string) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    },

    auth() {
        return istance.get(`auth/me`).then(response => response.data)
    }

}

export const profileAPI = {
    getProfile(userId: string) {
        return istance.get('profile/' + userId)
    },
    getStatus(userId: string){
        return istance.get('profile/status/'+ userId)
    },
    updateStatus(newStatus:string){
        return istance.put('profile/status',{status: newStatus})
    }

}

