
export type StateUsersType = {
	users: Array<UserType>
}

export type UserType = {
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

export type ActionUsersType = ReturnType<typeof followedUserAC>
	| ReturnType<typeof setUsersAC>


const initialState: StateUsersType = {
	users: []
};

export const reducerUsers = (state = initialState, action: ActionUsersType) => {

	switch (action.type) {
		case 'FOLLOWED': {
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.id) {
						return {...user, followed: !user.followed}
					}
					return user;
				})
			}
		}

		case 'SET_USERS': {
			return {
				...state,
				users: action.usersAC
			}
		}
		default:
			return state

	}

};



// -- actionCreator -- users follow/unFollow


export const setUsersAC = (users: UserType) => {
	return {
		type: 'SET_USERS',
		usersAC: users
	} as const
};

export const followedUserAC = (userId: number) => {
	return {
		type: 'FOLLOWED',
		id: userId
	} as const
};
