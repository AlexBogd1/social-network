import axios from "axios";
import { UserProfileType } from "../components/Profile/ProfileContainer";
import { saveProfile } from "../redux/profile-reducer";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": 'd77a6d97-4f2e-437e-9116-ca68d9731287'},
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    setUser(userId: string) {
        return instance.get('profile/' + userId).then(response => response.data);
    },

    unFollow(id: string) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },

    follow(id: string) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },

    getProfile(userId: string) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId);
    },



}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get('profile/' + userId);
    },
    getStatus(userId: string){
        return instance.get('profile/status/'+ userId);
    },
    updateStatus(newStatus: string){
        return instance.put('profile/status',{status: newStatus});
    },

    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append('image',photoFile)
        return instance.put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    saveProfile(profile: UserProfileType) {
        return instance.put('profile', profile)
    }

}

export const authAPI = {
    auth() {
        return instance.get(`auth/me`).then(response => response.data);
    },

    login(email: string, password: string, rememberMe: boolean, captchaUrl: string|null = null ){
        return instance.post('auth/login',{email, password, rememberMe, captchaUrl});
    },

    logout(){
        return instance.delete(`auth/login`);
    }
}
export const securityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`);
    },

    
}


