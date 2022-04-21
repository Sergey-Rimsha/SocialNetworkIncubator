import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {ProfileStateType, profileReducer} from "./profileReducer";
import {usersReducer, StateUsersType} from "./usersReducer";
import {AuthInitialStateType, authReducer} from "./authReducer";

export type StateType = {
	dialogsPage: DialogsType
	profilePage: ProfileStateType
	usersPage: StateUsersType
	auth: AuthInitialStateType
}
export type DialogsType = {
	chatUsers: Array<InUser>
	messages: Array<InMessage>
	changeMessChat: string
}
export type InUser = {
	id: number
	name: string
}
export type InMessage = {
	id: number
	name: string
	message: string
}
export type PostType = {
	posts: Array<InPost>
	changeMessage: string
}
export type InPost = {
	id: number
	message: string
	likesCount: number
}


export type StoreDispatchType = typeof store.dispatch

let rootStore = combineReducers({
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	usersPage: usersReducer,
	auth: authReducer,
})

export let store = createStore(rootStore);