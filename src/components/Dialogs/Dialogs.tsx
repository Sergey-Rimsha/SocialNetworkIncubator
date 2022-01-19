import React from "react";
import UserImg from "../../img/ava_default.jpg";
import {ChatUsers} from "./ChatUsers/ChatUsers";
import {NewMessages} from "./NewMessages/NewMessages";
import {ActionType, DialogsType, InMessage, InUser} from "../../redux/state";

type PropsType = {
	dialogsPage: DialogsType
	dispatch: (action: ActionType) => void
}


export function Dialogs (props: PropsType) {

	let message = props.dialogsPage.messages.map((mess: InMessage) => {
		return (
			<div className="message" >
				<div className="imgWrap">
					<img className="messageImg" src={UserImg} alt="user_img"/>
				</div>
				<div className="messageWrap">
					<div className="userName">
						{mess.name}
					</div>
					<div className="userTxt">
						{mess.message}
					</div>
					<div className="messageTime">
						{`props.time`}
					</div>
				</div>
			</div>
		)
	});

	return (
		<div className="dialogs-wrap">
			<div className="user-chat-wrap">
				{
					props.dialogsPage.chatUsers.map((user: InUser) => {
						return <ChatUsers userId={user.id} userName={user.name} />
					})
				}
			</div>
			<div className="dialogs">
				{message}
				<NewMessages
					changeMessChat={props.dialogsPage.changeMessChat}
					dispatch={props.dispatch}
				/>
			</div>
		</div>
	)
}


