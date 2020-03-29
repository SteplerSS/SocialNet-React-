import * as axios from 'axios';


const instance = axios.create({

    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "c08000d0-049c-440f-a315-6eca20a702c9"
    },

});

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 50) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => response.data);
    },

    unfollow(userId) {

        return instance.delete(`follow/${userId}`)
    },

    follow(userId) {

        return instance.post(`follow/${userId}`)

    },

    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object')
        return  profileAPI.getProfile(userId) ;
    },

    getStatus(userId){
        return instance.get(`profile/status/`+ userId);
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status: status });
    },
    

};


export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/` + userId);
    }

};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },

    login(email, password, rememberMe=false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },

    logout() {
        return instance.delete(`auth/login`);
    },
};

