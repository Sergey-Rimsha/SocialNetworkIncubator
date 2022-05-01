import {usersApi} from "../api/api";
import {AppThunkType} from "./store";

export type ProfileStateType = {
	user: UserType
	status: string
	posts: Array<PostType>
	changeMessage: string
}
export type UserType = {
	aboutMe: string | null
	fullName: string
	lookingForAJob: boolean
	lookingForAJobDescription: string | null
	userId: number
	contacts: ContactsType
	photos: PhotosType
}
export type PhotosType = {
	large: string
	small: string
}
export type ContactsType = {
	[key: string]: string
}
export type PostType = {
	id: number
	message: string
	likesCount: number
}

export type ActionProfileType = ReturnType<typeof addPost>
	| ReturnType<typeof onChangeMessPost>
	| ReturnType<typeof setUserProfile>
	| ReturnType<typeof setStatus>

let initialState: ProfileStateType = {
	user: {
		aboutMe: '',
		fullName: '',
		lookingForAJob: true,
		lookingForAJobDescription: '',
		userId: 2,
		photos: {
			large: '',
			small: '',
		},
		contacts: {
			['key']: '',
		},
	},
	status: '',
	posts: [
		{id: 1, message: 'Hi, how are you?', likesCount: 12},
		{id: 2, message: 'It\'s my first post', likesCount: 11},
		{id: 3, message: 'Blabla', likesCount: 11},
		{id: 4, message: 'Dada', likesCount: 11}
	],
	changeMessage: ''
}


export const profileReducer = (state= initialState, action: ActionProfileType ): ProfileStateType => {

	switch (action.type) {
		case "ADD-POST": {
			let stateCopy = {...state, posts: [...state.posts]};
			let mess: string = stateCopy.changeMessage;
			let newId: number = stateCopy.posts.length + 1;
			stateCopy.posts.push(
				{id: newId, message: mess, likesCount: 0}
			);
			stateCopy.changeMessage = "";
			return stateCopy;
		}

		case "ON-CHANGE-MESS-POST": {
			let stateCopy = {...state}
			if (action.text) {
				stateCopy.changeMessage = action.text;
			}
			return stateCopy;
		}
		case "SET_USER_PROFILE": {
			return {
				...state,
				user: action.user,
			}
		}
		case "SET_STATUS": {
			return {
				...state,
				status: action.status
			}
		}


		default:
			return state;
	}

}

// actionCreates -- post


export const addPost = () => ({type: 'ADD-POST'} as const)

export const onChangeMessPost = (text: string) => {
	return {
		type: 'ON-CHANGE-MESS-POST',
		text: text
	} as const
}

export const setUserProfile = (user: UserType) => {
	return {
		type: 'SET_USER_PROFILE',
		user
	} as const
}

export const setStatus = (status: string) => {
	return {
		type: 'SET_STATUS',
		status
	} as const
}

// Thunk

export const setUserProfileTC = (userId: string): AppThunkType => (dispatch) => {
	usersApi.getProfile(userId)
		.then((data) => {
			dispatch(setUserProfile(data))
			return data.userId
		})
		.then((userId) => {
			dispatch(setStatusUserTC(userId))
		})

}

export const setStatusUserTC = (userId: number): AppThunkType => (dispatch) => {
	usersApi.getUserStatus(userId)
		.then((status) => {
			dispatch(setStatus(status))
		})
}