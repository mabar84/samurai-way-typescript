import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '0088ae57-e9fa-4964-b79a-099d88c982c5'
    }
})
export const usersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 10) => instance.get(`users?page=${currentPage}&count=${pageSize}`),
    followUser: (id: string) => instance.post(`follow/${id}`, {}),
    unfollowUser: (id: string) => instance.delete(`follow/${id}`),
}
export const authAPI = {
    auth: () => instance.get('auth/me')
}
export const profileAPI = {
    getProfile: (userId: number) => instance.get(`profile/${userId}`),
    getStatus: (userId: number) => instance.get(`profile/status/${userId}`),
    updateStatus: (status: string) => instance.put(`profile/status`, {status})
}