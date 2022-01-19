import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType, store} from "./redux/state";

export type AddPostType = () => void

export let rerenderEntireTree = (state: StateType) => {
	return (
		ReactDOM.render(
			<React.StrictMode>
				<App
					state={state}
					addPost={store.addPost.bind(store)}
					onChangeMessagePost={store.onChangeMessagePost.bind(store)}
					addMessageChat={store.addMessageChat.bind(store)}
					onChangeMessChat={store.onChangeMessChat.bind(store)}
				/>
			</React.StrictMode>,
			document.getElementById('root')
		)
	)
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
