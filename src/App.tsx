import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

import './scss/style.scss';

import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {UsersPageContainer} from "./components/UsersPage/UsersPageContainer";

const asdas = 'asd';

const App = () => {
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
										<ProfileContainer
											// store={props.store}
										/>}
								/>
								<Route
									path={`/dialogs`}
									element={
										<DialogsContainer
											// store={props.store}
										/>}
								/>
								<Route
									path={`/users`}
									element={
										<UsersPageContainer
											// store={props.store}
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