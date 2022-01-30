import React from "react";
import UserImg from "../../img/ava_default.jpg";
import {ChatUsers} from "./ChatUsers/ChatUsers";
import {SendMessage} from "./SendMessage/SendMessage";
import {DialogsType, InMessage, InUser} from "../../redux/store";

type PropsType = {

	dialogsPage: DialogsType
	sendMessage: () => void
	onChangeHandler: (text: string) => void

}


export function Dialogs (props: PropsType) {

	let message = props.dialogsPage.messages.map((mess: InMessage, i) => {
		return (
			<div key={i} className="message" >
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
					props.dialogsPage.chatUsers.map((user: InUser, i) => {
						return <ChatUsers key={i} userId={user.id} userName={user.name} />
					})
				}
			</div>
			<div className="dialogs">
				{message}
				<SendMessage
					changeMessChat={props.dialogsPage.changeMessChat}
					sendMessage={props.sendMessage}
					onChangeHandler={props.onChangeHandler}
				/>
			</div>
		</div>
	)
}


