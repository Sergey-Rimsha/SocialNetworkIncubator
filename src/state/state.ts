type StateType = {
	dialogs: DialogsType
}

type DialogsType = {
	chatUsers: Array<InUser>
	messages: Array<InMessage>
}

type InUser = {
	id: number
	name: string
}

type InMessage = {
	id: number
	name: string
	message: string
}


export const state: StateType = {
	dialogs: {
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
			{id: 1, name: 'Sasha', message: 'Hello Dimych'},
			{id: 1, name: 'kiril', message: 'hay'},
			{id: 1, name: 'Dima', message: 'he he he:)'}
		]
	}
}