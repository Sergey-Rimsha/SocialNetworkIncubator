import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state, addMessageChat, addPost, onChangeMessagePost, onChangeMessChat, subscribe} from "./redux/state";

export type AddPostType = () => void

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




export let rerenderEntireTree = (state: StateType) => {
	return (
		ReactDOM.render(
			<React.StrictMode>
				<App
					state={state}
					addPost={addPost}
					onChangeMessagePost={onChangeMessagePost}
					addMessageChat={addMessageChat}
					onChangeMessChat={onChangeMessChat}
				/>
			</React.StrictMode>,
			document.getElementById('root')
		)
	)
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
