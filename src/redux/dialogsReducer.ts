
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

export type ActionDialogsType = ReturnType<typeof addMessageChatAC> | ReturnType<typeof onChangeMessChatAC>


let initialState: DialogsType = {
	chatUsers: [
		{id: 1, name: 'Sergey'},
		{id: 2, name: 'Vasa'},
		{id: 3, name: 'Sasha'},
		{id: 4, name: 'Vovan'},
		{id: 5, name: 'kiril'},
		{id: 6, name: 'Dima'},
	],
	messages: [
		{id: 1, name: 'Sergey', message: 'hello world!!!'},
		{id: 2, name: 'Vasa', message: 'it_incubator'},
		{id: 3, name: 'Sasha', message: 'Hello Dimych'},
		{id: 4, name: 'kiril', message: 'hay'},
		{id: 5, name: 'Dima', message: 'he he he:)'}
	],
	changeMessChat: ''
}

export const dialogsReducer = (state = initialState, action: ActionDialogsType) => {

	switch (action.type) {
		case "ADD-MESSAGE-CHAT": {
			let stateCopy = {...state, messages: [...state.messages]};
			let newMessage = stateCopy.changeMessChat;
			let newId = stateCopy.messages.length + 1;
			stateCopy.messages.push(
				{id: newId, name: 'Current user', message: newMessage}
			);
			stateCopy.changeMessChat = '';
			return stateCopy;
		}

		case 'ON-CHANGE-MESS-CHAT': {
			return {
				...state,
				changeMessChat: action.text,
			}
		}

		default:
			return state;
	}

}

// actionCreates -- message chat


export const addMessageChatAC = () => ({type: 'ADD-MESSAGE-CHAT'} as const)

export const onChangeMessChatAC = (text: string) => {
	return {
		type: 'ON-CHANGE-MESS-CHAT',
		text: text
	} as const
}
