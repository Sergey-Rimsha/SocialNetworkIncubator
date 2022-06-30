import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {ProfileContainer} from "../Profile/ProfileContainer";
import {DialogsContainer} from "../Dialogs/DialogsContainer";
import {UsersPageContainer} from "../UsersPage/UsersPageContainer";
import {LoginContainer} from "../Auth/LoginContainer";
import {Layout} from "../Layout";

export const Routing = () => {
	return (
		<>
			<Routes>
				<Route path={'/'} element={<Layout/>}>
					<Route index element={<Navigate to={'profile'}/>}/>
					<Route path={`profile`}
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
					<Route path={`dialogs`}
						   element={
							   <WithAuthRedirect>
								   <DialogsContainer/>
							   </WithAuthRedirect>
						   }/>
					<Route path={`users`}
						   element={
							   <WithAuthRedirect>
								   <UsersPageContainer/>
							   </WithAuthRedirect>
						   }/>
					<Route path={`auth`}
						   element={<LoginContainer/>}/>
				</Route>
			</Routes>
		</>
	);
};
