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

import {AddPostType} from "./index";

// type on change --- ----- -- - -- -
export type OnChangeMessagePostType = (text: string) => void
export type OnChangeMessChatType = (text: string) => void
export type AddMessageChatType = () => void

type RootStateType = {
	state: StateType
	addPost: AddPostType
	onChangeMessagePost: OnChangeMessagePostType
	onChangeMessChat: OnChangeMessChatType
	addMessageChat: AddMessageChatType
}
type StateType = {
	dialogsPage: DialogsType
	profilePage: PostType
}
type DialogsType = {
	chatUsers: Array<InUser>
	messages: Array<InMessage>
	changeMessChat: string
}
type InUser = {
	id: number
	name: string
}
type InMessage = {
	id: number
	name: string
	message: string
}
type PostType = {
	posts: Array<InPost>
	changeMessage: string
}
type InPost = {
	id: number
	message: string
	likesCount: number
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
											addPost={props.addPost}
											onChangeMessagePost={props.onChangeMessagePost}
									/>}
								/>
								<Route
									path={`/dialogs`}
									element={
										<Dialogs
											dialogsPage={props.state.dialogsPage}
											addMessageChat={props.addMessageChat}
											onChangeMessChat={props.onChangeMessChat}
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