
export type StateUsersType = {
	users: Array<UserType>
	userPageSize: number
	currentPage: number
	totalCount: number
	isFetching: boolean

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

export type ActionUsersType = ReturnType<typeof followedUser>
	| ReturnType<typeof addUsers>
	| ReturnType<typeof setCurrentPage>
	| ReturnType<typeof setIsFetching>
	| ReturnType<typeof setTotalCount>


const initialState: StateUsersType = {
	users: [],
	userPageSize: 10,
	currentPage: 1,
	totalCount: 1,
	isFetching: false,
};

export const usersReducer = (state = initialState, action: ActionUsersType):StateUsersType => {
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

		case 'ADD_USERS': {
			return {
				...state,
				users: action.usersAC,
				// totalCount: action.totalCount,
			}
		}
		case 'SET_CURRENT_PAGE': {
			return {
				...state,
				currentPage: action.currentPage
			}

		}
		case 'TOGGLE_IS_FETCHING': {
			return {
				...state,
				isFetching: action.isFetching,
			}
		}
		case "SET_TOTAL_COUNT": {
			return {
				...state,
				totalCount: action.totalCount
			}
		}

		default:
			return state

	}
};



// -- actionCreator -- users follow/unFollow


export const addUsers = (users: Array<UserType>) => {
	return {
		type: 'ADD_USERS',
		usersAC: users,
	} as const
};

export const followedUser = (userId: number) => {
	return {
		type: 'FOLLOWED',
		id: userId,
	} as const
};

export const setCurrentPage = (currentPage: number) => {
	return {
		type: 'SET_CURRENT_PAGE',
		currentPage,
	} as const
}

export const setIsFetching = (isFetching: boolean) => {
	return {
		type: 'TOGGLE_IS_FETCHING',
		isFetching,
	} as const
}

export const setTotalCount = (totalCount: number) => {
	return {
		type: 'SET_TOTAL_COUNT',
		totalCount,
	} as const
}