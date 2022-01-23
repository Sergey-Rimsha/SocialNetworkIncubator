import {ActionType, PostType} from "./store";


let initialState: PostType = {
	posts: [
		{id: 1, message: 'Hi, how are you?', likesCount: 12},
		{id: 2, message: 'It\'s my first post', likesCount: 11},
		{id: 3, message: 'Blabla', likesCount: 11},
		{id: 4, message: 'Dada', likesCount: 11}
	],
	changeMessage: ''
}


export const reducerProfile = (state= initialState, action: ActionType ) => {

	switch (action.type) {
		case "ADD-POST":
			let mess: string = state.changeMessage;
			let newId: number = state.posts.length + 1;
			state.posts.push(
				{id: newId, message: mess, likesCount: 0}
			);
			state.changeMessage = "";
			return state;
		case "ON-CHANGE-MESS-POST":
			if (action.text) {
				state.changeMessage = action.text;
			}
			return state;
		default:
			return state;
	}

}

// actionCreates -- post

export const addPostAC = (): ActionType => ({type: 'ADD-POST'})

export const onChangeMessPostAC = (text: string): ActionType => {
	return {
		type: 'ON-CHANGE-MESS-POST',
		text: text
	}
}