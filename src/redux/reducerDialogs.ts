import {ActionType, DialogsType} from "./store_old_v";

let initalState: DialogsType = {
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

export const reducerDialogs = (state = initalState, action: ActionType) => {

	switch (action.type) {
		case "ADD-MESSAGE-CHAT":
			let newMessage = state.changeMessChat;
			let newId = state.messages.length + 1;
			state.messages.push(
				{id: newId, name: 'Current user', message: newMessage}
			);
			state.changeMessChat = '';
			return state;
		case 'ON-CHANGE-MESS-CHAT':
			if (action.text) {
				state.changeMessChat = action.text;
			}
			return state;
		default:
			return state;
	}

}

// actionCreates -- message chat

export const addMessageChatAC = (): ActionType => ({type: 'ADD-MESSAGE-CHAT'})

export const onChangeMessChatAC = (text: string): ActionType => {
	return {
		type: 'ON-CHANGE-MESS-CHAT',
		text: text
	}
}
