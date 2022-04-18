import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './scss/style.scss';
import {Sidebar} from "./components/Sidebar/Sidebar";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {UsersPageContainer} from "./components/UsersPage/UsersPageContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";

const App = () => {
	return (
		<Router>
			<div className="App">
				<HeaderContainer />
				<div className="page">
					<div className="container">
						<Sidebar />
						<div className="content">
							<Routes>
								<Route
									path={`/profile`}
									element={<ProfileContainer/>}
								>
									<Route path={`:userId`} element={<ProfileContainer/>}/>
								</Route>
								<Route
									path={`/dialogs`}
									element={
										<DialogsContainer/>}
								/>
								<Route
									path={`/users`}
									element={
										<UsersPageContainer/>}
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