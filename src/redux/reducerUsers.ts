
export type StateUsersType = {
	users: Array<UserType>
}

export type UserType = {
	id: number
	name: string
	status: string | null
	country: string
	city: string
	follow: boolean
}

export type ActionUsersType = ReturnType<typeof followUsersAC>
	| ReturnType<typeof unFollowUserAC>
	| ReturnType<typeof addUsersAC>

// const initialState: StateUsersType = {
// 	users: [
// 		{id: 1, name: 'Sergey', status: 'Hello', country:'Belarus', city:'Borisov', follow: false},
// 		{id: 2, name: 'Gena', status: 'Hello men', country:'Belarus', city:'Minsk', follow: false},
// 		{id: 3, name: 'Sasha', status: 'Hello gays', country:'Ukraine', city:'Kiev', follow: true},
// 		{id: 4, name: 'Misha', status: 'Yo Yo Yo', country:'Belarus', city:'Borisov', follow: false},
// 	]
// };

const initialState: StateUsersType = {
	users: []
};

export const reducerUsers = (state = initialState, action: ActionUsersType) => {

	switch (action.type) {
		case 'FOLLOW': {
			return {
				...state,
				...state.users.map(u => {
					if (u.id === action.id) {
						u.follow = true
					}
					return u
				})
			}
		}
		case 'UNFOLLOW': {
			return {
				...state,
				...state.users.map(u => {
					if (u.id === action.id) {
						u.follow = false
					}
					return u
				})
			}
		}
		case 'ADD_USERS': {

			return {
				users: action.usersAC
			}
		}
		default:
			return state

	}

};



// -- actionCreator -- users follow/unFollow

export const followUsersAC = (userId: number) => {
	return {
		type: 'FOLLOW',
		id: userId
	} as const
};

export const unFollowUserAC = (userId: number) => {
	return {
		type: 'UNFOLLOW',
		id: userId
	} as const
};

export type UsersGetType = {
	users: Array<UserGetType>
}

export type UserGetType = {
	followed: boolean
	name: string
	id: number
	photos: {
		large: null | string
		small: null | string
	}
	status: null | string
	uniqueUrlName: null | string
}

export const addUsersAC = (users: UserGetType) => {
	return {
		type: 'ADD_USERS',
		usersAC: users
	} as const
}