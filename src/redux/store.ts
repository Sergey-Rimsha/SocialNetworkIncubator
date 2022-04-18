import {combineReducers, createStore} from "redux";
import {reducerDialogs} from "./reducerDialogs";
import {ProfileStateType, reducerProfile} from "./reducerProfile";
import {reducerUsers, StateUsersType} from "./reducerUsers";
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
	dialogsPage: reducerDialogs,
	profilePage: reducerProfile,
	usersPage: reducerUsers,
	auth: authReducer,
})

export let store = createStore(rootStore);