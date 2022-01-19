export type StoreType = {
	_state: StateType
	getState: () => StateType
	_callSubscriber: (state: StateType) => void
	addPost: () => void
	onChangeMessagePost: (text: string) => void
	addMessageChat: () => void
	onChangeMessChat: (text: string) => void
	subscribe: (observe: any) => void

}
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

export let store: StoreType = {
	_state: {
		dialogsPage: {
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
		},
		profilePage: {
			posts: [
				{id: 1, message: 'Hi, how are you?', likesCount: 12},
				{id: 2, message: 'It\'s my first post', likesCount: 11},
				{id: 3, message: 'Blabla', likesCount: 11},
				{id: 4, message: 'Dada', likesCount: 11}
			],
			changeMessage: ''
		}
	},

	getState() {
		return this._state
	},

	_callSubscriber(state) {
		console.log('render')
	},

	// для добавления постов !!!

	addPost() {
		let mess: string = this._state.profilePage.changeMessage;
		let newId: number = this._state.profilePage.posts.length + 1;
		this._state.profilePage.posts.push(
			{id: newId, message: mess, likesCount: 0}
		)
		this._state.profilePage.changeMessage = ""
		console.log(this._state.profilePage.posts);

		this._callSubscriber(this._state);
	},

	onChangeMessagePost(text) {
		this._state.profilePage.changeMessage = text;
		this._callSubscriber(this._state);
	},

	// для добовления new Message в чате !!!!

	addMessageChat() {
		let newMessage = this._state.dialogsPage.changeMessChat;
		let newId = this._state.dialogsPage.messages.length + 1;

		this._state.dialogsPage.messages.push(
			{id: newId, name: 'Current user', message: newMessage}
		);

		this._state.dialogsPage.changeMessChat = '';
		this._callSubscriber(this._state);

	},

	onChangeMessChat(text) {
		this._state.dialogsPage.changeMessChat = text;

		this._callSubscriber(this._state);
	},


	subscribe(observe) {
		this._callSubscriber = observe;
	}

}

///-------------------------------------------------------------------------------------------------------




// типизация функций --->> пример

// type Q = void
//
// const q = (): Q => {
// 	console.log(1)
// }
//
// const qq = (a: string): void => {
// 	console.log(a)
// }
//
// const qqq = (a: string): string => {
// 	console.log(a)
//
// 	return a;
// }
