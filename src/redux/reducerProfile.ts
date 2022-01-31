import {PostType} from "./store";



export type ActionProfileType = ReturnType<typeof addPostAC> | ReturnType<typeof onChangeMessPostAC>

let initialState: PostType = {
	posts: [
		{id: 1, message: 'Hi, how are you?', likesCount: 12},
		{id: 2, message: 'It\'s my first post', likesCount: 11},
		{id: 3, message: 'Blabla', likesCount: 11},
		{id: 4, message: 'Dada', likesCount: 11}
	],
	changeMessage: ''
}


export const reducerProfile = (state= initialState, action: ActionProfileType ) => {

	switch (action.type) {
		case "ADD-POST": {
			let stateCopy = {...state};
			stateCopy.posts = [...state.posts]
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

		default:
			return state;
	}

}

// actionCreates -- post


export const addPostAC = () => ({type: 'ADD-POST'} as const)

export const onChangeMessPostAC = (text: string) => {
	return {
		type: 'ON-CHANGE-MESS-POST',
		text: text
	} as const
}