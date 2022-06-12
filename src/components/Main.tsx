import React from 'react';
import {Route, Routes} from "react-router-dom";
import {LoginContainer} from "./Auth/LoginContainer";
import {ProfileContainer} from "./Profile/ProfileContainer";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {UsersPageContainer} from "./UsersPage/UsersPageContainer";
import {DialogsContainer} from "./Dialogs/DialogsContainer";

export const Main = () => {
	return (
		<div className="content">
			<Routes>
				<Route
					path={'/'}
					element={
						<WithAuthRedirect>
							<ProfileContainer/>
						</WithAuthRedirect>
				}
				/>
				<Route
					path={`/profile`}
					element={
						<WithAuthRedirect>
							<ProfileContainer/>
						</WithAuthRedirect>
						}>
					<Route
						path={`:userId`}
						element={
							<WithAuthRedirect>
								<ProfileContainer/>
							</WithAuthRedirect>
						}/>
				</Route>
				<Route
					path={`/dialogs`}
					element={
						<WithAuthRedirect>
							<DialogsContainer/>
						</WithAuthRedirect>
					}/>
				<Route
					path={`/users`}
					element={
						<WithAuthRedirect>
							<UsersPageContainer/>
						</WithAuthRedirect>
				}/>
				<Route
					path={`/auth`}
					element={<LoginContainer/>}/>
			</Routes>
		</div>
	);
};
