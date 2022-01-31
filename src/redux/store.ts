import {combineReducers, createStore} from "redux";
import {reducerDialogs} from "./reducerDialogs";
import {reducerProfile} from "./reducerProfile";

export type StoreType = {
	getState: () => StateType
	// subscribe: (observe: any) => void
	// dispatch: DispatchType

}


// export type DispatchType ={
// 	dispatch: (action: ActionType) => ActionType
// }

// export type ActionType = {
// 	type: 'ADD-MESSAGE-CHAT' | 'ON-CHANGE-MESS-CHAT' | 'ADD-POST' | 'ON-CHANGE-MESS-POST'
// 	text?: string
// }

export type StateType = {
	dialogsPage: DialogsType
	profilePage: PostType
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

let reducers = combineReducers({
	dialogsPage: reducerDialogs,
	profilePage: reducerProfile
})

export let store = createStore(reducers);