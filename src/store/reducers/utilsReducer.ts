import {AppThunkType} from "../store";
import {setAuthLoginTC} from "./authReducer";


export type ActionUtilsType = ReturnType<typeof setIsFetching>
	| ReturnType<typeof initializedSuccess>

type UtilsStateType = {
	isFetching: boolean
	initialized: boolean
}


const initialState: UtilsStateType = {
	isFetching: false,
	initialized: false,
}

export const utilsReducer = (state = initialState, action: ActionUtilsType) => {
	switch (action.type) {
		case "UTILS/TOGGLE_IS_FETCHING": {
			return {
				...state,
				isFetching: action.isFetching,
			}
		}
		case "UTILS/INITIALIZED_SUCCESS": {
			return {
				...state,
				isFetching: action.initialized,
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
};

export const initializedSuccess = (initialized: boolean) => {
	return {
		type: 'UTILS/INITIALIZED_SUCCESS',
		initialized,
	} as const;
}


export const initializeApp = ():AppThunkType => (dispatch) => {

	dispatch(setIsFetching(true));
	const promiseResult = dispatch(setAuthLoginTC());

	Promise.all([promiseResult])
		.then(() => {

			dispatch(initializedSuccess(true));
		})
		.finally(() => {
			dispatch(setIsFetching(false));
		})
}