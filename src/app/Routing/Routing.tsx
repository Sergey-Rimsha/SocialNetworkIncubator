import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {ProfileContainer} from "../../pages/Profile/ProfileContainer";
import {DialogsContainer} from "../../pages/Dialogs/DialogsContainer";
import {UsersPageContainer} from "../../pages/UsersPage/UsersPageContainer";
import {LoginContainer} from "../../pages/Auth/LoginContainer";
import {Layout} from "../Layout";
import {ChatContainer} from "../../pages/Chat/ChatContainer";

export const PathURL = {
	profile: 'profile',
	dialogs: 'dialogs',
	users: 'users',
	auth: 'auth',
	chat: 'chat',
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
					<Route path={PathURL.chat}
						   element={
							   <WithAuthRedirect>
								   <ChatContainer/>
							   </WithAuthRedirect>
						   }>
						<Route path={`:userChat`}
							   element={
								   <WithAuthRedirect>
									   <ChatContainer/>
								   </WithAuthRedirect>
							   }>
						</Route>
					</Route>
					<Route path={PathURL.auth}
						   element={<LoginContainer/>}/>
					<Route path={'*'} element={<div>Not Found</div>}/>
				</Route>

			</Routes>
		</>
	);
};
