import {AppThunkType} from "./store";
import {authApi, AuthDataType} from "../api/api";
import {setIsFetching} from "./utilsReducer";

export type AuthInitialStateType = {
	id: number | null
	email: string | null
	login: string | null
	isAuth: boolean
}

const initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
}

export type ActionAuthType = ReturnType<typeof setAuth> | ReturnType<typeof setIsAuthLogin>


export const authReducer = (state:AuthInitialStateType = initialState, action: ActionAuthType): AuthInitialStateType => {

	switch (action.type) {
		case "SET_AUTH": {
			return {
				...state,
				...action.data
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


type SetAuthDataType = {
	id: number
	email: string
	login: string
}

export const setAuth = (data: SetAuthDataType) => {
	return {
		type: 'SET_AUTH',
		data,
	} as const
}

export const setIsAuthLogin = (isAuth: boolean) => {
	return {
		type: 'SET_IS_AUTH',
		isAuth,
	} as const
}


//Thunk creators

export const setAuthLoginTC = (): AppThunkType => (dispatch) => {

	dispatch(setIsAuthLogin(false));
	dispatch(setIsFetching(true));

	authApi.authLoginMe()
		.then((data) => {
			if (data.resultCode === 0) {
				dispatch(setIsAuthLogin(true));
				dispatch(setAuth(data.data));
			}
		})
		.catch((e) => {
			dispatch(setIsAuthLogin(false));
			throw new Error(e);
		})
		.finally(() => {
			dispatch(setIsFetching(false));
		})
}


export const authLoginTC = (data: AuthDataType): AppThunkType => (dispatch) => {
	dispatch(setIsFetching(true));
	authApi.authLogin(data)
		.then((res) => {
			if (res.data.resultCode === 0) {
				dispatch(setAuthLoginTC())
				dispatch(setIsFetching(false));
			}
		})
}

export const authLogout = (): AppThunkType => (dispatch) => {
	dispatch(setIsFetching(true));
	authApi.authLogout()
		.then(res => {
			if (res.data.resultCode === 0) {
				dispatch(setIsFetching(false));
				dispatch(setIsAuthLogin(false))
			}
		})
}
