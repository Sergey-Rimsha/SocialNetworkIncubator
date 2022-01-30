import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType, store} from "./redux/store";


export let rerenderEntireTree = (state: StateType) => {
	return (
		ReactDOM.render(
			<React.StrictMode>
				<App
					// state={state}
					store={store}
					// dispatch={store.dispatch.bind(store)}
				/>
			</React.StrictMode>,
			document.getElementById('root')
		)
	)
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
	let state = store.getState();
	rerenderEntireTree(state);
});
