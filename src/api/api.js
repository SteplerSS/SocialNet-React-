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
        return instance.get(`profile/` + userId);
    }

};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
};

