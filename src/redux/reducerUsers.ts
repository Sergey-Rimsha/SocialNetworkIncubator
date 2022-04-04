
export type StateUsersType = {
	items: Array<UserType>
	totalCount: number
	page: PageType
}

export type PageType = {
	userPageSize: number
	currentPage: number
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
	| ReturnType<typeof setCurrentPageAC>


const initialState: StateUsersType = {
	items: [],
	page: {
		userPageSize: 10,
		currentPage: 5,
	},
	totalCount: 1,
};

export const reducerUsers = (state = initialState, action: ActionUsersType) => {

	switch (action.type) {
		case 'FOLLOWED': {
			return {
				...state,
				items: state.items.map(user => {
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
				items: action.usersAC,
				totalCount: action.totalCount,
			}
		}
		case 'SET_CURRENT_PAGE': {
			return {
				...state,
				page: {...state.page, currentPage: action.currentPage}

			}
		}
		default:
			return state

	}

};



// -- actionCreator -- users follow/unFollow


export const setUsersAC = (users: StateUsersType) => {
	return {
		type: 'SET_USERS',
		usersAC: users.items,
		totalCount: users.totalCount,
	} as const
};

export const followedUserAC = (userId: number) => {
	return {
		type: 'FOLLOWED',
		id: userId
	} as const
};

export const setCurrentPageAC = (currentPage: number) => {
	return {
		type: 'SET_CURRENT_PAGE',
		currentPage
	} as const
}