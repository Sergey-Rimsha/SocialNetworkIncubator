import axios from "axios";

// const axios = require('axios');

const instance = axios.create ({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers:     {
		"API-KEY": "31e5f258-a64c-4753-8a60-acee980643ae"
	}
})


export const usersApi = {
	usersPage(currentPage: number, userPageSize: number) {
	    return instance.get(`users?page=${currentPage}&count=${userPageSize}`)
			.then((response) => {
				// console.log(response.data)
				return response;

			})
	},
	followUser(userId: number) {
		return instance.post(`follow/${userId}`)
			.then((response) => {
				if (response.data.resultCode === 0) {
					// console.log(response.data)
				}
			})
	},
	unFollowUser(userId: number) {
		return instance.delete(`follow/${userId}`)
			.then((response) => {
				if (response.data.resultCode === 0) {
					// console.log(response.data)
				}
			})
	},

	getProfile(userId: string) {
		return instance.get(`profile/${userId}`)
			.then((response) => {
				return response.data;
			})
	},

	authLoginMe() {
		return instance.get(`auth/me`)
			.then((response) => {
				return response;
			})
	},

	getUserStatus(userId: number) {
		return instance.get(`/profile/status/${userId}`)
			.then((res) => {
				return res.data
			})
	}

}