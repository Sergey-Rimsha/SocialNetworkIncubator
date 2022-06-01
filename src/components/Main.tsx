import React from 'react';
import {Route, Routes} from "react-router-dom";
import ProfileContainer from "./Profile/ProfileContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersPageContainer from "./UsersPage/UsersPageContainer";
import {LoginContainer} from "./Auth/LoginContainer";

export const Main = () => {
	return (
		<div className="content">
			<Routes>
				<Route
					path={'/'}
					element={<ProfileContainer/>}
				/>
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
				<Route
					path={`/auth`}
					element={
						<LoginContainer/>}
				/>
			</Routes>
		</div>
	);
};
