import {renderApp} from "../render";

type StateType = {
	dialogsPage: DialogsType
	profilePage: PostType
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
type PostType = {
	posts: Array<InPost>
	changeMessage: string
}
type InPost = {
	id: number
	message: string
	likesCount: number
}


export const state: StateType = {
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
			{id: 1, name: 'Sasha', message: 'Hello Dimych'},
			{id: 1, name: 'kiril', message: 'hay'},
			{id: 1, name: 'Dima', message: 'he he he:)'}
		]
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


export const addPost = (mess: string): void => {
	state.profilePage.posts.push(
		{id: 5, message: mess, likesCount: 0}
	)
	state.profilePage.changeMessage = ""
	console.log(state.profilePage.posts);

	renderApp(state);
}

export const onChangeMessagePost = (text: string): void => {
	state.profilePage.changeMessage = text;

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
