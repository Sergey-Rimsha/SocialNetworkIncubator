import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {ProfileContainer} from "../../pages/Profile/ProfileContainer";
import {DialogsContainer} from "../../pages/Dialogs/DialogsContainer";
import {UsersPageContainer} from "../../pages/UsersPage/UsersPageContainer";
import {LoginContainer} from "../../pages/Auth/LoginContainer";
import {Layout} from "../Layout";

export const PathURL = {
	profile: 'profile',
	dialogs: 'dialogs',
	users: 'users',
	auth: 'auth',
}

export const Routing = () => {
	return (
		<>
			<Routes>
				<Route path={'/'} element={<Layout/>}>
					<Route index element={<Navigate to={PathURL.profile}/>}/>
					<Route path={PathURL.profile}
						   element={
							   <WithAuthRedirect>
								   <ProfileContainer/>
							   </WithAuthRedirect>
						   }>
						<Route path={`:userId`}
							   element={
								   <WithAuthRedirect>
									   <ProfileContainer/>
								   </WithAuthRedirect>
							   }/>
					</Route>
					<Route path={PathURL.dialogs}
						   element={
							   <WithAuthRedirect>
								   <DialogsContainer/>
							   </WithAuthRedirect>
						   }/>
					<Route path={PathURL.users}
						   element={
							   <WithAuthRedirect>
								   <UsersPageContainer/>
							   </WithAuthRedirect>
						   }/>
					<Route path={PathURL.auth}
						   element={<LoginContainer/>}/>
				</Route>
			</Routes>
		</>
	);
};
