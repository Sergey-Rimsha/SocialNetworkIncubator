import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType, store} from "./redux/store";
import {Provider} from "react-redux";


export let rerenderEntireTree = (state: StateType) => {
	return (
		ReactDOM.render(
			<React.StrictMode>
				<Provider store={store}>
					<App
						// state={state}
						// store={store}
						// dispatch={store.dispatch.bind(store)}
					/>
				</Provider>

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
