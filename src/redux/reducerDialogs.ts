import {ActionType, DialogsType} from "./store";


export const reducerDialogs = (state: DialogsType, action: ActionType) => {

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
