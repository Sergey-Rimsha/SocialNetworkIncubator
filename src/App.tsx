import React from 'react';

import './scss/style.scss';
import {Routing} from "./components/Routing/Routing";
import {store} from "./store/store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const App = () => {

	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="App">
					<Routing/>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;