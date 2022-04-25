import {usersApi} from "../api/api";
import {AppThunkType} from "./store";

export type StateUsersType = {
	users: Array<UserType>
	userPageSize: number
	currentPage: number
	totalCount: number
	isFetching: boolean
	toggleIsButtons: ToggleIsButtonsType
}

export type ToggleIsButtonsType = {
	userId: number
	disableButton: boolean
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
	| ReturnType<typeof toggleIsButtons>


const initialState: StateUsersType = {
	users: [],
	userPageSize: 10,
	currentPage: 1,
	totalCount: 1,
	isFetching: false,
	toggleIsButtons: {
		userId: 1,
		disableButton: false
	}


};

export const usersReducer = (state = initialState, action: ActionUsersType): StateUsersType => {
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
		case 'SET_TOTAL_COUNT': {
			return {
				...state,
				totalCount: action.totalCount
			}
		}
		case "TOGGLE_IS_BUTTONS": {
			return {
				...state,
				toggleIsButtons: {
					...state.toggleIsButtons,
					userId: action.userId,
					disableButton: action.isToggle
				}
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

export const toggleIsButtons = (userId: number, isToggle: boolean) => {
	return {
		type: 'TOGGLE_IS_BUTTONS',
		userId,
		isToggle
	} as const
}

// thunk Creators

export const thunkOnPageChanged = (pageNumber: number, userPageSize: number): AppThunkType => (dispatch) => {

	dispatch(setIsFetching(true));
	dispatch(setCurrentPage(pageNumber));

	usersApi.usersPage(pageNumber, userPageSize)
		.then((response) => {
			dispatch(addUsers(response.data.items));
			dispatch(setTotalCount(response.data.totalCount));
			dispatch(setIsFetching(false));
		});
}

export const followUsersTC = (userId: number, currentPage: number, userPageSize: number): AppThunkType => (dispatch) => {
	dispatch(toggleIsButtons(userId, true));
	usersApi.followUser(userId)
		.then(() => {
			dispatch(toggleIsButtons(userId, false));
			dispatch(thunkOnPageChanged(currentPage, userPageSize));
		})
}
export const unFollowUsersTC = (userId: number, currentPage: number, userPageSize: number): AppThunkType => (dispatch) => {
	dispatch(toggleIsButtons(userId, true));
	usersApi.unFollowUser(userId)
		.then(() => {
			dispatch(toggleIsButtons(userId, false));
			dispatch(thunkOnPageChanged(currentPage, userPageSize));
		})

}