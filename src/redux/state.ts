type StateType = {
	dialogsPage: DialogsType
	profilePage: PostType
}
type DialogsType = {
	chatUsers: Array<InUser>
	messages: Array<InMessage>
	changeMessChat: string
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
type PostType = {
	posts: Array<InPost>
	changeMessage: string
}
type InPost = {
	id: number
	message: string
	likesCount: number
}

let rerenderEntireTree = (state:StateType) => {
	console.log('render')
}

export let state: StateType = {
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
}

// для добавления постов !!!

export const addPost = (): void => {
	let mess: string = state.profilePage.changeMessage;
	let newId: number = state.profilePage.posts.length + 1;
	state.profilePage.posts.push(
		{id: newId, message: mess, likesCount: 0}
	)
	state.profilePage.changeMessage = ""
	console.log(state.profilePage.posts);

	rerenderEntireTree(state);
}

export const onChangeMessagePost = (text: string): void => {
	state.profilePage.changeMessage = text;
	rerenderEntireTree(state);
}

// для добовления new Message в чате !!!!

export const addMessageChat = (): void => {
	let newMessage = state.dialogsPage.changeMessChat;
	let newId = state.dialogsPage.messages.length + 1;

	state.dialogsPage.messages.push(
		{id: newId, name: 'Current user', message: newMessage}
	);

	state.dialogsPage.changeMessChat = '';
	rerenderEntireTree(state);

}

export const onChangeMessChat = (text: string): void => {
	state.dialogsPage.changeMessChat = text;

	rerenderEntireTree(state);
}


export const subscribe = (observe: any) => {
	rerenderEntireTree = observe;
}




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
