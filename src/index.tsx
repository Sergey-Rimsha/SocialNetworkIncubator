import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType, store} from "./redux/state";


export let rerenderEntireTree = (state: StateType) => {
	return (
		ReactDOM.render(
			<React.StrictMode>
				<App
					state={state}
					dispatch={store.dispatch.bind(store)}
				/>
			</React.StrictMode>,
			document.getElementById('root')
		)
	)
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
