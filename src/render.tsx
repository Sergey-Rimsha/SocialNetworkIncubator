import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, onChangeMessagePost} from "./redux/state";

export type AddPostType = (mess: string) => void
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
}
type InPost = {
	id: number
	message: string
	likesCount: number
}




export let renderApp = (state: StateType) => {
	return (
		ReactDOM.render(
			<React.StrictMode>
				<App
					state={state}
					addPost={addPost}
					onChangeMessagePost={onChangeMessagePost}
				/>
			</React.StrictMode>,
			document.getElementById('root')
		)
	)
}
