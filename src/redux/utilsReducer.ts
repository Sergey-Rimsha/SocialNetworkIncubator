

export type ActionUtilsType = ReturnType<typeof setIsFetching>


const initialState = {
	isFetching: false
}

export const utilsReducer = (state = initialState, action: ActionUtilsType) => {
	switch (action.type) {
		case "UTILS/TOGGLE_IS_FETCHING": {
			return {
				...state,
				isFetching: action.isFetching
			}
		}

		default: return state
	}
}

export const setIsFetching = (isFetching: boolean) => {
	return {
		type: 'UTILS/TOGGLE_IS_FETCHING',
		isFetching,
	} as const
}