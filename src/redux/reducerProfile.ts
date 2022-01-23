import {ActionType, PostType} from "./store";


export const reducerProfile = (state: PostType, action: ActionType ) => {

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