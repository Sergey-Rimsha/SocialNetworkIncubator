import {AppThunkType} from "./store";
import {usersApi} from "../api/api";

export type AuthInitialStateType = {
	id: number
	email: string
	login: string
	isAuth: boolean
}

const initialState = {
	id: 2,
	email: 'blabla@bla.bla',
	login: 'samurai',
	isAuth: false,
}

export type ActionAuthType = ReturnType<typeof setAuth> | ReturnType<typeof setIsAuthLogin>


export const authReducer = (state:AuthInitialStateType = initialState, action: ActionAuthType): AuthInitialStateType => {

	switch (action.type) {
		case "SET_AUTH": {
			return {
				...state,
				...action.date
			}
		}
		case "SET_IS_AUTH": {
			return {
				...state,
				isAuth: action.isAuth
			}
		}
		default:
			return state
	}
}


export const setAuth = (date: AuthInitialStateType) => {
	return {
		type: 'SET_AUTH',
		date,

	} as const
}

export const setIsAuthLogin = (isAuth: boolean) => {
	return {
		type: 'SET_IS_AUTH',
		isAuth,
	} as const
}


//Thunk

export const setAuthLoginTC = (): AppThunkType => (dispatch) => {

	dispatch(setIsAuthLogin(false));

	usersApi.authLoginMe()
		.then((response) => {
			if (response.data.resultCode === 0) {
				dispatch(setIsAuthLogin(true));
				dispatch(setAuth(response.data.data));
			}
		})
		.catch((e) => {
			dispatch(setIsAuthLogin(false));
			throw new Error(e);
		})
}


