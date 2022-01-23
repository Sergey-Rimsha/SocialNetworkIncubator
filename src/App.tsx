import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

import './scss/style.scss';

import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";

import {ActionType, StateType} from "./redux/store_old_v";

type RootStateType = {
	state: StateType
	dispatch: (action: ActionType) => void
}


const App: React.FC<RootStateType> = (props) => {
	return (
		<Router>
			<div className="App">
				<Header />
				<div className="page">
					<div className="container">
						<Sidebar />
						<div className="content">
							<Routes>
								<Route
									path={`/profile`}
									element={
										<Profile
											profilePage={props.state.profilePage}
											// addPost={props.addPost}
											// onChangeMessagePost={props.onChangeMessagePost}
											dispatch={props.dispatch}
									/>}
								/>
								<Route
									path={`/dialogs`}
									element={
										<Dialogs
											dialogsPage={props.state.dialogsPage}
											dispatch={props.dispatch}
										/>}
								/>
							</Routes>
						</div>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;