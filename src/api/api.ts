import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '0088ae57-e9fa-4964-b79a-099d88c982c5'
    }
})

export const usersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 10) => instance.get(`users?page=${currentPage}&count=${pageSize}`)
}
